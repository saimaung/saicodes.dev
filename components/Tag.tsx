import Link from "next/link";
// neural network -> neural-network (in url)
import { slug } from "github-slugger";
import { badgeVariants } from "./ui/badge";

interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}

const Tag = ({tag, current, count}: TagProps) => {
  return (
    <Link
      className={badgeVariants({
        variant: current ? "default" : "secondary",
        className: "no-underline rounded-md"
        })
      }
      href={`/tags/${slug(tag)}`}>
      {tag}
    </Link>
  )
}

export default Tag
