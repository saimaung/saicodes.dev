import { posts } from "#site/content"
import PostItem from "@/components/PostItem";
import QueryPagination from "@/components/QueryPagination";
import { sortPosts } from "@/lib/utils";

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

const BlogPage = async ({ searchParams }: BlogPageProps) => {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter(post => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);
  const displayedPosts = sortedPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            S.AI 👨🏻‍💻
          </h1>
          <p className="text-xl text-muted-foreground">
            about data, AI, and anything else I find interesting
          </p>
        </div>
      </div>
      <hr className="mt-8"/>
      { displayedPosts?.length > 0 ? (
        <ul className="flex flex-col">
          {
            displayedPosts.map((post) => {
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
      <QueryPagination
        totalPages={totalPages}
        className="mt-4 justify-end"
      />
    </div>
  )
}

export default BlogPage
