interface Props {
	error: string
}

const ErrorMessage = ({ error }: Props) => (
	<div className='bg-white border border-gray-200 rounded p-4'>
		<div className='w-full text-center font-gray-700'>
				<h3 className='font-medium'>Unable to process document.</h3>
				<p className='text-sm mt-1 font-mono'>Error: {error}</p>
		</div>
	</div>
)

export default ErrorMessage
