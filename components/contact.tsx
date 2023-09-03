import {ContactLinks} from "@/data/contactLinks";
import Image from "next/image";
import React from "react";

export default function Contact() {
    return (
        <div className={'bg-gray-400 flex flex-row flex-wrap justify-between px-2 md:px-12 py-4 md:py-6'}>
            <div className={'flex flex-row'}>
                <Image
                    src="/Logo 2.png"
                    width={36}
                    height={36}
                    alt="Qinxiin banner"
                />
                <h4 className={'first-letter:text-xs font-cursive text-xl text-white mb-2'}>
                    Qinxiin
                </h4>
            </div>
            <div className={'flex flex-row flex-wrap space-x-4'}>
                {ContactLinks.map((c) => {
                    return (
                        <div key={c.name} className={'flex flex-row items-center mb-1'}>
                            <a
                                className={"text-white transition-colors underline underline-offset-4 hover:decoration-orange-700"}
                                href={c.link}
                                target="blank"
                            >
                                {c.icon}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}