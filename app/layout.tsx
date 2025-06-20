import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Last Minute Labs',
  description: 'Whether you are stuck with an assignment, need a system built fast, or want to learn hands-on — we’ve got you covered',
  generator: '-Last Minute Labs',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
