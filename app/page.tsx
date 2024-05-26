import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn, sortPosts } from "@/lib/utils";
import { posts } from "#site/content";
import PostItem from "@/components/PostItem";

export default function Home() {
  const recentPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Hello, I&apos;m Sai
          </h1>
          <p className="max-w-[42rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            I&apos;m a Data Platform developer with a passion for technologies. Welcome to my blog, where I share my thoughts and experiences on software development, technology, and innovation.
          </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link href="/blog" className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
              Read my blog
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-4xl py-4 lg:py-6 flex flex-col space-y-6 mt-40">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center">
          Recent Posts
        </h2>
        <ul className="flex flex-col">
          {
            recentPosts.map((post) => (
              <li
                key={post.slug}
                className="first:border-t first:border-border"
                >
                  <PostItem
                    slug={post.slug}
                    title={post.title}
                    description={post.description}
                    date={post.date}
                    tags={post.tags}
                  />
                </li>
            ))
          }
        </ul>
      </section>
  </>
  );
}
