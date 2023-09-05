import useImages from "@/data/useImages";
import Image from "next/image";
import {PortfolioBlockData} from "@/data/interfaces";
import Link from "next/link";

export default function PortfolioBricks(props: { section: string }) {
    const portfolioItems = useImages(props.section);

    return (
        <div className={'grid grid-cols-2 sm:grid-cols-3 grid-flow-col space-x-2 space-y-2'}>
            {portfolioItems && portfolioItems.map((e: PortfolioBlockData) =>
                <div key={e.title}>
                    <Link href={`/portfolio/${e.title}`}>
                        <Image
                            src={e.image}
                            alt={e.title}
                        />
                    </Link>
                </div>)}
        </div>
    )
}