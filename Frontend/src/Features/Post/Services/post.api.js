import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3200",
    withCredentials: true
})

export const getFeed = async () => {
    try {
        const response = await api.get("/api/posts/feed")
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const postLike = async (postId) => {
    try {
        await api.post(`/api/posts/like/${postId}`)
        const response = await getFeed()
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const postUnlike = async (postId) => {
    try {
        await api.delete(`/api/posts/unlike/${postId}`)
        const response = await getFeed()
        return response.data
    } catch (error) {
        console.log(error)
    }
}
