"use client"

import { useState } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Icons } from "./icons"
import { Button } from "./ui/button"
import { useUser } from "./user-provider"

export function SideBarNav() {
  const [isOpen, setIsOpen] = useState(false)
  const { isLoading, user } = useUser()

  const openSideBar = () => {
    setIsOpen(true)
  }

  const closeSideBar = () => {
    setIsOpen(false)
  }

  const list = siteConfig.sideBarNav
  const items = list.map(
    (item, index) =>
      item.href && (
        <Link key={index} href={item.href}>
          {item.title}
        </Link>
      )
  )

  if (!isLoading && !user) {
    return <></>
  }

  return (
    <>
      {!isLoading && user && (
        <div className="container w-max min-h-screen border-r border-slate-400">
          <ul className="space-y-8 justify-center items-start p-4">
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.overview />
                {<p>Overview</p>}
              </Link>
            </li>
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.property />
                <p>Properties</p>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.analytics />
                <p>Reports</p>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.notification />
                <p>Notifications</p>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.chat />
                <p>Messages</p>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.account />
                <p>Account</p>
              </Link>
            </li>
            <li>
              <Link className="flex space-x-4" href={"/overview"}>
                <Icons.settings />
                <p>Settings</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
