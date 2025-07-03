import ComplianceTree from '@/components/Compliance/ComplianceTree'
import { useEffect, useState } from 'react'
import AuditLog from '../components/AuditLog'
import ComplianceOverview from '../components/Compliance/ComplianceOverview'
import ErrorMessage from '../components/ErrorMessage'
import Header from '../components/Header'
import type { ComplianceData, RootData } from '../types/compliance'

const ComplianceTable = () => {
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<string | null>(null)

	const [auditLog, setAuditLog] = useState<string[]>([])
	const [complianceOverview, setComplianceOverview] = useState<RootData | null>(
		null
	)
	const [complianceChildren, setComplianceChildren] = useState<
		ComplianceData[]
	>([])

	const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())
	const [overrides, setOverrides] = useState<Map<number, 'PASS' | 'FAIL'>>(
		new Map()
	)

	const sortComplianceData = (responseData: ComplianceData) => {
		const { children, ...rootNodeDetails } = responseData

		setComplianceOverview(rootNodeDetails as RootData)
		setComplianceChildren(children || [])
	}

	const fetchComplianceData = async () => {
		setAuditLog(['New document uploaded for review'])
		try {
			setLoading(true)
			setError(null)

			const response = await fetch('/api/')
			const data: ComplianceData = await response.json()

			sortComplianceData(data)
			setAuditLog((prev) => [
				...prev,
				'Processing Document',
				'Ready for review',
			])
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Unable to get data')
			setAuditLog((prev) => [...prev, 'Unable to analyze resource'])
		} finally {
			setLoading(false)
		}
	}

	const isOverridden = (
		id: number,
		status: 'PASS' | 'FAIL' | undefined
	): boolean => {
		if (!overrides.has(id)) {
			return false
		}
		const overrideStatus = overrides.get(id)
		return overrideStatus !== status
	}

	const getCurrentStatus = (
		item: ComplianceData
	): 'PASS' | 'FAIL' | undefined => {
		if (overrides.has(item.id)) {
			return overrides.get(item.id)
		}
		if (item.children.length === 0) {
			return item.status
		}
		const allChildrenPass = item.children.every(
			(child) => getCurrentStatus(child) === 'PASS'
		)
		return allChildrenPass ? 'PASS' : 'FAIL'
	}

	const handleOverride = (
		id: number,
		newStatus: 'PASS' | 'FAIL',
		name: string
	) => {
		setOverrides((prev) => new Map(prev).set(id, newStatus))

		const logEntry = isOverridden(id, newStatus)
			? `${name} status reverted`
			: `${name} has been overridden`
		setAuditLog((prev) => [...prev, logEntry])
	}

	const handleToggle = (id: number) => {
		setExpandedItems((prev) => {
			const newSet = new Set(prev)
			if (newSet.has(id)) {
				newSet.delete(id)
			} else {
				newSet.add(id)
			}
			return newSet
		})
	}

	useEffect(() => {
		fetchComplianceData()
	}, [])

	return (
		<div className='w-full mx-auto px-24 py-6'>
			<Header loading={loading} fetchComplianceData={fetchComplianceData} />

			{loading && 'Loading...'}

			{error && <ErrorMessage error={error} />}

			{!loading && !error && !complianceOverview && (
				<div className='text-center p-8 text-gray-500'>No data available</div>
			)}

			{!loading && !error && complianceOverview && (
				<div className='w-full flex justify-between'>
					<div className='w-full h-[600px] bg-white border border-r-0 rounded-l overflow-scroll'>
						<ComplianceOverview
							isCompliant={
								!complianceChildren.some(
									(item) => getCurrentStatus(item) === 'FAIL'
								)
							}
							complianceOverview={complianceOverview}
						/>
						<ComplianceTree
							complianceChildren={complianceChildren}
							onOverride={handleOverride}
							getCurrentStatus={getCurrentStatus}
							isOverridden={isOverridden}
							expandedItems={expandedItems}
							onToggle={handleToggle}
						/>
					</div>
					<AuditLog auditLog={auditLog} />
				</div>
			)}
		</div>
	)
}

export default ComplianceTable
