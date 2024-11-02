"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
    const currPath = usePathname();
    return (
        <div key={currPath}>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    transition: { duration: 0.4, delay: 1, ease: "easeInOut" },
                }}
                className="fixed top-0 h-screen w-screen bg-primary pointer-events-none"
            />
            {children}
        </div>
    );
};

export default PageTransition;
