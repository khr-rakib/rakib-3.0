import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { sideNavAction } from '../redux/features/settingSlice';

export default function Header() {
    const dispatch = useDispatch();

    return (
        <>
            <header className="bg-gray-50 p-4 mb">
                <div className="flex justify-between gap-4 items-center">
                    <div className="flex items-center space-x-5 w-full">
                        <div className="cursor-pointer sm:hidden " onClick={() => dispatch(sideNavAction(true))}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <div>
                            <div className="relative w-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute text-gray-400 top-3 left-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input type="text" className="bg-white h-10 w-full pl-12 pr-6 rounded-lg focus:outline-none hover:cursor-pointer" placeholder='Search' />
                            </div>
                        </div>
                    </div>
                    <div className='hidden sm:block'>
                        <ul className='divide-x divide-green-500 flex space-x-3'>
                            <li className='pl-3'>                                 <Link href={"/"}>
                                <a>Home</a>
                            </Link>
                            </li>
                            <li className='pl-3'>
                                <Link href={"/"}>
                                    <a>About</a>
                                </Link>
                            </li>
                            <li className='pl-3'>
                                <Link href={"/"}>
                                    <a>Contact</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
