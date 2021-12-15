import Layout from "../components/Layout";

export default function Home () {
  return (
    <>
      <Layout>
        <div className="flex gap-5">
          <div className="bg-gray-400 p-10 w-1/2"></div>
          <div className="bg-gray-800 p-10 w-1/2"></div>
        </div>
      </Layout>
    </>
  )
}