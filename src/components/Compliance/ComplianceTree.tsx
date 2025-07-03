import ComplianceItem from '@/components/Compliance/ComplianceItem'
import type { ComplianceTreeProps } from '@/types/compliance'

const ComplianceTree = ({
	complianceChildren,
	onOverride,
	getCurrentStatus,
	isOverridden,
	expandedItems,
	onToggle,
}: ComplianceTreeProps) => {
	return (
		<div className='h-[600px] overflow-scroll'>
			{complianceChildren.map((child) => (
				<ComplianceItem
					key={child.id}
					item={child}
					onOverride={onOverride}
					getCurrentStatus={getCurrentStatus}
					isOverridden={isOverridden}
					expandedItems={expandedItems}
					onToggle={onToggle}
				/>
			))}
		</div>
	)
}

export default ComplianceTree
