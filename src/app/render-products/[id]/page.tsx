export async function generateStaticParams() {
    return [{ id: "1" }, { id: "2" }, { id: "3" }];
}

// export const dynamicParams = false

const ProductPage = async ({
    params,
}: {
    params: Promise<{ id: string }>;
}) => {
    const { id } = await params;
    return (<h1>Product {id} details</h1>);
}

export default ProductPage;