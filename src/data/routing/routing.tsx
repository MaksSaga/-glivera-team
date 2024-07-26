'use client'

import DashboardSvg from '@/shared/svg/DashboardSvg'
import ProductSvg from '@/shared/svg/ProductSvg'
import CustomersSvg from '@/shared/svg/CustomersSvg'
import IncomeSvg from '@/shared/svg/IncomeSvg'
import PromoteSvg from '@/shared/svg/PromoteSvg'
import HelpSvg from '@/shared/svg/HelpSvg'
import { FC } from 'react'

export interface routingItem {
	title: string
	path: string
	Icon: FC
}

export const routingData: routingItem[] = [
	{ title: 'dashboard', path: '/', Icon: DashboardSvg },
	{ title: 'product', path: 'product', Icon: ProductSvg },
	{ title: 'customers', path: 'customers', Icon: CustomersSvg },
	{ title: 'income', path: 'income', Icon: IncomeSvg },
	{ title: 'promote', path: 'promote', Icon: PromoteSvg },
	{ title: 'help', path: 'help', Icon: HelpSvg },
]
