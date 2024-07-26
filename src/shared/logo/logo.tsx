import { FC } from 'react'
import Link from 'next/link'

interface ILogo {
	version?: string
}

const Logo: FC<ILogo> = ({ version = 'v.01' }) => {
	return (
		<Link href="/" className="flex items-center gap-2.5">
			<svg className="fill-black size-9" viewBox="0 0 37 37">
				<path
					fill="inherit"
					d="M18.5 34.89a5.85 5.85 0 0 1-2.9-.71l-8.48-4.89c-3.45-2.33-3.67-2.68-3.67-6.33v-8.92c0-3.65.2-4 3.6-6.3l8.54-4.93a6.28 6.28 0 0 1 5.78 0l8.5 4.9c3.46 2.33 3.68 2.68 3.68 6.33v8.9c0 3.65-.2 4-3.6 6.3l-8.54 4.94c-.83.48-1.88.7-2.91.7Zm0-30.47c-.65 0-1.28.13-1.73.39L8.3 9.71c-2.5 1.7-2.5 1.7-2.5 4.33v8.9c0 2.64 0 2.64 2.57 4.38l8.41 4.85c.91.53 2.56.53 3.47 0l8.48-4.9c2.5-1.7 2.5-1.7 2.5-4.33v-8.9c0-2.63 0-2.63-2.58-4.37L20.23 4.8a3.53 3.53 0 0 0-1.73-.39Z"
				/>
				<path
					fill="inherit"
					d="M18.5 24.28a5.78 5.78 0 1 1 0-11.57 5.78 5.78 0 0 1 0 11.57Zm0-9.25a3.47 3.47 0 1 0 .01 6.95 3.47 3.47 0 0 0-.01-6.95Z"
				/>
			</svg>
			<div className="flex items-end">
				<h1 className="text-black text-[26px] font-semibold">Dashboard</h1>
				<p className="text-periwinkle text-[10px] ml-1 mb-2">{version}</p>
			</div>
		</Link>
	)
}

export default Logo
