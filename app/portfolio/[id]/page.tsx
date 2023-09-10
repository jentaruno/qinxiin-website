"use client"

import React from 'react';
import useImages from "@/data/useImages";
import {PortfolioBlock} from "@/components/reusable/portfolioBlock";

export default function PortfolioPage({params}: { params: { id: string } }) {
    const portfolioItems = [
        ...useImages("design"),
        ...useImages("digital"),
        ...useImages("traditional")
    ];

    const slugToString = (slug: string) => {
        if (!slug) {
            return "";
        }
        return slug.replaceAll("%20", " ");
    }

    const title = slugToString(params.id);
    const item = portfolioItems.find((e) => e.title === title);

    return (item
            ? <div className={"w-5/6 md:w-3/4 mt-10 mb-20"}>
                <PortfolioBlock item={item}/>
            </div>
            : <div>...</div>
    );
};