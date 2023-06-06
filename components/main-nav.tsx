"use client"

import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { cn } from "@/lib/utils"

import SignOutButton from "./sign-out-button"
import { useUser } from "./user-provider"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const { user, isLoading } = useUser()

  const links = items!.slice(1, user ? items!.length - 1 : undefined)?.map(
    (item, index) =>
      item.href && (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "flex items-center text-sm font-medium text-muted-foreground",
            item.disabled && "cursor-not-allowed opacity-80"
          )}
        >
          {item.title}
        </Link>
      )
  )

  if (user) {
    links.push(<SignOutButton isLoading={isLoading} />)
  }

  return (
    <div className="flex gap-6 md:gap-10">
      {!isLoading && <nav className="flex gap-6">{links}</nav>}
    </div>
  )
}
