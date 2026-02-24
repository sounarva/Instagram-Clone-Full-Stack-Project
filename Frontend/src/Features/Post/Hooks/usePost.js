import { useContext } from "react"
import { PostContext } from "../contexts/PostCtx"
import { getFeed , postLike , postUnlike } from "../Services/post.api"

export const usePost = () => {
    const {loading , setLoading , posts , setPosts , feed , setFeed} = useContext(PostContext)

    const getFeedPosts = async () => {
        setLoading(true)
        try {
            const response = await getFeed()
            setFeed(response.posts)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const postLikeHandler = async (postId) => {
        try {
            await postLike(postId)
            const response = await getFeed()
            setFeed(response.posts)
        } catch (error) {
            console.log(error)
        }
    }

    const postUnlikeHandler = async (postId) => {
        try {
            await postUnlike(postId)
            const response = await getFeed()
            setFeed(response.posts)
        } catch (error) {
            console.log(error)
        }
    }

    return {
        loading,
        feed,
        getFeedPosts,
        postLikeHandler,
        postUnlikeHandler
    }
}