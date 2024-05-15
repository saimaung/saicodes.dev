import { Linkedin, Mail } from "lucide-react"
import { Icons } from "./Icons"
import { siteConfig } from "@/config/site"

const Footer = () => {
  return (
    <footer>
      <div className="mb-6 mt-14 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <a href="mailto:saiwaimaung@gmail.com" target="_blank" rel="noreferrer">
            <span className="sr-only">Mail</span>
            <Mail className="h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/in/saiwaimaung/" target="_blank" rel="noreferrer">
            <span className="sr-only">LinkedIn</span>
            <Icons.linkedIn className="h-6 w-6" />
          </a>
          <a href="https://github.com/saimaung" target="_blank" rel="noreferrer">
            <span className="sr-only">GitHub</span>
            <Icons.gitHub className="h-6 w-6" />
          </a>
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-muted-foreground">
          {/* TODO: link to personal site */}
          <a href="/"> 
            { siteConfig.author }
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
