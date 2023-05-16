import { IProduct } from "@/pages/pdp/ProductType";

const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};

export const fetchWithDelay = async (): Promise<
    IProduct[] | undefined
> => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();

        return shuffle(products).splice(0, 6) as IProduct[];
    } catch (error) {
        console.error(error);
    }

    return [];
}

export const fetchRelatedProducts = async (): Promise<
    IProduct[] | undefined
> => {
    return new Promise((resolve, reject) => {
        const load = async () => {
            const relatedProducts = await fetchWithDelay();
            resolve(relatedProducts); 
        }
        setTimeout(() => {
            load();
        }, 3000);
    });
};
