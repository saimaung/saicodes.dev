import { posts } from "#site/content"
import PostItem from "@/components/PostItem";
import { sortPosts } from "@/lib/utils";

const BlogPage = async () => {
  const sortedPosts = sortPosts(posts.filter(post => post.published))
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground">
            Welcome to my blogs
          </p>
        </div>
      </div>
      <hr className="mt-8"/>
      { sortedPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {
            sortedPosts.map((post) => {
              const { title, date, slug, description } = post;
              return (
                <li key={slug}>
                  <PostItem title={title} date={date} slug={slug} description={description} />
                </li>
              )
              
            })
          }
        </ul>
      ) : (
        <p>Blogs Coming Soon.</p>
      )}
    </div>
  )
}

export default BlogPage
