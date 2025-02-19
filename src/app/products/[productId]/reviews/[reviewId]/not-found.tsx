"use client"
import { usePathname } from "next/navigation"

const NotFound = () => {
    const pathName = usePathname()
    const productId = pathName.split("/")[2];
    const reviewId = pathName.split("/")[4];
    return (
        <div>
            <h1>  Review {reviewId} not found for product {productId}</h1>
        </div>
    )
}

export default NotFound