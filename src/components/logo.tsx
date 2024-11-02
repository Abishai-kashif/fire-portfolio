import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
    return (
        <Link href={"/"}>
            <h2 className={className}>
                Abishai k<span className="text-orange">.</span>
            </h2>
        </Link>
    );
};

export default Logo;
