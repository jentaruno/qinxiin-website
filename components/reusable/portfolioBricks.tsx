import useImages from "@/data/useImages";
import Link from "next/link";
import Image from "next/image";
import {PortfolioBlockData} from "@/data/interfaces";

export default function PortfolioBricks(props: { section: string }) {
    const portfolioItems = useImages(props.section);

    return (
        <div className={'grid grid-cols-2 sm:grid-cols-3 grid-flow-col space-x-2 space-y-2'}>
            {portfolioItems
                ? portfolioItems.length > 0 &&
                portfolioItems.map((e: PortfolioBlockData) =>
                    <div key={e.title}>
                        <Link href={`/portfolio/${e.title}`}>
                            <Image
                                style={{objectFit: "cover"}}
                                width={200}
                                height={200}
                                src={e.image}
                                alt={e.title}
                            />
                        </Link>
                    </div>)
                : <p>Loading...</p>
            }
        </div>
    )
}