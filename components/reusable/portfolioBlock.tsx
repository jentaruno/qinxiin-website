import React from "react";
import {PortfolioBlockData} from "@/data/interfaces";
import Image from "next/image";

export function PortfolioBlock(props: { item: PortfolioBlockData }) {

    return <div className={"flex flex-col items-center space-y-6"}>
        <div className={"text-center"}>
            <h3 className={"uppercase"}>{props.item.title}</h3>
            <p>{props.item.subtitle}</p>
        </div>
        <div className={"relative h-96 w-full flex flex-col justify-center lg:mr-8"}>
            <Image
                style={{objectFit: "cover"}}
                fill={true}
                src={props.item.image}
                alt={props.item.title}
            />
        </div>
        <p>{props.item.desc}</p>
    </div>;
}