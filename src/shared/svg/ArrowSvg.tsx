import { FC } from 'react'
import cn from '@/features/lib/cn'

const ArrowSvg: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={cn('w-3 h-auto stroke-current', className)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 6 10"
			fill="none"
		>
			<path
				stroke="inherit"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="m1 9 4-4-4-4"
			/>
		</svg>
	)
}

export default ArrowSvg
