import OpacityAnimation from "@/components/layout/opacity-animation";
import { services } from "@/data";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const Services = () => {
    return (
        <main className="min-h-[80vh] flex flex-col items-center justify-center py-12">
            <div className="container mx-auto">
                <OpacityAnimation classes="grid grid-cols-1 xl:grid-cols-2 gap-[60px]">
                    {services.map((service, idx) => {
                        const { num, href, title, description } = service;

                        return (
                            <div key={idx} className="group space-y-6">
                                {/* top */}
                                <div className="flex w-full justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {num}
                                    </div>
                                    <Link
                                        href={href}
                                        className="group-hover:bg-orange text-primary h-[60px] w-[60px] rounded-full flex items-center justify-center text-3xl hover:-rotate-45 transition-all duration-500 bg-white"
                                    >
                                        <BsArrowDownRight />
                                    </Link>
                                </div>

                                {/* title */}
                                <h2 className="group-hover:text-orange text-3xl font-semibold transition-all duration-500">
                                    {title}
                                </h2>

                                {/* description */}
                                <p className="text-white/50">{description}</p>

                                {/* border */}
                                <div className="border-b w-full border-white/20"></div>
                            </div>
                        );
                    })}
                </OpacityAnimation>
            </div>
        </main>
    );
};

export default Services;
