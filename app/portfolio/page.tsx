'use client'
import PortfolioBricks from "@/components/reusable/portfolioBricks";
import {useState} from "react";

export default function Portfolio() {
    const sections = ["design", "digital", "traditional"];
    const [currentSection, setCurrentSection] = useState(1);

    // TODO: animate h2 and add background

    return (
        <div className={"flex flex-col items-center"}>
            <div className={"flex flex-row space-x-2"}>
                {sections.map((e, i) =>
                    <h2
                        className={`uppercase
                            ${i === currentSection ? 'text-2xl' : 'text-xl'}`}
                        key={e}
                        onClick={() => setCurrentSection(i)}
                    >
                        {e}
                    </h2>
                )}
            </div>
            <PortfolioBricks section={sections[currentSection]}/>
        </div>
    );
}