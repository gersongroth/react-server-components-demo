export interface IProduct {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: ProductRating;
    title: string;
}

export interface IProductRating {
    rate: number;
    count: number;
}
