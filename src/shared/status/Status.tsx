import { FC } from 'react'
import cn from '@/features/lib/cn'

interface IStatus {
	status: 'Active' | 'Inactive'
	className?: string
}

const Status: FC<IStatus> = ({ status, className }) => {
	return (
		<div
			className={cn(
				'py-1 border-[1px] rounded-[4px] text-sm font-medium',
				status === 'Active'
					? 'bg-opacity-40 bg-aqua text-jade px-[18px] border-jade'
					: 'bg-blush text-scarlet px-[12px] border-scarlet',
				className
			)}
		>
			{status}
		</div>
	)
}

export default Status
