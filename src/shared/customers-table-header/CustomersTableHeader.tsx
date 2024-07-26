import { FC } from 'react'

const CustomersTableHeader: FC = () => (
	<div className="text-sm text-mist grid grid-cols-[1fr_1fr_1fr_1.5fr_1fr_1fr] gap-5 w-full justify-between mt-10 max-lg:grid-cols-[1fr_1fr_auto] grid-rows-2 max-sm:grid-cols-[1fr_auto] max-sm:grid-rows-3 max-[400px]:grid-cols-[2fr_1fr] max-[400px]:text-[12px]">
		<p>Customer Name</p>
		<p className="max-sm:justify-self-end max-[400px]:justify-self-start">
			Company
		</p>
		<p>Phone Number</p>
		<p className="max-sm:justify-self-end max-[400px]:justify-self-start">
			Email
		</p>
		<p>Country</p>
		<p className="items-center self-center justify-self-end mr-[22px] max-lg:mr-0 max-lg:justify-self-start max-sm:justify-self-end max-[400px]:justify-self-start">
			Status
		</p>
	</div>
)

export default CustomersTableHeader
