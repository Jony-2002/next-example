import Link from "next/link";

export default function Home() {
  return (
    <main className="px-24 py-12">
      <Link href={"/users"}>See Users</Link>
      <br />
      <Link href={"/posts"}>See Posts</Link>
    </main>
  )
}
