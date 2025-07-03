import clsx from 'clsx'

interface BadgeProps {
	color: 'red' | 'green'
	text: string
}

const Badge = ({ text, color }: BadgeProps) => {
	const getColor = () => {
		switch (color) {
			case 'red':
				return 'text-rose-700 border-rose-200 bg-rose-50'
			case 'green':
				return 'text-emerald-700 border-emerald-200 bg-emerald-50'
		}
	}
	return (
		<span
			className={clsx(
				'mx-1 pt-[1px] cursor-default px-2 mt-[2px] h-5 text-xs font-medium rounded-full border uppercase',
				getColor()
			)}
		>
			{text}
		</span>
	)
}

export default Badge
