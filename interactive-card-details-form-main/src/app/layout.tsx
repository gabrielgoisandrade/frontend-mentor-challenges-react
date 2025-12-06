import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { ReactNode } from 'react'
import '../styles/globals.scss'

const spaceGrotesk = Space_Grotesk({
    weight: ['500'],
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Interactive card details form',
    description: 'Frontend Mentor Challenge',
    authors: {
        name: 'Gabriel Gois Andrade',
        url: 'https://github.com/gabrielgoisandrade',
    },
}

type RootProps = { children: ReactNode }

export default function RootLayout({ children }: Readonly<RootProps>) {
    return (
        <html lang='en'>
            <body className={spaceGrotesk.className}>{children}</body>
        </html>
    )
}
