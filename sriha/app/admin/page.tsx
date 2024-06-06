import Head from "next/head"
import Link from "next/link"

const Admin = () => {
  return (
    <div>
      <Head>
        <title>Admin</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto p-4">
          <Link href={"/"}>
          <h1 className="text-xl md:text-3xl font-bold">Admin Page</h1>
          </Link>
        </div>
      </header>
      {/* Main */}
      <main className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2>Name of the page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus tempore illo impedit mollitia cum iure aperiam perferendis assumenda doloremque?</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2>Name of the page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus tempore illo impedit mollitia cum iure aperiam perferendis assumenda doloremque?</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2>Name of the page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus tempore illo impedit mollitia cum iure aperiam perferendis assumenda doloremque?</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2>Name of the page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus tempore illo impedit mollitia cum iure aperiam perferendis assumenda doloremque?</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2>Name of the page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus tempore illo impedit mollitia cum iure aperiam perferendis assumenda doloremque?</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2>Name of the page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus tempore illo impedit mollitia cum iure aperiam perferendis assumenda doloremque?</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2>Name of the page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus tempore illo impedit mollitia cum iure aperiam perferendis assumenda doloremque?</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2>Name of the page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus tempore illo impedit mollitia cum iure aperiam perferendis assumenda doloremque?</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2>Name of the page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus tempore illo impedit mollitia cum iure aperiam perferendis assumenda doloremque?</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2>Name of the page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus tempore illo impedit mollitia cum iure aperiam perferendis assumenda doloremque?</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2>Name of the page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus tempore illo impedit mollitia cum iure aperiam perferendis assumenda doloremque?</p>
        </div>
        <div className="bg-gray-200 rounded-lg shadow-md p-6">
          <h2>Name of the page</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ducimus tempore illo impedit mollitia cum iure aperiam perferendis assumenda doloremque?</p>
        </div>
  
      </main>

      <footer className="bg-black text-white py-4 mt-8">
        <div className="container mx-auto px-4">
          <p className="text-center">footer</p>
        </div>
      </footer>
    </div>
  )
}

export default Admin