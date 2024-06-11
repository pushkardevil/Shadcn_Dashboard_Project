'use client';
import UserItem from "./UserItem"
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
  
import {User} from "lucide-react"
import {Inbox} from "lucide-react"
import {Receipt} from "lucide-react"
import {Bell} from "lucide-react"
import {Settings} from "lucide-react"
import {Cookie} from "lucide-react"
import {MessageSquare} from "lucide-react"
export default function Sidebar(){
    const menuList=[
        {
            group:"General",
            items:[
                {
                    link: '/',
                    icon : <User />,
                    text:"profile"
                },
                {
                    link: '/',
                    icon : <Inbox />,
                    text:"Inbox"
                },
                {
                    link: '/',
                    icon : <Receipt />,
                    text:"Billing"
                },
                {
                    link: '/',
                    icon: <Bell />,
                    text:"Notifications"
                }
            ]
        },
        {
            group:"Settings",
            items:[
                {
                    link: '/',
                    icon: <Settings />,
                    text:"General Settings"
                },
                {
                    link: '/',
                    icon: <Cookie />,
                    text:"Privacy"
                },
                {
                    link: '/',
                    icon: <MessageSquare />,
                    text:"Logs"
                }
            ]
        }
    ]

    return <div className="fixed flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4">
        <div>
            <UserItem />
        </div>
        <div className="grow">
            <Command style={{overflow : 'visible'}}>
                <CommandList style={{overflow : 'visible'}}>
                    {menuList.map((menu:any, key:number) => (
                        <CommandGroup key={key} heading={menu.group}>
                            {menu.items.map((option:any, optionKey:number) => 
                            <CommandItem key={optionKey} className="flex gap-2 cursor-pointer">
                                {option.icon}
                                {option.text}
                            </CommandItem>
                            )}
                        </CommandGroup>
                    ))}
                </CommandList>
            </Command>
            
        </div>
        <div>Settings/ Notifications</div>
    </div>
    
}
