import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { info } from "@/data";
import OpacityAnimation from "@/components/layout/opacity-animation";
import { SelectGroup } from "@radix-ui/react-select";

const icons = [
    <FaPhoneAlt key={0} />,
    <FaEnvelope key={1} />,
    <FaMapMarkedAlt key={2} />,
];

const Contact = () => {
    return (
        <OpacityAnimation>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="space-y-6 p-10 bg-[#ebebeb] rounded-xl">
                            <h3 className="text-4xl text-orange">
                                Let&apos;s work together
                            </h3>

                            <p className="text-white/60">
                                I&apos;d love to hear from you. Please fill out
                                the form and I&apos;ll get back to you as soon
                                as possible.
                            </p>

                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                                <Input type="text" placeholder="Firstname" />
                                <Input type="text" placeholder="Lastname" />
                                <Input
                                    type="email"
                                    placeholder="Email address"
                                />
                                <Input type="text" placeholder="Phone number" />
                            </div>

                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>

                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel className="text-center xl:text-left">
                                            Services
                                        </SelectLabel>
                                        <SelectItem value="est">
                                            Frontend Development
                                        </SelectItem>
                                        <SelectItem value="cst">
                                            Full Stack Development
                                        </SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            {/* textarea */}
                            <Textarea
                                className="h-[200px]"
                                placeholder="Type your message here :)"
                            />

                            {/* btn */}
                            <Button size="md" className="max-w-[10.5rem]">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="space-y-10">
                            {info.map((item, idx) => {
                                return (
                                    <li
                                        key={idx}
                                        className="flex items-center gap-6"
                                    >
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-orange flex items-center justify-center rounded-[0.25rem] bg-[#ebebeb]">
                                            <div className="text-[28px]">
                                                {icons[idx]}
                                            </div>
                                        </div>

                                        <div className="flex-1">
                                            <h3 className="text-white/60">
                                                {item.title}
                                            </h3>
                                            <p className="text-lg xl:text-xl">
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </OpacityAnimation>
    );
};

export default Contact;
