import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import PricingPage from '../components/SectionThree';
import heroStyles from '@/app/styles/herosection.module.css'
import commonStyles from '@/app/styles/common.module.css'
import Image from "next/image";
const About = () => {
    return (
        <>
            {/* <HeroSection title={"This is About Page"} imageUrl={"/images/about1.svg"} /> */}
            {/* <PricingPage /> */}
            <section className="text-gray-600 body-font py-10">
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full px-10">
                        <p className="sm:text-3xl title-font mb-4 text-gray-900 font-bold text-3xl text-center">WHO WE ARE</p>
                        <div className="title-font mb-4 p-4 text-white font-normal text-center bg-slate-800 ">The demand for a quality PDF editor grew so rapidly that Emily was able to quit her 9-5 to work full-time on DocFly, as well as bring on additional team members. Today, DocFly serves hundreds of thousands of users and subscribers each month. Our tools are particularly popular with small and medium-sized businesses who have day-to-day PDF editing needs. We continue to add new features and hope DocFly helps you improve your productivity and work quality.</div>
                    </div>
                </div>
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <p className="sm:text-3xl title-font mb-4 text-gray-900 font-bold text-3xl text-center">THE IDEA</p>
                    </div>
                    <div className="flex flex-wrap -m-4 px-10 ">
                        <div className="p-4 lg:w-1/4 md:w-1/2 sm:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center text-white sm:text-left bg-slate-800 p-4">
                                <Image alt="team" className="flex flex-wrap rounded-lg w-100 h-48 object-cover object-center sm:mb-0 mb-4" width={400} height={200} src="/images/2.jpeg" />
                            </div>
                        </div>
                        <div className="p-4 lg:w-3/4 md:w-1/2 sm:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center text-white sm:text-left bg-slate-800 p-4">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nihil hic tempora est dolores, labore alias vero ratione illum quod magnam aliquid consectetur rem possimus culpa dolor perferendis, nemo quos?
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <p className="sm:text-3xl title-font mb-4 text-gray-900 font-bold text-3xl text-center">OUR MISSION</p>
                    </div>
                    <div className="flex flex-wrap -m-4 px-10 ">
                        <div className="p-4 lg:w-3/4">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center text-white sm:text-left bg-slate-800 p-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro laboriosam, nulla doloribus esse nobis voluptatibus tempore libero! Rerum incidunt, dolores aliquid cumque harum ullam voluptatem error dolorum sapiente neque temporibus?
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center text-white sm:text-left bg-slate-800 p-4">
                                <Image alt="team" className="flex-shrink-0 rounded-lg w-100 h-48 object-cover object-center sm:mb-0 mb-4" width={400} height={200} src="/images/2.jpeg" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <p className="sm:text-3xl title-font mb-4 text-gray-900 font-bold text-3xl text-center">STARTING UP</p>
                    </div>
                    <div className="flex flex-wrap -m-4 px-10 ">
                        <div className="p-4 lg:w-1/4">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center text-white sm:text-left bg-slate-800 p-4">
                                <Image alt="team" className="flex-shrink-0 rounded-lg w-100 h-48 object-cover object-center sm:mb-0 mb-4" width={400} height={200} src="/images/2.jpeg" />
                            </div>
                        </div>
                        <div className="p-4 lg:w-3/4">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center text-white sm:text-left bg-slate-800 p-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim hic cumque praesentium ipsa ut velit ullam aliquid at quos officia, quaerat quae accusantium rem, dicta maxime. Voluptatibus, quas reiciendis.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-5 py-2 mx-auto">
                    <div className="flex flex-col text-center w-full mb-10">
                        <p className="sm:text-3xl title-font mb-4 text-gray-900 font-bold text-3xl text-center">OUR TEAM</p>
                    </div>
                    <div className="flex flex-wrap -m-4 px-10 ">
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center text-white sm:text-left bg-slate-800 p-4">
                                <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" width={200} height={200} src="/images/placeholder.jpg" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">Holden Caulfield</h2>
                                    <h3 className="text-white mb-3">Developer</h3>
                                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/2">
                            <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center text-white sm:text-left bg-slate-800 p-4">
                                <Image alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" width={200} height={200} src="/images/placeholder.jpg" />
                                <div className="flex-grow sm:pl-8">
                                    <h2 className="title-font font-medium text-lg text-white">Alper Kamu</h2>
                                    <h3 className="text-white mb-3">Developer</h3>
                                    <p className="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default About;
