import Link from "next/link";
import { useRouter } from "next/router";

export default function Sidebar() {
    const { pathname } = useRouter();

    return (
        <>
            <Link href={'/'}>
                <a className="px-6 h-[72px] w-full border-b-2 flex items-center gap-4">
                    <img src="/logo-new.png" alt="Kh-rakib" className="w-12 h-12 object-contain" width={48} height={48} />
                    <h1 className="text-xl font-bold text-black dark:text-white underline decoration-2 decoration-wavy decoration-gray-500 dark:decoration-gray-50">KH Rakib</h1>
                </a>
            </Link>
            <div>
                <ul className="space-y-0 pt-2">
                    <li>
                        <Link href={"/dashboard"}>
                            <a className={`py-1 px-3 hover:bg-gray-100 block dark:text-gray-100 dark:hover:text-gray-700 dark:hover:bg-gray-300 ${pathname === '/dashboard' && 'bg-gray-100'}`}>Dashboard</a>
                        </Link>
                    </li>
                    <li>
                        <Link href={"/components/otp-box"}>
                            <a className={`py-1 px-3 hover:bg-gray-100 block dark:text-gray-100 dark:hover:text-gray-700 dark:hover:bg-gray-300 ${pathname === '/components/otp-box' && 'bg-gray-100'}`}>Otp Box</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}