import { siteConfig } from "@/config/site"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"
import { Icons } from "./Icons"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { ModeToggle } from "./ModeToggle"

const SiteHeader = () => {
  return (
    <header className="z-10 sticky top-0 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-screen-2xl items-center">
        <Nav />
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center">
            <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <div className={cn(buttonVariants({variant: "ghost"}), "w-10 px-0 hidden sm:inline-flex")}>
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              <div className={cn(buttonVariants({variant: "ghost"}), "w-10 px-0 hidden sm:inline-flex")}>
                <Icons.linkedIn className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <Link href={siteConfig.links.huggingface} target="_blank" rel="noreferrer">
              <div className={cn(buttonVariants({variant: "ghost"}), "w-10 px-0 hidden sm:inline-flex")}>
                <Icons.huggingFace className="h-4 w-4" />
                <span className="sr-only">HuggingFace</span>
              </div>
            </Link>
            <div className="flex gap-2">
              <ModeToggle />
              <MobileNav />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default SiteHeader
