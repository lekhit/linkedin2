'use client'
import { SessionProvider } from "next-auth/react"

export default function NextAuthProvider(
  {session, children }
) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}