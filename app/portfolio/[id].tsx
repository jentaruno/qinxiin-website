// components/Subpage.tsx
import React from 'react';
import {useRouter} from 'next/router';
import useImages from "@/data/useImages";
import {PortfolioBlock} from "@/components/reusable/portfolioBlock";

const PortfolioPage = () => {
    const portfolioItems = [
        ...useImages("design"),
        ...useImages("digital"),
        ...useImages("traditional")
    ];
    const router = useRouter();
    const {title} = router.query;
    const item = portfolioItems.find((e) => e.title === title);

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <PortfolioBlock item={item}/>
    );
};

export default PortfolioPage;
