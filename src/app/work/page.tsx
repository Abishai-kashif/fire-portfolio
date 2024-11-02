"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import OpacityAnimation from "@/components/layout/opacity-animation";
import { projects } from "@/data";
import WorkSliderBtns from "@/components/work-slider-btns";

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    return (
        <OpacityAnimation classes="min-h-[80vh] flex flex-col justify-center py-12 xl:py-5">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    {/* text */}
                    <div className="w-full xl:w-6/12 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="space-y-[30px] h-3/6">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold  text-transparent text-outline">
                                {project.num}
                            </div>

                            {/* project category */}
                            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-orange transition-all duration-500 capitalize">
                                {project.category} project
                            </h2>

                            {/* project description */}
                            <p className="text-white/60">
                                {project.description}
                            </p>

                            {/* stacks */}
                            <ul className="flex gap-4 max-w-[30rem] flex-wrap">
                                {project.stack.map((item, idx) => {
                                    return (
                                        <li
                                            key={idx}
                                            className="text-xl text-orange"
                                        >
                                            {item.name}
                                            {project.stack.length - 1 !== idx &&
                                                ","}
                                        </li>
                                    );
                                })}
                            </ul>

                            {/* border */}
                            <div className="border border-white/60" />

                            {/* btns */}
                            <div className="flex items-center gap-4">
                                {/* live project btn */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white group-hover:text-orange text-3xl" />
                                            </TooltipTrigger>
                                            <TooltipContent className=" rounded-full">
                                                <p>Live Demo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* github repo btn */}
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-white group-hover:text-orange text-3xl" />
                                            </TooltipTrigger>
                                            <TooltipContent className=" rounded-full capitalize font-medium">
                                                <p>Github Repo</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* slider */}
                    <div className="w-full xl:w-6/12">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            onSlideChange={(swiper) => {
                                setProject(projects[swiper.activeIndex]);
                            }}
                            className="xl:h-[520px] mb-12"
                        >
                            {projects.map((item, idx) => {
                                return (
                                    <SwiperSlide
                                        key={idx}
                                        className="w-full max-h-fit"
                                    >
                                        <div className="h-[366px] shadow-sm relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="w-full h-full bg-black/10 z-10 absolute top-0 bottom-0" />
                                            {/* image */}
                                            <div className="relative w-full h-[80%]">
                                                <Image
                                                    src={item.image}
                                                    fill
                                                    alt={item.title}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>

                                        <WorkSliderBtns
                                            containerStyles="z-20 flex justify-between xl:justify-end gap-2 absolute bottom-[calc(50%_ - _22px)] bottom-[50%] xl:bottom-[-3.7rem] w-full"
                                            btnStyles="bg-orange hover:bg-orange-hover text-primary text-[25px] w-[44px] h-[44px] flex items-center justify-center rounded-[2px] transition-all"
                                            iconStyles=""
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </OpacityAnimation>
    );
};

export default Work;
