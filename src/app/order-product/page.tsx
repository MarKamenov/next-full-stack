"use client"
import { useRouter } from "next/navigation"

const OrderProducts = () => {
    const router = useRouter()
    const handleOrder = () => {
        router.push('/')
    }
    return (
        <>
            <h1>Welcome orders!</h1>
            <button onClick={handleOrder}>Place order</button>
        </>

    )
}
export default OrderProducts 