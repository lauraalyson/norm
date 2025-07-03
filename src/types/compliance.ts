export interface ComplianceData {
	id: number
	type: 'SUB_CHECK' | 'CHECK' | 'ROOT'
	name: string
	status?: 'PASS' | 'FAIL'
	reason?: string
	children: ComplianceData[]
}

export interface RootData {
	id: number
	type: 'ROOT'
	name: string
	status?: 'PASS' | 'FAIL'
	reason?: string
}

export interface ComplianceItemProps {
	item: ComplianceData
	subtask?: boolean
	onOverride: (id: number, newStatus: 'PASS' | 'FAIL', name: string) => void
	getCurrentStatus: (item: ComplianceData) => 'PASS' | 'FAIL' | undefined
	isOverridden: (id: number, status: 'PASS' | 'FAIL' | undefined) => boolean
	expandedItems: Set<number>
	onToggle: (id: number) => void
}

export interface ComplianceTreeProps {
	complianceChildren: ComplianceData[]
	onOverride: (id: number, newStatus: 'PASS' | 'FAIL', name: string) => void
	getCurrentStatus: (item: ComplianceData) => 'PASS' | 'FAIL' | undefined
	isOverridden: (id: number, status: 'PASS' | 'FAIL' | undefined) => boolean
	expandedItems: Set<number>
	onToggle: (id: number) => void
}
