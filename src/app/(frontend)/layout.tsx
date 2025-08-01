import React from 'react'
import './styles.css'

export const metadata = {
  description: 'A Protrance Admin using Payload in a Next.js app.',
  title: 'Protrance Admin',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
