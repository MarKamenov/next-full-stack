import { notFound } from "next/navigation";

type ReviewDetailsPageParam = {
    params: Promise<{
        productId: string
        reviewId: string;
    }>
};

const ReviewDetails = async ({ params }: ReviewDetailsPageParam) => {

    const { productId, reviewId } = await params;
    if (parseInt(reviewId) > 1000) {
        notFound()
    }
    return (
        <h1>Review Details for review {reviewId} from product {productId}</h1>
    )
}
export default ReviewDetails