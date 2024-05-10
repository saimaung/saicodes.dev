import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { siteConfig } from "@/config/site"

const page = async () => {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <Avatar
            className="h-48 w-48"
          >
            <AvatarImage
              src="/S.AI.PNG"
              alt={siteConfig.author}
            />
            <AvatarFallback>S.AI</AvatarFallback>
          </Avatar>
          <h2 className="text-2xl font-bold text-center break-words">
            {siteConfig.author}
          </h2>
          <p className="text-muted-foreground text-center break-words">
            Software Developer - AI Platform.
          </p>
        </div>
        <p className="text-muted-foreground text-lg py-4">
          I&apos;m Sai Wai Maung, an electrical and computer engineering graduate from the University of Waterloo in Canada. 
          With over 8 years of experience in developing Data Platforms for AI, I&apos;ve had the opportunity to work with a wide range of technologies. 
          My programming language expertise includes Scala, Python and JavaScript. 
          I also write HCL for provisioning cloud resources. 
          When it comes to infrastructure, I&apos;m familiar with Kubernetes, Terraform, Docker, and ArgoCD. 
          For deployment, I&apos;ve worked with Helm. 
          Additionally, I have experience with cloud platforms like MS Azure, AWS, and GCP, as well as big data platforms such as Azure Databricks and Unity Catalog. 
          Through this blog, I aim to share my insights and experiences on software development, technology, and innovation.
        </p>
      </div>
    </div>
  )
}

export default page
