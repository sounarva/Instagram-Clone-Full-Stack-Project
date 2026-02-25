import { useEffect } from 'react'
import PostCard from '../Components/PostCard'
import { usePost } from '../Hooks/usePost'
import '../Styles/feed.scss'
import Loading from '../../../components/Loading'
import Sidebar from '../Components/Sidebar'
import useAuth from '../../Auth/Hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { PostContext } from '../contexts/PostCtx'
import CreatePost from './CreatePost'

const Feed = () => {
    const navigate = useNavigate()
    const { feed, getFeedPosts, loading, createPostHandler, postLikeHandler, postUnlikeHandler, deletePostHandler } = usePost()
    const { user, isAuthReady } = useAuth()
    const { isCreatePostOpen, setIsCreatePostOpen } = useContext(PostContext)

    useEffect(() => {
        if (isAuthReady && user.length === 0) {
            navigate('/login')
        }
    }, [isAuthReady, user, navigate])

    useEffect(() => {
        getFeedPosts()
    }, [])

    if (loading) {
        return <Loading />
    }


    return (
        <div className="feed-page">
            <Sidebar />
            <div className="feed-container">
                {feed.map((post) => (
                    <PostCard
                        key={post._id}
                        post={post}
                        user={post.userId}
                        postLikeHandler={postLikeHandler}
                        postUnlikeHandler={postUnlikeHandler}
                        deletePostHandler={deletePostHandler}
                    />
                ))}
            </div>
            {isCreatePostOpen && <CreatePost
                user={user}
                createPostHandler={createPostHandler}
                setIsCreatePostOpen={setIsCreatePostOpen}
            />}
        </div>
    )
}

export default Feed