import React from "react";
import {PortfolioBlockData} from "@/data/interfaces";
import Image from "next/image";

export function PortfolioBlock(props: { item: PortfolioBlockData }) {
    return <div>
        <h1>{props.item.title}</h1>
        <h2>{props.item.subtitle}</h2>
        <Image src={props.item.image} alt={props.item.title}/>
        <p>{props.item.desc}</p>
    </div>;
}