import Link from "next/link";
import Logo from "../logo";
import { Button } from "../ui/button";
import MobileNavLinks from "./mobile-nav-links";
import NavLinks from "./nav-link";

const Header = () => {
    return (
        <header className="py-8 xl:py-11">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Logo className="text-[29px] xl:text-4xl font-semibold" />

                {/* desktop nav & hire me btn */}
                <div className="hidden xl:flex justify-between items-center gap-10">
                    <NavLinks />
                    <Link href="/contact-us">
                        <Button>Hire me</Button>
                    </Link>
                </div>

                <div className="xl:hidden">
                    <MobileNavLinks />
                </div>
            </div>
        </header>
    );
};

export default Header;
