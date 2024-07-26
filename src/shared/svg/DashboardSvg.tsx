import { FC } from 'react'
import cn from '@/features/lib/cn'

const DashboardSvg: FC<{ className?: string }> = ({ className }) => {
	return (
		<svg
			className={cn('w-6 h-auto stroke-current', className)}
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="none"
		>
			<path
				stroke="inherit"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="1.5"
				d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7Z"
			/>
			<path
				stroke="inherit"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeMiterlimit="10"
				strokeWidth="1.5"
				d="M16.28 13.61a4.15 4.15 0 0 1-4.18 1.03l-2.59 2.58c-.18.19-.55.31-.82.27l-1.2-.16c-.4-.05-.76-.43-.82-.82l-.16-1.2c-.04-.26.09-.63.27-.82l2.58-2.58a4.17 4.17 0 1 1 6.92 1.7ZM10.45 16.28l-.85-.86"
			/>
			<path
				stroke="inherit"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M13.4 10.7h0"
			/>
		</svg>
	)
}

export default DashboardSvg
