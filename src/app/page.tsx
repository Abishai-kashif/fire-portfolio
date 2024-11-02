import Photo from "@/components/photo";
import Socials from "@/components/socials";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
    return (
        <main className="h-full">
            <section className="container mx-auto h-full">
                <div className="flex flex-col xl:flex-row items-center justify-between gap-6 xl:pt-8 xl:pb-24">
                    {/* text */}
                    <div className="order-2 xl:order-none text-center xl:text-left">
                        <span className="text-xl text-white/95">
                            Software Deveoper
                        </span>

                        <h1 className="h1">
                            Hello I&apos;m
                            <br />
                            <span className="text-orange">Abishai Kashif</span>
                        </h1>

                        <p className="max-w-[500px] mb-9 mt-4 text-white/80 border border-l-0 border-r-0 border-white/25 p-1">
                            I excel at crafting elegant digital experiences and
                            I am proficient in various programming languages and
                            technologies.
                        </p>
                        {/* btns & socials */}
                        <div className="flex flex-col xl:flex-row items-center gap-8">
                            <Button
                                variant={"outline"}
                                size={"lg"}
                                className="uppercase"
                            >
                                Download CV <FiDownload className="text-xl" />
                            </Button>

                            <div className="mb-8 xl:mb-0">
                                <Socials
                                    containerStyles="flex gap-6"
                                    IconStyles="flex items-center justify-center text-2xl rounded-full border border-orange text-orange h-10 w-10 hover:bg-orange hover:text-primary hover:transition-all duration-500"
                                />
                            </div>
                        </div>
                    </div>

                    {/* photo */}
                    <div className="order-1 xl:order-none mb-8 xl:mb-0">
                        <Photo />
                    </div>
                </div>
            </section>

            {/* stats */}
            <Stats />
        </main>
    );
}
