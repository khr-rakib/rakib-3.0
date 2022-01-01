import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { sideNavAction } from '../redux/features/settingSlice';

export default function Header() {
    const dispatch = useDispatch();
    const [darkMode, setDarkMode] = useState(undefined);

    useEffect(() => {
        setDarkMode(document.documentElement.classList.contains("dark"))
    }, [])

    useEffect(() => {
        if (darkMode) {
            window.document.documentElement.classList.add('dark')
            localStorage.setItem("darkMode", "true")
        } else {
            window.document.documentElement.classList.remove('dark')
            localStorage.setItem("darkMode", "false")
        }
    }, [darkMode])

    const onClick = () => {
        setDarkMode(!darkMode)
    }

    return (
        <>
            <header className="bg-gray-50 dark:bg-gray-700 p-4 mb">
                <div className="flex justify-between gap-4 items-center">
                    <div className="flex items-center space-x-5 w-full">
                        <div className="cursor-pointer sm:hidden " onClick={() => dispatch(sideNavAction(true))}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <div className='flex items-center'>

                            <Link href={'/'}>
                                <a className='mr-3 sm:hidden'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </a>
                            </Link>
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
                            <li onClick={onClick}>
                                {!darkMode ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}
