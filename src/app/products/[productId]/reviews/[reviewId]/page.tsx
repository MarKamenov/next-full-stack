import { notFound } from "next/navigation";

type ReviewDetailsPageParam = {
    params: Promise<{
        productId: string
        reviewId: string;
    }>
};

// function getRandomInt(count: number) {
//     return Math.floor(Math.random() * count);
// }

const ReviewDetails = async ({ params }: ReviewDetailsPageParam) => {
    // const random = getRandomInt(2);
    // if (random === 1) {
    //     throw new Error("Error loading review");
    // }
    const { productId, reviewId } = await params;
    if (parseInt(reviewId) > 1000) {
        notFound()
    }
    return (
        <h1>Review Details for review {reviewId} from product {productId}</h1>
    )
}
export default ReviewDetails