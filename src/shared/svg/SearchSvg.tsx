import { FC } from 'react'
import cn from '@/features/lib/cn'

const SearchSvg: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={cn('w-6 h-auto stroke-current', className)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
				stroke="inherit"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M21 21L16.65 16.65"
				stroke="inherit"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	)
}

export default SearchSvg
