import { posts } from "@/data/posts"
import { PostInterface } from "@/data/posts"

interface PageInterface {
  params: {
    postid: string
  }
}

export default function SinglePost({ params: { postid } }: PageInterface) {
  const post = posts.find((doc: PostInterface) => doc.id == postid);
  console.log("post", post);
  console.log("id", postid);

  return (
    <div className="px-24 py-12">
      <h1>Posts</h1>
      <h3>{post?.title}</h3>
    </div>
  )
}

export async function generateStaticParams() {
  const data: PostInterface[] = posts;

  return data.map((post: PostInterface) => ({
    postid: post.id.toString()
  }))
}