'use client'

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-10 px-0 sm:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Navigation Bar</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <MobileLink
          href="/"
          onOpenChange={setIsOpen}
          className="flex items-center"
        >
          <Image 
            src="/logo.png" 
            width={50} 
            height={50} 
            alt="logo" 
          />
        </MobileLink>
        <div className="flex flex-col gap-3 mt-3">
          <MobileLink
            href="/blog"
            onOpenChange={setIsOpen}
          >
            Blog
          </MobileLink>
          <MobileLink
            href="/about"
            onOpenChange={setIsOpen}
          >
            about
          </MobileLink>
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
              GitHub
          </Link>
          <Link href={siteConfig.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode;
  onOpenChange?: (isOpen: boolean) => void;
  className?: string;
}

const MobileLink = ({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) => {
  const router = useRouter();
  return <Link
            href={href}
            onClick={() => {
              router.push(href.toString())
              onOpenChange?.(false)
            }}
            className={className}
            {...props}
          >
            {children}
          </Link>
}
export default MobileNav
