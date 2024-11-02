import { motion } from "framer-motion";

const stairsVariants = {
    initial: {
        top: "0%",
    },

    animate: {
        top: "100%",
    },

    exit: {
        top: ["100%", "0%"],
    },
};

const reverseIndex = (idx: number) => {
    const totalStairs = 6;

    return totalStairs - 1 - idx;
};

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, idx) => {
                return (
                    <motion.div
                        variants={stairsVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(idx) * 0.1,
                        }}
                        key={idx}
                        className="h-full w-full bg-white relative flex"
                    ></motion.div>
                );
            })}
        </>
    );
};

export default Stairs;
