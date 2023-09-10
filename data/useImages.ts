import {useEffect, useState} from "react";
import {PortfolioBlockData} from "@/data/interfaces";
import {API_LINK, ENDPOINTS} from "./utils";

export default function useImages(section: string) {
    const [images, setImages] = useState<PortfolioBlockData[]>([]);

    // TODO: fetch data from backend
    useEffect(() => {
        async function fetchData() {
            try {
                console.log(ENDPOINTS[section]);
                const response = await fetch(API_LINK + ENDPOINTS[section]);
                const json = await response.json();
                setImages(json);
            } catch (error) {
                console.error('Error fetching JSON data:', error);
            }
        }

        fetchData();
    }, [section]);

    return images;
}