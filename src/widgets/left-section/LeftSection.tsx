'use client'

import { routingData } from '@/data/routing/routing'
import SectionButton from '@/shared/section-button/SectionButton'
import Logo from '@/shared/logo/logo'
import UserCard from '@/shared/userCard/userCard'
import { useState } from 'react'
import cn from '@/features/lib/cn'
import ArrowSvg from '@/shared/svg/ArrowSvg'
import CrossSvgUrl from '@/shared/img/cross.svg'
import Image from 'next/image'

const LeftSection = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const toggleIsOpen = () => setIsOpen(prevState => !prevState)

	return (
		<div>
			<section
				className={cn(
					'w-[270px] grid grid-cols-1 grid-rows-[auto_1fr_auto] fixed min-h-dvh gap-16 bg-white px-7 pt-9 pb-20 max-xl:-translate-x-full transition-transform z-50 duration-500  max-sm:w-full scroll-auto max-sm:pb-9',
					isOpen && 'max-xl:translate-x-0'
				)}
			>
				<button
					type="button"
					className={cn(
						'absolute top-1/2 right-0 translate-x-[150%] xl:hidden transition duration-500 text-black',
						isOpen && 'rotate-180 text-white'
					)}
					onClick={toggleIsOpen}
				>
					<ArrowSvg />
				</button>
				<div className="flex justify-between items-center">
					<Logo />
					<p
						onClick={toggleIsOpen}
						className="sm:hidden text-2xl font-semibold"
					>
						<Image
							src={CrossSvgUrl}
							alt="X"
							className="size-4 -translate-y-[2px]"
						/>
					</p>
				</div>
				<div className="flex flex-col gap-2.5 w-full">
					{routingData.map(item => (
						<SectionButton
							callback={toggleIsOpen}
							key={item.path}
							routingItem={item}
						/>
					))}
				</div>
				<UserCard />
			</section>
			<div
				className={cn(
					'w-full fixed bg-black opacity-0 h-dvh xl:hidden z-40 duration-500 select-none pointer-events-none',
					isOpen && 'opacity-50 select-all pointer-events-auto'
				)}
				onClick={toggleIsOpen}
			></div>
		</div>
	)
}

export default LeftSection
