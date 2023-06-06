"use client"

import { useUser } from "./user-provider"

export default function SideBar() {
  const { user, isLoading } = useUser()

  return <div className="h-auto"></div>
}
