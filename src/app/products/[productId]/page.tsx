import { Metadata } from "next";

type ProductDetailsPageParam = {
    params: {
        productId: Promise<string>;
    }

};

export const generateMetadata = async ({
    params,
}: ProductDetailsPageParam): Promise<Metadata> => {
    const productId = await params.productId;
    const title = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`iPhone ${productId}`);
        }, 100);
    });
    return {
        title: `Product - ${title}`,
    };
};

const ProductDetails = async ({ params }: ProductDetailsPageParam) => {

    const paramId = await params.productId;
    return (
        <h1>Welcome ProductDetails {paramId}</h1>
    )
}
export default ProductDetails