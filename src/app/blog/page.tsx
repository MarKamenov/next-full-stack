
import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: 'Blog',
    }
}
const Blog = async () => {
    await new Promise(resolve => {
        setTimeout(() => { resolve('resolved') }, 200)
    })
    return (<h1>Welcome Blog</h1>)
}

export default Blog