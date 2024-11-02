import Link from "next/link";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export const socials = [
    { path: "https://github.com/Abishai-kashif", icon: <FaGithub /> },
    {
        path: "https://www.facebook.com/profile.php?id=100073493683918",
        icon: <FaFacebook />,
    },
    {
        path: "https://www.linkedin.com/in/abishai-kashif-b482362ba/",
        icon: <FaLinkedin />,
    },
    {
        path: "https://www.instagram.com/abi_zeries_official/",
        icon: <FaInstagram />,
    },
];

const Socials = ({
    containerStyles,
    IconStyles,
}: {
    containerStyles: string;
    IconStyles: string;
}) => {
    return (
        <div className={containerStyles}>
            {socials.map((social) => {
                const { path, icon } = social;

                return (
                    <Link href={path} key={path} className={IconStyles}>
                        {icon}
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;
