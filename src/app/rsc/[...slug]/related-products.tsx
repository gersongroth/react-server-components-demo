import React, { useEffect, useState } from "react";
import { IProduct } from "@/pages/pdp/ProductType";
import RelatedProduct from "./related-product";
import { fetchRelatedProducts } from "@/utils/fetch-related-products";



export default async function RelatedProducts() {
    const relatedProducts = await fetchRelatedProducts();
    return (
        <>
            {(relatedProducts ?? []).length > 0 && (
                <div className="2xl:container 2xl:mx-auto">
                    <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                        <div>
                            <h3 className="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-white text-center dark:text-gray-50">
                                Produtos Recomendados
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
                            {(relatedProducts ?? []).map((relatedProduct: IProduct) => (
                                <RelatedProduct
                                    key={relatedProduct.id}
                                    relatedProduct={relatedProduct}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
