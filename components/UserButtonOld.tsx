"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
// import { logout } from "@/app/(auth)/actions";
// import { useSession } from "@/app/(main)/SessionProvider";
import { LogOutIcon, UserIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import UserAvatar from "./UserAvatar";

interface UserButtonProps {
  className?: string;
}

export default function UserButton({ className }: UserButtonProps) {
  // const { user } = useSession();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={cn("flex-none rounded-full", className)}>
          {/* <UserAvatar avatarUrl={user.avatarUrl} size={40} /> */}
          <UserAvatar size={40} />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Logged in as @{user.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <Link href={`/users/${user.username}`}> */}
        <Link href={`/users/#`}>
          <DropdownMenuItem>
            <UserIcon className="mr-2 size-4" />
            Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        {/* <DropdownMenuItem
          onClick={() => {
            logout();
          }}
        > */}
        <DropdownMenuItem onClick={() => {}}>
          <LogOutIcon className="mr-2 size-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
