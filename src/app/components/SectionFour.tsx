import Link from "next/link";

const Content = () => {
    return (
        <section className="text-slate-800 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="sm:text-3xl title-font mb-4 text-gray-900 font-bold text-3xl text-center">WHY GO WITH US ...</h1>
                </div>
                <div className="flex flex-wrap">
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Secure ...</h2>
                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Good Support ...</h2>
                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Easy to use ...</h2>
                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                    <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-800 border-opacity-60">
                        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Low Cost ...</h2>
                        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                    </div>
                </div>
                <Link href='/register' ><button className="flex mx-auto mt-16 text-white bg-slate-800 border-1 py-2 px-8 focus:outline-none hover:bg-slate-600 rounded text-lg">Subscribe</button></Link>
            </div>
        </section>
    );
};
export default Content;