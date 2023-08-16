// "use client"
import { useState } from "react"
import { posts } from "@/data/posts"
import { PostInterface } from "@/data/posts"
import Link from "next/link"

export default function Posts() {
  // const [data, setData] = useState<PostInterface[]>(posts);
  console.log(posts);
  
  return (
    <section>
      {posts.map((post) => {
        return (
          <div className="border mb-5" key={post.id}>
            <Link href={`/posts/${post.id}`} className="text-2xl font-bold">{post.title}</Link>
            <p>{post.subtitle}</p>
          </div>
        )
      })}
    </section>
  )
}