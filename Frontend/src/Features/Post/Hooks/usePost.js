import { useContext, useEffect } from "react"
import { PostContext } from "../contexts/PostCtx"
import { createPost, deletePost, getFeed, getUserPosts, postLike, postUnlike } from "../Services/post.api"

export const usePost = () => {
    const { loading, setLoading, posts, setPosts, feed, setFeed } = useContext(PostContext)

    const getFeedPosts = async () => {
        setLoading(true)
        try {
            const response = await getFeed()
            setFeed(response.posts.reverse())
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const getUserPostsHandler = async () => {
        setLoading(true)
        try {
            const response = await getUserPosts()
            setPosts(response.posts.reverse())
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const createPostHandler = async (imageFile, caption) => {
        setLoading(true)
        try {
            await createPost(imageFile, caption)
            const response = await getFeed()
            setFeed(response.posts.reverse())
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    const deletePostHandler = async (postId) => {
        try {
            setLoading(true)
            const response = await deletePost(postId)
            setFeed(response.posts.reverse())
            return response
        } catch (error) {
            return error.response.data
        } finally {
            setLoading(false)
        }
    }

    const postLikeHandler = async (postId) => {
        try {
            const response = await postLike(postId)
            setFeed(response.posts.reverse())
        } catch (error) {
            console.log(error)
        }
    }

    const postUnlikeHandler = async (postId) => {
        try {
            const response = await postUnlike(postId)
            setFeed(response.posts.reverse())
        } catch (error) {
            console.log(error)
        }
    }

    return {
        loading,
        feed,
        posts,
        getFeedPosts,
        getUserPostsHandler,
        createPostHandler,
        deletePostHandler,
        postLikeHandler,
        postUnlikeHandler
    }
}