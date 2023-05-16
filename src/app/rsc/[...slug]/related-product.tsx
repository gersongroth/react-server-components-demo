import Link from "next/link";
import React from "react";
import { IProduct } from "@/pages/pdp/ProductType";

interface RelatedProductProps {
    relatedProduct: IProduct;
}
export default function RelatedProduct({
    relatedProduct,
}: RelatedProductProps) {
    return (
        <Link href={`/rsc/${relatedProduct.id}`}>
            <div className="bg-gray-50 dark:bg-gray-800 p-8">
                <div className="">
                    <h4
                        className="text-xl text-gray-600 dark:text-white line-clamp-2"
                        style={{
                            height: "56px",
                        }}
                    >
                        {relatedProduct.title}
                    </h4>
                </div>
                <div className="flex justify-center items-center mt-8 md:mt-12">
                    <img
                        className="w-full h-auto object-cover"
                        style={{
                            aspectRatio: 1,
                        }}
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                    />
                </div>
            </div>
        </Link>
    );
}
