"use client";
import { motion } from "framer-motion";

const OpacityAnimation = ({
    children,
    classes,
}: {
    children: React.ReactNode;
    classes?: string;
}) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 0.4,
                    delay: 2.4,
                    ease: "easeIn",
                },
            }}
            className={classes}
        >
            {children}
        </motion.div>
    );
};

export default OpacityAnimation;
