'use client'

import React, { FC } from 'react'
import cn from '@/features/lib/cn'

interface IPaginationButton {
	callback: () => void
	children?: React.ReactNode
	isActive?: boolean
}

const PaginationButton: FC<IPaginationButton> = ({
	callback,
	children,
	isActive,
}) => {
	return (
		<button
			type="button"
			onClick={() => callback()}
			className={cn(
				'size-6 rounded-[4px] border-[1px] border-pearl bg-snow text-sm font-medium text-slate hover:bg-amethyst hover:border-amethyst hover:text-white transition-colors duration-75',
				isActive && 'bg-amethyst border-amethyst text-white'
			)}
		>
			{children || 0}
		</button>
	)
}

export default PaginationButton
