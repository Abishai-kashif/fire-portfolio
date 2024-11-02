import type { Metadata } from "next";
import { Aclonica } from "next/font/google";

import "./globals.css";
import Header from "@/components/layout/header";
import PageTransition from "@/components/layout/page-transition";
import StairTransition from "@/components/layout/stair-transition";

const ac = Aclonica({
    weight: "400",
    variable: "--font-Ac",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Abishai k. - Portfolio",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={ac.variable + " antialiased"}>
                <Header />
                <StairTransition />
                <PageTransition>{children}</PageTransition>
            </body>
        </html>
    );
}