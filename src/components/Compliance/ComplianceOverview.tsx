import Badge from '@/ui/Badge'
import type { RootData } from '../../types/compliance'

interface Props {
	isCompliant: boolean
	complianceOverview: RootData
}

const ComplianceOverview = ({ isCompliant, complianceOverview }: Props) => {
	return (
		<div className='sticky top-0 bg-white p-4 flex w-full justify-between items-end border-b'>
			<div>
				<h2 className='mb-2 text-lg font-medium'>Overview</h2>
				<p className='text-gray-700'>Document #{complianceOverview.id}</p>
			</div>
			<Badge
				text={isCompliant ? 'Compliant' : 'Not Compliant'}
				color={isCompliant ? 'green' : 'red'}
			/>
		</div>
	)
}

export default ComplianceOverview
