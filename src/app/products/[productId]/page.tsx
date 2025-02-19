type ProductDetailsPageParam = {
    params: {
        productId: Promise<string>;
    }

};

const ProductDetails = async ({ params }: ProductDetailsPageParam) => {

    const paramId = await params.productId;
    return (
        <h1>Welcome ProductDetails {paramId}</h1>
    )
}
export default ProductDetails