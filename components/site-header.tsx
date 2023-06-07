"use client"

import AuthenticatedNav from "./authenticated-nav"
import { SideBarNav } from "./side-bar-nav"
import UnauthenticatedNav from "./unauthenticated-nav"
import { useUser } from "./user-provider"

export function SiteHeader() {
  const { user, isLoading } = useUser()
  return (
    <header className="h-full flex flex-row sticky top-0 z-40 w-full border-b bg-background">
      {!isLoading && !user && <UnauthenticatedNav />}
      {!isLoading && user && <AuthenticatedNav />}
    </header>
  )
}
