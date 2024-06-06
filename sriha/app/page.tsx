import Link from "next/link"

const Home = () => {
  return (
    <div className="text-3xl">
      Hi from Home
      <Link href="/admin">Admin</Link>
    </div>
  )
}

export default Home
