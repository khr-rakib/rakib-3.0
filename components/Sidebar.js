import Link from "next/link";

export default function Sidebar() {
    return (
        <>
            <Link href={'/'}>
                <a className="px-6 h-[72px] w-full border-b-2 flex items-center gap-4">
                    <img src="/logo-new.png" alt="Kh-rakib" className="w-12 h-12 object-contain" />
                    <h1 className="text-xl font-bold text-black underline decoration-2 decoration-wavy decoration-gray-500">KH Rakib</h1>
                </a>
            </Link>
            <div>
                <ul className="space-y-0 pt-2">
                    <li>
                        <Link href={"/dashboard"}>
                            <a className="py-1 px-3 hover:bg-gray-100 block">Dashboard</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}