import Badge from '@/ui/Badge'
import { Button } from '@/ui/Button'
import clsx from 'clsx'
import { ChevronDown, ChevronRight, CornerDownRight } from 'lucide-react'
import type { ComplianceItemProps } from '../../types/compliance'

const ComplianceItem = ({
	item,
	subtask = false,
	onOverride,
	getCurrentStatus,
	isOverridden,
	expandedItems,
	onToggle,
}: ComplianceItemProps) => {
	const { id, name, status, reason, children } = item

	const isExpanded = expandedItems.has(id)
	const currentStatus = getCurrentStatus(item)
	const hasChildren = children.length > 0

	const handleOverrideClick = () => {
		const newStatus = currentStatus === 'PASS' ? 'FAIL' : 'PASS'
		onOverride(item.id, newStatus, item.name)
	}

	return (
		<div className={clsx('border-b', subtask && 'ml-12 !text-sm border-none')}>
			<div
				className={clsx(
					' border-gray-200 px-2 py-4 bg-white flex',
					subtask && 'border-none'
				)}
			>
				<div className='w-10'>
					<Button
						size='small'
						variant='ghost'
						className={clsx('', (subtask || !hasChildren) && 'hidden')}
						onClick={() => onToggle(item.id)}
						disabled={!hasChildren}
					>
						{hasChildren &&
							(isExpanded ? (
								<ChevronDown size={16} />
							) : (
								<ChevronRight size={16} />
							))}
					</Button>
				</div>

				<div className='w-full'>
					<div className='flex justify-between items-center mb-2'>
						<div className='flex gap-1'>
							{subtask && <CornerDownRight size={16} />}
							<h3 className={clsx('font-medium')}>{name}</h3>
							<Badge
								text={currentStatus || ''}
								color={currentStatus === 'PASS' ? 'green' : 'red'}
							/>
						</div>
						<Button
							onClick={handleOverrideClick}
							color='gray'
							size='small'
							variant='outline'
						>
							{isOverridden(id, status) ? 'Revert' : 'Override'}
						</Button>
					</div>
					<div className='text-gray-700 text-sm bg-gray-50 p-2 rounded border border-gray-200 w-full flex justify-between'>
						{reason && <p>{item.reason}</p>}
						<span className='font-mono text-xs'>#{id}</span>
					</div>
				</div>
			</div>

			{hasChildren && isExpanded && (
				<div className=''>
					{children.map((child) => (
						<ComplianceItem
							key={child.id}
							item={child}
							subtask={true}
							onOverride={onOverride}
							getCurrentStatus={getCurrentStatus}
							isOverridden={isOverridden}
							expandedItems={expandedItems}
							onToggle={onToggle}
						/>
					))}
				</div>
			)}
		</div>
	)
}

export default ComplianceItem
