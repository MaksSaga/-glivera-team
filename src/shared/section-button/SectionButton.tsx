'use client'

import { FC } from 'react'
import { routingItem } from '@/data/routing/routing'
import Link from 'next/link'
import ArrowSvg from '@/shared/svg/ArrowSvg'
import { usePathname } from 'next/navigation'
import cn from '@/features/lib/cn'

const SectionButton: FC<{ routingItem: routingItem; callback: () => void }> = ({
	routingItem,
	callback,
}) => {
	const pathname = usePathname()
	const { title, path, Icon } = routingItem

	const isActive = pathname === '/' + (path === '/' ? '' : path)

	return (
		<Link
			onClick={callback}
			href={path}
			className={cn(
				'grid grid-cols-[auto_1fr_auto] text-periwinkle items-center gap-3.5 p-[11px] rounded-[8px] w-full group',
				isActive && 'bg-amethyst text-white hover:bg-amethyst'
			)}
		>
			<Icon />
			<p className="text-inherit text-sm font-medium first-letter:uppercase">
				{title}
			</p>
			<ArrowSvg
				className={cn(
					'w-1 justify-self-end transition-transform group-hover:translate-x-2/3',
					isActive && 'opacity-0'
				)}
			/>
		</Link>
	)
}

export default SectionButton
