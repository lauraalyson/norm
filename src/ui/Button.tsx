import clsx from 'clsx'
import { forwardRef } from 'react'

type Variant = 'solid' | 'outline' | 'ghost'
type Color = 'blue' | 'gray'
type Size = 'small' | 'medium' | 'large'

interface ButtonProps {
	onClick: () => void
	children: React.ReactNode
	variant?: Variant
	color?: Color
	size?: Size
	className?: string
	disabled?: boolean
}

const colorStyles: Record<Variant, Record<Color, string>> = {
	solid: {
		blue: 'bg-sky-500 text-white hover:bg-sky-600',
		gray: 'bg-gray-500 text-white hover:bg-gray-600',
	},
	outline: {
		blue: 'bg-sky-50 text-sky-700 border-sky-200 border hover:bg-sky-100',
		gray: 'bg-gray-50 text-gray-700 border-gray-200 border hover:bg-gray-100',
	},
	ghost: {
		blue: 'bg-none text-sky-700 border-none hover:bg-sky-100',
		gray: 'bg-none text-gray-700 border-none hover:bg-gray-100',
	},
}

const buttonSizes = {
	small: 'h-6 px-2 text-xs',
	medium: 'h-8 px-2 text-sm',
	large: 'h-10 px-2 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className = '',
			variant = 'outline',
			color = 'gray',
			size = 'medium',
			disabled = false,
			onClick,
			children,
		},
		ref
	) => {
		return (
			<button
				ref={ref}
				type='button'
				disabled={disabled}
				onClick={onClick}
				className={clsx(
					'rounded focus:outline-none cursor-pointer transition disabled:opacity-50 ',
					colorStyles[variant][color],
					buttonSizes[size],
					className
				)}
			>
				{children}
			</button>
		)
	}
)
