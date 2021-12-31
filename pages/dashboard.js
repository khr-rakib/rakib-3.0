import Link from "next/link";
import Layout from "../components/Layout";

export default function Dashboard() {
    return (
        <Layout title="Dashboard">
            <div className="grid grid-cols-3 gap-4">
                <article className="border rounded shadow hover:shadow-lg">
                    <Link href={'/blog/1'}>
                        <a className="pb-3 block">
                            <img className="" src="https://img.youtube.com/vi/vCs50MV-TbM/sddefault.jpg" alt="img" />
                            <h2 className="px-2 pt-2 font-semibold text-gray-500 dark:text-white text-md line-clamp-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h2>
                        </a>
                    </Link>
                </article>
                <article className="border rounded shadow hover:shadow-lg">
                    <Link href={'/blog/1'}>
                        <a className="pb-3 block">
                            <img className="" src="https://img.youtube.com/vi/vCs50MV-TbM/sddefault.jpg" alt="img" />
                            <h2 className="px-2 pt-2 font-semibold text-gray-500 dark:text-white text-md line-clamp-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h2>
                        </a>
                    </Link>
                </article>
                <article className="border rounded shadow hover:shadow-lg">
                    <Link href={'/blog/1'}>
                        <a className="pb-3 block">
                            <img className="" src="https://img.youtube.com/vi/vCs50MV-TbM/sddefault.jpg" alt="img" />
                            <h2 className="px-2 pt-2 font-semibold text-gray-500 dark:text-white text-md line-clamp-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h2>
                        </a>
                    </Link>
                </article>
                <article className="border rounded shadow hover:shadow-lg">
                    <Link href={'/blog/1'}>
                        <a className="pb-3 block">
                            <img className="" src="https://img.youtube.com/vi/vCs50MV-TbM/sddefault.jpg" alt="img" />
                            <h2 className="px-2 pt-2 font-semibold text-gray-500 dark:text-white text-md line-clamp-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h2>
                        </a>
                    </Link>
                </article>
                <article className="border rounded shadow hover:shadow-lg">
                    <Link href={'/blog/1'}>
                        <a className="pb-3 block">
                            <img className="" src="https://img.youtube.com/vi/vCs50MV-TbM/sddefault.jpg" alt="img" />
                            <h2 className="px-2 pt-2 font-semibold text-gray-500 text-md line-clamp-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h2>
                        </a>
                    </Link>
                </article>
                <article className="border rounded shadow hover:shadow-lg">
                    <Link href={'/blog/1'}>
                        <a className="pb-3 block">
                            <img className="" src="https://img.youtube.com/vi/vCs50MV-TbM/sddefault.jpg" alt="img" />
                            <h2 className="px-2 pt-2 font-semibold text-gray-500 text-md line-clamp-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h2>
                        </a>
                    </Link>
                </article>

            </div>

        </Layout>
    )
}