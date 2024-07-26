import { FC } from 'react'
import Image from 'next/image'
import ava from '@/shared/img/ava.png'

const UserCard: FC = () => {
	return (
		<div className="grid grid-cols-[auto_1fr]  gap-x-3">
			<Image src={ava} alt="ava" className="size-11 row-span-2" />
			<h3>Maksym Sahaidak</h3>
			<p className="text-mist">Frontend React</p>
		</div>
	)
}

export default UserCard
