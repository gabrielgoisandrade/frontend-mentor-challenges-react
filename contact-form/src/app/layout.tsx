import '@/styles/globals.scss'
import type { Metadata } from 'next'
import { Karla } from 'next/font/google'

const karla = Karla({
    weight: ['400', '700'],
    subsets: ['latin'],
    fallback: ['sans-serif'],
})

export const metadata: Metadata = {
    title: 'Contact Form',
    description: 'Frontend Mentor Challenge',
    authors: {
        name: 'Gabriel Gois Andrade',
        url: 'https://github.com/gabrielgoisandrade',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={karla.className}>
                <main>{children}</main>
            </body>
        </html>
    )
}
