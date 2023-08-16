import Link from "next/link";

const fetchData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return data
}

export default async function User() {
  const data = await fetchData()
  console.log(data);
  return (
    <div className="px-24 py-12">
      <h1>{data.length} Users</h1>
      {data.map((user: any) => {
        return (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </div>
        )
      })}
    </div>
  )
}