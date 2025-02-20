import Link from "next/link";
import { Product } from '@/components/product'
import { Reviews } from '@/components/reviews'
import { Suspense } from "react";

const RenderProduct = async () => {
    return (
        <>
            <h1>Products page</h1>
            <Link href="/render-products/1">Product 1</Link>
            <Link href="/render-products/2">Product 2</Link>
            <Link href="/render-products/3">Product 3</Link>
            <Suspense fallback={<p>Loading product...</p>}>
                <Product />
            </Suspense>
            <Suspense fallback={<p>Loading review...</p>}>
                <Reviews />
            </Suspense>
        </>
    );
}

export default RenderProduct;