"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="h-full w-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 2, duration: 0.4, ease: "easeIn" },
                }}
            >
                {/* full image */}
                <div className="absolute w-[298px] h-[298px] xl:w-[485px] xl:h-[485px] mix-blend-darken rounded-full overflow-hidden left-5 bottom-7 ">
                    {/* bg illustration */}
                    <motion.div
                        className="absolute w-full h-full top-7 right-5 rounded-full"
                        initial={{ rotate: "0deg", opacity: 0 }}
                        animate={{
                            rotate: "-360deg",
                            opacity: 1,

                            transition: {
                                delay: 2.4,
                                duration: 1,
                                ease: "easeIn",
                            },
                        }}
                    >
                        <Image
                            src="/assets/momentary_tattoo.jpeg"
                            alt="my-photo"
                            fill
                            quality={100}
                            priority
                            sizes="100vw"
                            className="object-cover rounded-full"
                        />
                    </motion.div>

                    {/* image */}
                    <motion.div
                        className="rounded-full"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: {
                                delay: 2.8,
                                duration: 1,
                                ease: "easeInOut",
                            },
                        }}
                    >
                        <Image
                            src="/assets/my-pic.png"
                            alt="my-photo"
                            fill
                            quality={100}
                            priority
                            sizes="100vw"
                            className="object-contain rounded-full"
                        />
                    </motion.div>
                </div>

                {/* circle */}
                <motion.svg
                    className="w-[300px] h-[300px] xl:w-[488px] xl:h-[488px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#ff8811"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ strokeDasharray: "24 10 0 0" }}
                        animate={{
                            strokeDasharray: [
                                "15 120 25 25",
                                "16 25 92 72",
                                "4 250 22 22",
                            ],
                            rotate: [120, 360],
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo;
