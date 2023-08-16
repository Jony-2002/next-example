interface PageInterface {
  params: {
    id: string
  }
}

const fetchDataById = async (id: string) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return data
}

export default async function UserPage({ params: { id } }: PageInterface) {
  const data = await fetchDataById(id)
  console.log(data);
  return (
    <div className="px-24 py-12">
      <h1>User</h1>
      <div key={data.key}>
        <h3>{data.name}</h3>
        <h3>{data.username}</h3>
        <h3>{data.email}</h3>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return data.map((user: any) => ({
    id: user.id.toString()
  }))
}