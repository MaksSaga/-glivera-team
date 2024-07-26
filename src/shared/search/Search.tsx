'use client'

import SearchSvg from '@/shared/svg/SearchSvg'
import { FC, useEffect, useState } from 'react'
import cn from '@/features/lib/cn'

interface ISearch {
	changeValueFunction: (value: string | undefined) => void
	className?: string
}

const Search: FC<ISearch> = ({ changeValueFunction, className }) => {
	const [value, setValue] = useState<undefined | string>(undefined)

	useEffect(() => {
		changeValueFunction(value)
	}, [value])

	return (
		<div className={cn('relative text-graphite', className)}>
			<input
				type="text"
				className=" bg-[#F9FBFF] rounded-[10px] pl-10 pr-2.5 py-2.5 placeholder-mist font-normal text-[12px] text-onyx"
				placeholder="Search"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<SearchSvg className="absolute transform translate-x-1/3 translate-y-1/4 top-0 left-0" />
		</div>
	)
}

export default Search
