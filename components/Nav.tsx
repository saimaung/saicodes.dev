'use client'

import { siteConfig } from "@/config/site"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const Nav = () => {
  const pathName = usePathname();
  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image 
          src="/logo.png" 
          width={100} 
          height={100} 
          alt="logo" 
        />
      </Link>
      <Link 
        href="/blog" 
        className={
          cn("text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block", 
            pathName === '/blog' ? 'text-foreground' : 'text-foreground/60'
          )}>
            Blog
      </Link>
      <Link 
        href="/about" 
        className={
          cn("text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block", 
            pathName === '/about' ? 'text-foreground' : 'text-foreground/60'
          )}>
            About
      </Link>
    </nav>
  )
}

export default Nav
