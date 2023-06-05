"use client"

import * as React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"

import { cn, supabase } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Icons } from "@/components/icons"

import { LoginForm } from "./login-form"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  authType: string
}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()
  const { toast } = useToast()

  // const handleSignUp = async () => {
  //   setIsLoading(true)
  //   await supabase.auth.signUp({
  //     email,
  //     password,
  //     options: {
  //       emailRedirectTo: `${location.origin}/auth/callback`,
  //     },
  //   })
  //   setIsLoading(false)
  //   router.refresh()
  // }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      {props.authType == "LOGIN" && (
        <LoginForm isLoading={isLoading} setIsLoading={setIsLoading} />
      )}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.facebook className="mr-2 h-4 w-4" />
        )}{" "}
        Facebook
      </Button>
    </div>
  )
}
