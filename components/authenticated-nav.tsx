"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { AuthenticatedNavMenuBar } from "./authenticated-nav-menu-bar"
import { Icons } from "./icons"
import { Button } from "./ui/button"

export default function AuthenticatedNav() {
  return (
    <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="font-bold md:inline-block hidden">
          {siteConfig.name}
        </span>
      </Link>
      <div className="h-full flex flex-1 items-center justify-end space-x-4">
        <Button variant={"ghost"} className={cn("p-0 m-0")}>
          <Icons.chat />
        </Button>
        <Button variant={"ghost"} className={cn("p-0 m-0")}>
          <Icons.notification />
        </Button>
        <div className="h-full py-3">
          <div className="h-full w-[2px] bg-primary" />
        </div>
        <AuthenticatedNavMenuBar />
      </div>
    </div>
  )
}
