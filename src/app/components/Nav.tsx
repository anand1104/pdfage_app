import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import Script from 'next/script'

const Nav = () => {
    return (
        <>
            <nav className="flex bg-slate-800 p-5">
                <Logo />
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white float-right">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                    <Link href='/' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-slate-600 hover:text-white '>
                        Home
                    </Link>
                    <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                        className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-slate-600 hover:text-white
                        md:hover:bg-transparent md:border-0 pl-3 pr-4 md:hover:text-white md:p-0 flex md:w-auto">
                        Tools
                        <Image src="/images/darw.png" alt='icon' width={15} height={15} />
                    </button>
                    <div id="dropdownNavbar" className="hidden bg-slate-700 text-white z-10 list-none divide-y divide-gray-100 rounded shadow my-4 w-44">
                        <ul className="py-1" aria-labelledby="dropdownLargeButton">
                            <li>
                                <Link href="#" className="text-sm hover:bg-gray-100 text-white hover:text-slate-900 block px-4 py-2">Dashboard</Link>
                            </li>
                        </ul>
                        <div className="py-1">
                            <Link href="#" className="text-sm hover:bg-gray-100 text-white hover:text-slate-900 block px-4 py-2">Sign out</Link>
                        </div>
                    </div>
                    <Link href='/about' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-slate-600 hover:text-white'>
                        About us
                    </Link>
                    <Link href='/contact' className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-slate-600 hover:text-white'>
                        Contact us
                    </Link>

                    {/* <Link href='/' className="flex mx-auto text-white bg-slate-800 border-0 py-1 px-6 focus:outline-none hover:bg-slate-600 rounded text-lg">Login</Link> */}
                </div>
            </nav>
            <Script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js" />
        </>
    );
};
export default Nav;