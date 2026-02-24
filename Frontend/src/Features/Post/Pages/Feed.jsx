import { useEffect } from 'react'
import PostCard from '../Components/PostCard'
import { usePost } from '../Hooks/usePost'
import '../Styles/feed.scss'
import Loading from '../../../components/Loading'
import Sidebar from '../Components/Sidebar'
import useAuth from '../../Auth/Hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Feed = () => {
    const navigate = useNavigate()
    const { feed, getFeedPosts, loading } = usePost()
    const { user, isAuthReady } = useAuth()

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
                    />
                ))}
            </div>
        </div>
    )
}

export default Feed