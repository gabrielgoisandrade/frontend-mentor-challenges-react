import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const leagueSpartan = League_Spartan({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    fallback: ['sans-serif'],
})

export const metadata: Metadata = {
    authors: {
        name: 'Gabriel Gois Andrade',
        url: 'https://github.com/gabrielgoisandrade',
    },
    title: 'Social Proof Section',
    description: 'Frontend Mentor Challenge',
}

type RootProps = {
    children: ReactNode
}

export default function RootLayout({ children }: RootProps) {
    return (
        <html lang='en'>
            <body className={leagueSpartan.className}>{children}</body>
        </html>
    )
}
