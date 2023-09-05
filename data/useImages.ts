import {useState} from "react";
import {PortfolioBlockData} from "@/data/interfaces";

export default function useImages(section: string) {
    const [images, setImages] = useState<PortfolioBlockData[]>([]);

    // TODO: fetch data from backend
    
    return images;
}