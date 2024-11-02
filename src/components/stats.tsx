"use client";

import { stats } from "@/data";
import CountUp from "react-countup";

const Stats = () => {
    return (
        <section className="pt-4 xl:pt-0 pb-12 xl:pb-5">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center items-center xl:justify-start gap-6 max-w-[80vw] xl:max-w-none mx-auto">
                    {stats.map((stat) => {
                        const { num, text } = stat;
                        return (
                            <div key={text} className="flex-1 ">
                                <div
                                    key={text}
                                    className="flex-1 flex items-center gap-2 text-center justify-center rounded-2xl px-6 py-4"
                                >
                                    <CountUp
                                        end={num}
                                        delay={2}
                                        duration={5}
                                        className="text-4xl xl:text-6xl font-extrabold"
                                    />

                                    <p
                                        className={`${
                                            text.length < 15
                                                ? "max-w-[100px]"
                                                : "max-w-[150px]"
                                        } leading-tight  text-white/80`}
                                    >
                                        {text}
                                    </p>

                                    {/* border */}
                                </div>

                                <div className="border-b-[0.1px] border-orange/30 shadow-md rounded-full shadow-orange/[0.6] h-[2.4px]" />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
