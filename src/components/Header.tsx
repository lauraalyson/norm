import { Button } from "@/ui/Button"

interface Props {
	loading: boolean
	fetchComplianceData: () => void
}

const Header = ({ loading, fetchComplianceData }: Props) => {
	return (
		<header className='w-fill flex justify-between my-4 mx-2'>
			<h1 className='text-lg font-medium'>Compliance Review</h1>
			<Button
				color='blue'
				variant='outline'
				onClick={fetchComplianceData}
				disabled={loading}
				size='medium'
				className=''
			>
				{loading ? 'Loading...' : 'New Document'}
			</Button>
		</header>
	)
}

export default Header
