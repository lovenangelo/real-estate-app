"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"

import { AuthenticatedNavMenuBar } from "./authenticated-nav-menu-bar"
import { Icons } from "./icons"

export default function AuthenticatedNav() {
  return (
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
  )
}
