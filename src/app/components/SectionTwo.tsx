import Link from 'next/link';
import Image from "next/image";

const SectionTwo = () => {
    return (
        <>
            <section className="text-white body-font">
                <div className="container px-5 pb-20 pt-5 mx-auto">
                    <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                        <p className="sm:text-3xl title-font mb-4 text-gray-900 font-bold text-3xl text-center">POPULAR PDF TOOLs</p>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">20 tools to convert, compress, and edit PDFs for free. Try it out today!</p>
                    </div>

                    <div className="flex flex-wrap -m-4">

                        <div className="xl:w-1/3 md:w-1/2 p-5 m-auto">
                            <div className="border-2 border-slate-900 p-6 bg-slate-900 rounded">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-slate-100 text-indigo-500 mb-4">
                                    <Image src="/images/cut.png" alt='icon' width={20} height={20} />
                                </div>
                                <h2 className="text-lg text-white font-bold title-font mb-2">PDF TO WORD</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-5 m-auto">
                            <div className="border-2 border-slate-900 p-6 bg-slate-900 rounded">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-slate-100 text-indigo-500 mb-4">
                                    <Image src="/images/cut.png" alt='icon' width={20} height={20} />
                                </div>
                                <h2 className="text-lg text-white font-bold title-font mb-2">PDF TO WORD</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-5 m-auto">
                            <div className="border-2 border-slate-900 p-6 bg-slate-900 rounded">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-slate-100 text-indigo-500 mb-4">
                                    <Image src="/images/cut.png" alt='icon' width={20} height={20} />
                                </div>
                                <h2 className="text-lg text-white font-bold title-font mb-2">PDF TO WORD</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>

                        <div className="xl:w-1/3 md:w-1/2 p-5 m-auto">
                            <div className="border-2 border-slate-900 p-6 bg-slate-900 rounded">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-slate-100 text-indigo-500 mb-4">
                                    <Image src="/images/cut.png" alt='icon' width={20} height={20} />
                                </div>
                                <h2 className="text-lg text-white font-bold title-font mb-2">PDF TO WORD</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-5 m-auto">
                            <div className="border-2 border-slate-900 p-6 bg-slate-900 rounded">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-slate-100 text-indigo-500 mb-4">
                                    <Image src="/images/cut.png" alt='icon' width={20} height={20} />
                                </div>
                                <h2 className="text-lg text-white font-bold title-font mb-2">PDF TO WORD</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 md:w-1/2 p-5 m-auto">
                            <div className="border-2 border-slate-900 p-6 bg-slate-900 rounded">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-slate-100 text-indigo-500 mb-4">
                                    <Image src="/images/cut.png" alt='icon' width={20} height={20} />
                                </div>
                                <h2 className="text-lg text-white font-bold title-font mb-2">PDF TO WORD</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                            </div>
                        </div>
                    </div>
                    <Link href='/tools'><button className="flex mx-auto mt-16 text-white bg-slate-800 border-1 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">See All Tools</button></Link>
                </div>
            </section>
        </>
    );
};
export default SectionTwo;