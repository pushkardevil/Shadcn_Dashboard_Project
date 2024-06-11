'use client'
import { Button } from "@/components/ui/button"

import { BellIcon } from "lucide-react"
import { CommandDemo } from "./Command"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  

export default function Header(){
    return <div className="grid grid-cols-2 flex gap-4  border-r p-4 border-b">
        <CommandDemo />
        <div className="flex items-center justify-end">
            
            <DropdownMenu>
                <DropdownMenuTrigger>
                   <Button variant="outline" size="icon">
                        <BellIcon className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    </div>
}
