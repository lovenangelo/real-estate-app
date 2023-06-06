"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

import { AuthenticatedNavMenuBar } from "./authenticated-nav-menu-bar"
import { NavMenuBar } from "./nav-menu-bar"
import { Button } from "./ui/button"
import { useUser } from "./user-provider"

export function SiteHeader() {
  const mainNav = siteConfig.mainNav
  const { user, isLoading } = useUser()
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      {!isLoading && !user && (
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold md:inline-block hidden">
              {siteConfig.name}
            </span>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              <div className="hidden md:block">
                <MainNav items={mainNav} />
              </div>
              <div className="md:hidden">
                {!isLoading && !user && (
                  <Link
                    key={0}
                    href={mainNav[mainNav.length - 1].href}
                    className={cn(
                      "flex items-center text-sm font-medium text-muted-foreground",
                      mainNav[mainNav.length - 1].disabled &&
                        "cursor-not-allowed opacity-8mainNav.length-1"
                    )}
                  >
                    {mainNav[mainNav.length - 1].title}
                  </Link>
                )}
              </div>
              <ThemeToggle />
              <div className="md:hidden">
                <NavMenuBar />
              </div>
            </nav>
          </div>
        </div>
      )}
      {!isLoading && user && (
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="font-bold md:inline-block hidden">
              {siteConfig.name}
            </span>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <AuthenticatedNavMenuBar />
          </div>
        </div>
      )}
    </header>
  )
}
