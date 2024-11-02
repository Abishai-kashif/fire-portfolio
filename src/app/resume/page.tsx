import OpacityAnimation from "@/components/layout/opacity-animation";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
    TooltipProvider,
    TooltipContent,
    TooltipTrigger,
    Tooltip,
} from "@/components/ui/tooltip";
import { about, partialSkills } from "@/data";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";

import {
    SiTailwindcss,
    SiNextdotjs,
    SiBootstrap,
    SiTypescript,
} from "react-icons/si";

const skillsList = [
    {
        icon: <FaHtml5 />,
        name: "html 5",
    },
    {
        icon: <FaCss3 />,
        name: "css 3",
    },
    {
        icon: <FaJs />,
        name: "javascript",
    },
    {
        icon: <FaReact />,
        name: "react.js",
    },
    {
        icon: <SiNextdotjs />,
        name: "next.js",
    },
    {
        icon: <SiTailwindcss />,
        name: "tailwind.css",
    },
    {
        icon: <SiTypescript />,
        name: "typescript",
    },
    {
        icon: <SiBootstrap />,
        name: "bootstrap",
    },
];

const skills = { ...partialSkills, skillsList };

const Resume = () => {
    return (
        <OpacityAnimation classes="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
            <main className="container mx-auto">
                <Tabs
                    className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:mt-5"
                    defaultValue="about me"
                >
                    <TabsList className="flex flex-col items-center justify-center w-full max-w-[380px] mx-auto xl:mx-0 gap-6 ">
                        <TabsTrigger value="about me">About me</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="space-y-[30px]">
                                <div className="space-y-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">
                                        {skills.title}
                                    </h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>

                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] mx-auto xl:mx-0 gap-4 max-w-[620px]">
                                    {skills.skillsList.map((skill) => {
                                        return (
                                            <li key={skill.name}>
                                                <TooltipProvider
                                                    delayDuration={100}
                                                >
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#ebebeb] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-orange transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>

                                                        <TooltipContent className="rounded-full capitalize font-medium">
                                                            <p>{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about me */}

                        <TabsContent
                            value="about me"
                            className="w-full h-full xl:h-[460px] text-center xl:text-left"
                        >
                            <div className="space-y-[30px]">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>

                                <ul className="max-w-[620px] mx-auto xl:mx-0 py-1 border border-orange/20 rounded-[1rem] bg-[#ebebeb]/20">
                                    {about.info.map((item, idx) => {
                                        return (
                                            <li
                                                key={idx}
                                                className={`flex items-center flex-wrap justify-between gap-4 px-6 py-3 mt-1 ${
                                                    idx % 2 === 0
                                                        ? "bg-[#ebebeb]/20"
                                                        : "bg-primary"
                                                }`}
                                            >
                                                <span className="text-white/60 ">
                                                    {item.fieldName}:
                                                </span>
                                                <span className="sm:text-[1.20rem]">
                                                    {item.fieldValue}
                                                </span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </main>
        </OpacityAnimation>
    );
};

export default Resume;
