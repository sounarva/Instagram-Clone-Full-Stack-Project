import axios from "axios";

const api = axios.create({
    baseURL: "",
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

export const getUserPosts = async () => {
    try {
        const response = await api.get("/api/posts")
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const postLike = async (postId) => {
    try {
        await api.post(`/api/posts/like/${postId}`)
        const response = await getFeed()
        return response
    } catch (error) {
        console.log(error)
    }
}

export const postUnlike = async (postId) => {
    try {
        await api.delete(`/api/posts/unlike/${postId}`)
        const response = await getFeed()
        return response
    } catch (error) {
        console.log(error)
    }
}

export const createPost = async (imageFile, caption) => {
    try {
        const formData = new FormData()
        formData.append("image", imageFile)
        formData.append("caption", caption)

        const response = await api.post("/api/posts", formData)
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = async (postId) => {
    await api.delete(`/api/posts/delete/${postId}`)
    const response = await getFeed()
    return response
}
