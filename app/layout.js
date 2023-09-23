import './globals.css'
import Nav from './components/Nav'
import { Palanquin } from 'next/font/google'

const palanquin = Palanquin({ subsets: ['latin'], weight: '400' })

export const metadata = {
	title: 'Conopliov Victor',
	description: 'Shopify Developer',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={palanquin.className}>
				<Nav />
				{children}
			</body>
		</html>
	)
}
