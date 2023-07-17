import Image from "next/image";
import Link from "next/link";

const NewHeader = () => {
    return (
        <>
            <nav className="bg-black text-white">
                <div className="max-w-7xl flex justify-between items-center mx-auto relative">
                    <Link href="" className="font-bold text-3xl">TuatTA</Link>
                    <ul className="flex font-semibold">
                        <li>
                            <Link href="" className="menu-item">HOME</Link>
                        </li>
                        <li className="group">
                            <Link href="" className="menu-item group-hover:border-white">MEGA</Link>
                            <div className="grid grid-cols-4 w-full p-5 absolute top-full left-0 bg-black mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500">
                                <ul className="p-2">
                                    <li><Link href="" className="mega-sub-item-title">Product category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                </ul>
                                <ul className="p-2">
                                    <li><Link href="" className="mega-sub-item-title">Product category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                </ul>
                                <ul className="p-2">
                                    <li><Link href="" className="mega-sub-item-title">Product category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                </ul>
                                <ul className="p-2">
                                    <li><Link href="" className="mega-sub-item-title">Product category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                    <li><Link href="" className="mega-sub-item">Sub category</Link></li>
                                </ul>
                                <Image src="/image/JBL_JR 310BT_Product Image_Hero_Skyblue.png" alt="" width={10} height={10} />
                                <Image src="/image/JBL_Quantum_400_Product Image_Hero 02.png" alt="" width={10} height={10} />
                                <Image src="/image/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png" alt="" width={10} height={10} />
                                <Image src="/image/JBLHorizon_001_dvHAMaster.png" alt="" width={10} height={10} />
                            </div>
                        </li>
                        <li className="group relative">
                            <Link href="" className="menu-item group-hover:border-white">DROPDOWN</Link>
                            <ul className="absolute left-0 bg-black w-max mt-14 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-0 transition-all duration-500">
                                <li><Link href="" className="menu-sub-item">Dropdown menu</Link></li>
                                <li><Link href="" className="menu-sub-item">Dropdown menu</Link></li>
                                <li className="sub-dropdown relative">
                                    <Link href="" className="menu-sub-item">Dropdown menu</Link>
                                    <ul className="sub-dropdown-content absolute left-full top-full bg-black w-max opacity-0 invisible transition-all duration-500">
                                        <li><Link href="" className="menu-sub-item">Sub dropdown menu</Link></li>
                                        <li><Link href="" className="menu-sub-item">Sub dropdown menu</Link></li>
                                        <li className="sub-dropdown relative">
                                            <Link href="" className="menu-sub-item">Dropdown menu</Link>
                                            <ul className="sub-dropdown-content absolute left-full top-full bg-black w-max opacity-0 invisible transition-all duration-500">
                                                <li><Link href="" className="menu-sub-item">Sub dropdown menu</Link></li>
                                                <li><Link href="" className="menu-sub-item">Sub dropdown menu</Link></li>
                                                <li><Link href="" className="menu-sub-item">Sub dropdown menu</Link></li>
                                                <li><Link href="" className="menu-sub-item">Sub dropdown menu</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link href="" className="menu-sub-item">Sub dropdown menu</Link></li>
                                    </ul>
                                </li>
                                <li className="sub-dropdown relative">
                                    <Link href="" className="menu-sub-item">Dropdown menu</Link>
                                    <ul className="sub-dropdown-content absolute left-full top-full bg-black w-max opacity-0 invisible transition-all duration-500">
                                        <li><Link href="" className="menu-sub-item">Sub dropdown menu</Link></li>
                                        <li><Link href="" className="menu-sub-item">Sub dropdown menu</Link></li>
                                        <li><Link href="" className="menu-sub-item">Sub dropdown menu</Link></li>
                                        <li><Link href="" className="menu-sub-item">Sub dropdown menu</Link></li>
                                    </ul>
                                </li>
                                <li><Link href="" className="menu-sub-item">Dropdown menu</Link></li>
                                <li><Link href="" className="menu-sub-item">Dropdown menu</Link></li>
                            </ul>
                        </li>
                        <li><Link href="" className="menu-item">BLOG</Link></li>
                        <li><Link href="" className="menu-item">ABOUT</Link></li>
                    </ul>
                    <ul className="flex font-semibold">
                        <li><Link href="" className="menu-item">ACCOUNT</Link></li>
                        <li><Link href="" className="menu-item">CART</Link></li>
                    </ul>
                </div>
            </nav >
        </>
    );
};
export default NewHeader;