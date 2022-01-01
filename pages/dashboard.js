/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Layout from "../components/Layout";

export default function Dashboard() {

    const articleCard = [
        {
            id: Math.round(Math.random() * 500),
            slug: 'tour-guide',
            banner: '/img/tour-banner.jpg',
            title: 'Tour Guide'
        },
        {
            id: Math.round(Math.random() * 500),
            slug: 'bike-riding',
            banner: 'https://img.etimg.com/thumb/msid-78247035,width-650,imgsize-192287,,resizemode-4,quality-100/istock-1171675830.jpg',
            title: 'Bike Riding'
        },
    ]

    return (
        <Layout title="Dashboard">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {articleCard.map(item => (
                    <article key={item.id} className="border rounded shadow transition hover:shadow-lg">
                        <Link href={`/blog/${item.slug}`}>
                            <a className="pb-3 block">
                                <img className="w-full aspect-video" src={item.banner} alt={item.slug} />
                                <h2 className="px-2 pt-2 font-semibold text-gray-500 dark:text-white text-lg line-clamp-1">{item.title}</h2>
                            </a>
                        </Link>
                    </article>
                ))}
            </div>
        </Layout>
    )
}