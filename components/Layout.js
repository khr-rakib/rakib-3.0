import Header from "./Header"
import { useSelector, useDispatch } from "react-redux"
import { sideNavAction } from "../redux/features/settingSlice";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    const dispatch = useDispatch();
    const { sideNav } = useSelector(state => state.settings)

    return (
        <>
            {sideNav && (
                <div className="fixed top-0 left-0 z-30 transition duration-1000 bg-[#0000008c] w-full h-full">
                    <div className={sideNav ? "w-full h-full absolute z-40  transform  translate-x-0 " : "w-full h-full absolute z-40  transform -translate-x-full"}>
                        <div className="opacity-50 inset-0 fixed w-full h-full bg-transparent" onClick={() => dispatch(sideNavAction(!sideNav))} />
                        <div className="w-64 z-20 absolute left-0 top-0 bg-white shadow flex-col justify-between transition duration-150 ease-in-out h-full">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            )}
            <div className="flex h-screen relative overflow-hidden">
                <aside className="w-64 h-screen sm:relative bg-gray-50 shadow md:h-full hidden sm:flex">
                    <Sidebar />
                </aside>

                <main className="flex-1 space-y-4">
                    <Header />

                    <div className="py-5 px-9 overflow-auto h-full pb-36">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}