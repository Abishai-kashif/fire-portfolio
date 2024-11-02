"use client";

import { Sheet, SheetTrigger, SheetContent } from "../ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { links } from "@/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../logo";

const MobileNavLinks = () => {
    const currPath = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex items-center justify-center">
                <CiMenuFries className="text-orange text-[32px]" />
            </SheetTrigger>

            <SheetContent className="flex items-center justify-center flex-col">
                <div className="mt-10 mb-12">
                    <Logo className="text-4xl font-semibold" />
                </div>

                <nav>
                    <ul className="space-y-6 text-center">
                        {links.map((link, idx) => {
                            const { name, path } = link;

                            return (
                                <li key={idx}>
                                    <Link
                                        href={path}
                                        className={`${
                                            path === currPath
                                                ? "text-orange border-b-2 border-orange"
                                                : "text-white"
                                        } hover:text-orange font-medium capitalize transition-all`}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNavLinks;
