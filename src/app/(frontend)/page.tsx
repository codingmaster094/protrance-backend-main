import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'

import config from '@/payload.config'
import './styles.css'
import Link from 'next/link'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })
console.log('user', user)
  const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`

  return (
    <div className="home">
      <div className="content">
        <picture>
          <source srcSet="/images/footer-logo.svg" />
          <Image
            alt="Payload Logo"
            height={150}
            src="/images/footer-logo.svg"
            width={150}
            unoptimized
          />
        </picture>
        {!user && <h1>Welcome to your Protrance Project.</h1>}
        {user && <h1>Welcome back, {user.email}</h1>}
        <div className="links">
          <Link
            className="admin"
            href={payloadConfig.routes.admin}
            rel="noopener noreferrer"
            target="_blank"
          >
            Go to admin panel
          </Link>
        </div>
      </div>
    </div>
  )
}
