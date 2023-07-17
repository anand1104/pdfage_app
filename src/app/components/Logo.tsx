import Image from "next/image";
import Link from "next/link";

const Logo = () => {
    return (
        <Link href='/'>
            <Image
                alt="PDF Logo"
                className="w-auto hidden md:block cursor-pointer"
                width="200"
                height="80"
                src="/images/logo3.png"
            />
        </Link>
    );
}

export default Logo;