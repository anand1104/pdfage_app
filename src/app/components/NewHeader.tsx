import Image from "next/image";
import Link from "next/link";

const NewHeader = () => {
    return (<>
        <section className="mb-32">
            <nav
                className="flex-no-wrap relative flex w-full items-center justify-between bg-white py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-2.5"
                data-te-navbar-ref>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
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
                    <button
                        className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button" data-te-collapse-init data-te-target="navbarSupportedContentX"
                        aria-controls="navbarSupportedContentX" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="[&>svg]:w-7">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                                <path fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                    <div className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                        id="navbarSupportedContentX" data-te-collapse-item>
                        <ul className="mr-auto flex flex-row" data-te-navbar-nav-ref>
                            <li className="static" data-te-nav-item-ref data-te-dropdown-ref>
                                <a className="flex items-center whitespace-nowrap py-2 px-2 text-neutral-600 transition duration-300 ease-in-out focus:text-neutral-700 dark:text-neutral-200 dark:hover:text-neutral-100 dark:focus:text-neutral-100"
                                    href="#" data-te-ripple-init data-te-ripple-color="light" type="button" id="dropdownMenuButtonX"
                                    data-te-dropdown-toggle-ref aria-expanded="false" data-te-nav-link-ref>Click me
                                    <span className="ml-2 w-2">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="Image"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                            <path fill="currentColor"
                                                d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
                                            </path>
                                        </svg>
                                    </span>
                                </a>
                                <div
                                    className="absolute left-0 top-full right-0 z-[1000] mt-0 hidden w-full border-none bg-white bg-clip-padding shadow-lg shadow-black/5 dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                                    aria-labelledby="dropdownMenuButtonX" data-te-dropdown-menu-ref>
                                    <div className="mx-4 py-5 md:px-6 lg:px-8">
                                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                                            <ul>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/mdb-new.png" width={10} height={10}
                                                            alt="" className="mr-3 w-6" />
                                                        <span>MDBootstrap</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/react.png"
                                                            width={10} height={10} alt="" className="mr-3 w-6" />
                                                        <span>React</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/angular.png" width={10} height={10}
                                                            alt="" className="mr-3 w-6" />
                                                        <span>Angular</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/vue.png"
                                                            width={10} height={10} alt="" className="mr-3 w-6" />
                                                        <span>Vue</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/wordpress.png" width={10} height={10}
                                                            alt="" className="mr-3 w-6 dark:brightness-200" />
                                                        <span>WordPress</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/laravel.png" width={10} height={10}
                                                            alt="" className="mr-3 w-6" />
                                                        <span>Laravel</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/nodejs.png"
                                                            width={10} height={10} alt="" className="mr-3 w-6 dark:brightness-200" />
                                                        <span>Node.js</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/mongodb.png" width={10} height={10}
                                                            alt="" className="mr-3 w-6" />
                                                        <span>Mongo DB</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/python.png"
                                                            width={10} height={10} alt="" className="mr-3 w-6" />
                                                        <span>Python</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/mysql.png"
                                                            width={10} height={10} alt="" className="mr-3 w-6" />
                                                        <span>MySQL</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/php.png"
                                                            width={10} height={10} alt="" className="mr-3 w-6 dark:brightness-200" />
                                                        <span>PHP</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/javascript.png" width={10} height={10}
                                                            alt="" className="mr-3 w-6" />
                                                        <span>Pure JavaScript</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/html.png"
                                                            width={10} height={10} alt="" className="mr-3 w-6" />
                                                        <span>Any static website</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/expressjs.png" width={10} height={10}
                                                            alt="" className="mr-3 w-6 dark:brightness-200" />
                                                        <span>Express</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/socketio.png" width={10} height={10}
                                                            alt="" className="mr-3 w-6 dark:brightness-200" />
                                                        <span>SocketIO</span>
                                                    </a>
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/passport.png" width={10} height={10}
                                                            alt="" className="mr-3 w-6" />
                                                        <span>Passport</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/tailwindcss.png" width={10} height={10}
                                                            alt="" className="mr-3 w-6" />
                                                        <span>Tailwind CSS</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="flex w-full items-center whitespace-nowrap bg-transparent py-3 px-4 text-sm font-normal text-neutral-700 transition duration-300 ease-in-out hover:bg-neutral-50 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                                                        href="#" data-te-dropdown-item-ref>
                                                        <Image
                                                            src="/images/jamstack.png" width={10} height={10}
                                                            alt="" className="mr-3 w-6" />
                                                        <span>Jamstack</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>
    </>);
};
export default NewHeader;