import heroStyles from './../styles/herosection.module.css'
import commonStyles from './../styles/common.module.css'
import Link from 'next/link';
import Image from "next/image";

const HeroSection = ({ title, imageUrl }: any) => {
    return (
        <main className={heroStyles.main_section}>
            <div className={commonStyles.container}>
                <div className={commonStyles.grid_two_section}>
                    <div className={heroStyles.hero_content}>
                        <h1>{title}</h1>
                        <p>{"All the tools you\'ll need to be more productive and work smarter with documents."}</p>
                        <div className="p-2 w-full">
                            <Link href='/register' className="rounded-full mx-auto text-white bg-slate-900 border-0 py-2 px-8 mr-2 focus:outline-none hover:bg-slate-600 text-lg">Free Trail</Link>
                            <Link href='/tools' className="rounded-full mx-auto text-white bg-slate-900 border-0 py-2 px-8 ml-2 focus:outline-none hover:bg-slate-600 text-lg">Explor Tools</Link>
                        </div>
                    </div>
                    <div className={heroStyles.hero_image}>
                        <Image src={imageUrl} alt="pdf ace" width={500} height={500} className="w-auto sm:w-3/4 " />
                    </div>
                </div>
            </div>
            <div className={heroStyles['custom-shape-divider-bottom-1681647578']}>
                {/* <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120"
                    preserveAspectRatio="none">
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className={heroStyles["shape-fill"]}></path>
                </svg> */}
            </div>
        </main>
    );

};
export default HeroSection;
