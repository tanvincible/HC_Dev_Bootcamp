import { Button, buttonVariants } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { SiteFooter } from "@/components/ui/sitefooter";
import { SiteHeader } from "@/components/ui/siteheader";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
        <div className="relative px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-500/45 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
          <div className="flex space-x-4">
            <Link href="/report">
              <Button>Complain to doctor</Button>
            </Link>
            <ModeToggle />
          </div>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
