'use client'

import Search from '@/shared/search/Search'
import { customers } from '@/data/fake/customers'
import Status from '@/shared/status/Status'
import PaginationButton from '@/shared/pagination-button/PaginationButton'
import ArrowSvg from '@/shared/svg/ArrowSvg'
import CustomersTableHeader from '@/shared/customers-table-header/CustomersTableHeader'

export default function Page() {
	const countPaginationButton = new Array(Math.max(customers.length / 4)).fill(
		1
	)

	return (
		<div className="bg-white w-full rounded-[30px] break-words">
			<div className="mb-5 px-8 pt-7 border-b-[1px] border-b-pearl pb-3 max-sm:px-4">
				<div className=" grid grid-rows-[auto_auto] grid-cols-[1fr_auto] gap-1.5 max-sm:grid-cols-1 ">
					<h3 className="font-semibold text-2xl text-black">All Customers</h3>
					<p className="text-aqua text-sm font-normal row-start-2">
						Active Members
					</p>
					<Search
						changeValueFunction={value => console.log(value)}
						className="row-span-2 self-end"
					/>
				</div>
				<CustomersTableHeader />
			</div>
			<div className="px-8 pb-5 flex flex-col gap-y-4 overflow-hiddener max-sm:px-4  break-all">
				{customers.map(item => {
					return (
						<div
							key={item.phoneNumber}
							className="overflow-ellipsis  border-b-[1px] border-b-pearl pb-2 text-sm font-medium grid grid-cols-[1fr_1fr_1fr_1.5fr_1fr_1fr] gap-x-5 w-full justify-between text-onyx max-lg:grid-cols-[1fr_1fr_auto] grid-rows-2 max-sm:grid-cols-[2fr_1fr] max-sm:grid-rows-3  max-[400px]:text-[12px]"
						>
							<p>{item.customerName}</p>
							<p className="max-sm:justify-self-end max-[400px]:justify-self-start">
								{item.company}
							</p>
							<p>{item.phoneNumber}</p>
							<p className="max-sm:justify-self-end max-[400px]:justify-self-start">
								{item.email}
							</p>
							<p>{item.country}</p>
							<Status
								className="justify-self-end self-start max-sm:justify-self-end max-[400px]:justify-self-start"
								status={item.status}
							/>
						</div>
					)
				})}
			</div>
			<div className="mb-5 px-8 flex justify-between gap-4 flex-wrap max-sm:px-4">
				<p className="text-mist text-sm font-normal">
					Showing data 1 to 8 of 256K entries
				</p>
				<div className="flex gap-3">
					<PaginationButton callback={() => console.log('<')}>
						<ArrowSvg className="rotate-180 w-1.5 ml-1.5" />
					</PaginationButton>
					{countPaginationButton.map((item, index) => (
						<PaginationButton key={index} callback={() => console.log('click')}>
							{item[index]}
						</PaginationButton>
					))}
					<PaginationButton callback={() => console.log('>')}>
						<ArrowSvg className="w-1.5 ml-2" />
					</PaginationButton>
				</div>
			</div>
		</div>
	)
}
