import Link from "next/link";
import Image from "next/image";

const PricingPage = () => {
    return (
        <>
            <section className="text-white body-font overflow-hidden">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl title-font mb-4 text-gray-900 font-bold text-3xl text-center">PRICING</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-950">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical.</p>
                        <div className="mx-auto border-2 border-slate-950 rounded overflow-hidden mt-6 hidden">
                            <button className="py-1 px-4 bg-slate-900 text-white focus:outline-none">Monthly</button>
                            <button className="py-1 px-4 focus:outline-none text-slate-900">Annually</button>
                        </div>
                    </div>
                    <div className="flex flex-wrap -m-3">
                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full mx-auto text-white">
                            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden bg-slate-900">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">START</h2>
                                <h1 className="text-5xl text-white pb-4 mb-4 border-b border-gray-200 leading-none">Free</h1>
                                <p className="flex items-center text-white mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <Image src="/images/tick.png" alt='icon' width={20} height={20} className="rounded-full" />
                                    </span>Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-white mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <Image src="/images/tick.png" alt='icon' width={20} height={20} className="rounded-full" />
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-white mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <Image src="/images/tick.png" alt='icon' width={20} height={20} className="rounded-full" />
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button className="flex items-center mt-auto text-white bg-slate-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"> Get Plan
                                </button>
                                <p className="text-xs text-white mt-3">Literally you probably {"haven\'t"} heard of them jean shorts.</p>
                            </div>
                        </div>

                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full mx-auto text-white">
                            <div className="h-full p-6 rounded-lg border-2 border-slate-950 flex flex-col relative overflow-hidden bg-slate-900">
                                <span className="bg-slate-800 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl">POPULAR</span>
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">PRO</h2>
                                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>&#8377; 550</span>
                                    <span className="text-lg ml-1 font-normal text-white">/mo</span>
                                </h1>
                                <p className="flex items-center text-white mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <Image src="/images/tick.png" alt='icon' width={20} height={20} className="rounded-full" />
                                    </span>Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-white mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <Image src="/images/tick.png" alt='icon' width={20} height={20} className="rounded-full" />
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-white mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <Image src="/images/tick.png" alt='icon' width={20} height={20} className="rounded-full" />
                                    </span>Hexagon neutra unicorn
                                </p>
                                <p className="flex items-center text-white mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <Image src="/images/tick.png" alt='icon' width={20} height={20} className="rounded-full" />
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button className="flex items-center mt-auto text-white bg-slate-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"> Get Plan
                                    {/* <Image src="/images/arrow.png" alt='icon' width={20} height={20} className="right-0" /> */}
                                </button>
                                <p className="text-xs text-white mt-3">Literally you probably {"haven\'t"} heard of them jean shorts.</p>
                            </div>
                        </div>

                        <div className="p-4 xl:w-1/4 md:w-1/2 w-full mx-auto text-white">
                            <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden bg-slate-900">
                                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BUSINESS</h2>
                                <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                                    <span>&#8377; 750</span>
                                    <span className="text-lg ml-1 font-normal text-white">/mo</span>
                                </h1>
                                <p className="flex items-center text-white mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <Image src="/images/tick.png" alt='icon' width={20} height={20} className="rounded-full" />
                                    </span>Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-white mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <Image src="/images/tick.png" alt='icon' width={20} height={20} className="rounded-full" />
                                    </span>Tumeric plaid portland
                                </p>
                                <p className="flex items-center text-white mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <Image src="/images/tick.png" alt='icon' width={20} height={20} className="rounded-full" />
                                    </span>Hexagon neutra unicorn
                                </p>
                                <p className="flex items-center text-white mb-2">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <Image src="/images/tick.png" alt='icon' width={20} height={20} className="rounded-full" />
                                    </span>Vexillologist pitchfork
                                </p>
                                <p className="flex items-center text-white mb-6">
                                    <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                        <Image src="/images/tick.png" alt='icon' width={20} height={20} className="rounded-full" />
                                    </span>Mixtape chillwave tumeric
                                </p>
                                <button className="flex items-center mt-auto text-white bg-slate-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded"> Get Plan

                                </button>
                                <p className="text-xs text-white mt-3">Literally you probably {"haven\'t"} heard of them jean shorts.</p>
                            </div>
                        </div>

                    </div>
                </div>
                <Link href='#' ><button className="flex mx-auto mt-16 text-white bg-slate-800 border-1 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">Donation</button></Link>
            </section>
        </>
    );
};
export default PricingPage; 