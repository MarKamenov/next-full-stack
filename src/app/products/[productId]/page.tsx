import { Metadata } from "next";

type ProductDetailsPageParam = {
    params: Promise<{
        productId: string
    }>

};

export const generateMetadata = async ({
    params,
}: ProductDetailsPageParam): Promise<Metadata> => {
    const { productId } = await params;
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

    const { productId } = await params;
    return (
        <h1>Welcome ProductDetails {productId}</h1>
    )
}
export default ProductDetails