'use client'
// to add onclick to input
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ModeToggle } from "@/components/mode-toggle";
import { Input } from "@/components/ui/input";

import {
  ChevronDown,
  Inbox,
  File,
  Send,
  AlertOctagon,
  Trash2,
  Archive,
  Users,
  Bell,
  MessageSquare,
  ShoppingCart,
  Tag,
  Search,
} from "lucide-react";

export function DoctorPage() {
  return (
    <div className="flex flex-row w-full">
      <SideDrawer />
      {/* TODO: Make the title and the search bar responsive */}
      <div className="w-full flex flex-row p-4 justify-between">
        <h1 className="text-4xl font-bold m-2 inline">Dashboard</h1>
        <div className="p-0 flex flex-row h-fit group cursor-pointe">
          {/* TODO: correct the input tag  */}
          <Search className="h-10 align-middle"></Search>
          <Input
            type="Search"
            placeholder="Search"
            className="font-semibold  border-0 focus:outline-none focus:ring-0"
            onChange={(e) => console.log(e.target.value)}
            onClick={() => console.log("clicked")}
          ></Input>
        </div>
      </div>
    </div>
  );
}

function SideDrawer() {
  return (
    <div className="w-64  h-screen flex flex-col">
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <span className="font-semibold">Alicia Koch</span>
        </div>
        <Button variant="ghost" size="icon">
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
      <ScrollArea className="flex-1">
        <div className="px-3 py-2">
          <nav className="space-y-1">
            <NavItem icon={Inbox} label="Inbox" badge="128" />
            <NavItem icon={File} label="Drafts" badge="9" />
            <NavItem icon={Send} label="Sent" />
            <NavItem icon={AlertOctagon} label="Junk" badge="23" />
            <NavItem icon={Trash2} label="Trash" />
            <NavItem icon={Archive} label="Archive" />
            <ModeToggle />
          </nav>
          <nav className="mt-4 pt-4 border-t space-y-1">
            <NavItem icon={Users} label="Social" badge="972" />
            <NavItem icon={Bell} label="Updates" badge="342" />
            <NavItem icon={MessageSquare} label="Forums" badge="128" />
            <NavItem icon={ShoppingCart} label="Shopping" badge="8" />
            <NavItem icon={Tag} label="Promotions" badge="21" />
          </nav>
        </div>
      </ScrollArea>
    </div>
  );
}

function NavItem({
  icon: Icon,
  label,
  badge,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  badge?: string;
}) {
  return (
    <Button variant="ghost" className="w-full justify-start ">
      <Icon className="mr-2 h-4 w-4" />
      {label}
      {badge && (
        <span className="ml-auto text-xs font-medium px-2 py-0.5 rounded-full">
          {badge}
        </span>
      )}
    </Button>
  );
}
import { ProfileForm } from "@/app/doctor/form";
import { SiteFooter } from "@/components/ui/sitefooter";
import { SiteHeader } from "@/components/ui/siteheader";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-500/45 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="flex space-x-4">
            <ProfileForm />
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
