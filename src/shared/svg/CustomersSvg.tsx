import { FC } from 'react'
import cn from '@/features/lib/cn'

const CustomersSvg: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={cn('w-6 h-auto fill-current stroke-current', className)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				fill="inherit"
				stroke="none"
				d="M15 22.75H9c-1.32 0-2.42-.13-3.35-.41a.77.77 0 0 1-.54-.78c.25-2.99 3.28-5.34 6.9-5.34 3.6 0 6.62 2.34 6.88 5.34a.74.74 0 0 1-.54.78c-.93.28-2.03.41-3.35.41Zm-8.28-1.69c.66.13 1.41.19 2.28.19h6c.87 0 1.62-.06 2.28-.19-.53-1.92-2.72-3.34-5.28-3.34s-4.75 1.42-5.28 3.34Z"
			/>
			<path
				stroke="inherit"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M15 2H9C4 2 2 4 2 9v6c0 3.78 1.14 5.85 3.86 6.62.22-2.6 2.89-4.65 6.14-4.65 3.25 0 5.92 2.05 6.14 4.65C20.86 20.85 22 18.78 22 15V9c0-5-2-7-7-7Zm-3 12.17A3.58 3.58 0 1 1 12.01 7a3.58 3.58 0 0 1-.01 7.17Z"
			/>
			<path
				fill="inherit"
				stroke="none"
				d="M12 14.92a4.34 4.34 0 1 1 .02-8.68 4.34 4.34 0 0 1-.02 8.68Zm0-7.17a2.83 2.83 0 1 0 0 5.67 2.83 2.83 0 0 0 0-5.67Z"
			/>
		</svg>
	)
}

export default CustomersSvg
