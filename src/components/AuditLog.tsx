import { Button } from '@/ui/Button'
import clsx from 'clsx'
import { ArrowLeftFromLineIcon, ArrowRightFromLineIcon } from 'lucide-react'
import { useState } from 'react'

interface Props {
	auditLog: string[]
}

const AuditLog = ({ auditLog }: Props) => {
	const [expanded, setIsExpanded] = useState<boolean>(true)
	const handleExpand = () => setIsExpanded(!expanded)

	return (
		<div
			className={clsx(
				'bg-white border rounded-r border-gray-200',
				expanded ? 'p-4' : 'p-2'
			)}
		>
			{expanded ? (
				<div className='w-72 h-full'>
					<div className='flex gap-1 items-center'>
						<Button variant='ghost' color='gray' onClick={handleExpand}>
							<ArrowRightFromLineIcon size={14} />
						</Button>
						<h2 className='flex gap-1 font-medium'>Audit Log</h2>
					</div>

					<div className='p-4'>
						{auditLog.length && (
							<div className='space-y-4'>
								{auditLog.map((i) => {
									return <p key={i} className='text-sm text-gray-500'>{i}</p>
								})}
							</div>
						)}
					</div>
				</div>
			) : (
				<Button variant='ghost' color='gray' onClick={handleExpand}>
					<ArrowLeftFromLineIcon size={14} />
				</Button>
			)}
		</div>
	)
}

export default AuditLog
