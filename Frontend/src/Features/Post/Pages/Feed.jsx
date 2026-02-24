import React, { useEffect } from 'react'
import PostCard from '../Components/PostCard'
import { usePost } from '../Hooks/usePost'
import '../Styles/feed.scss'
import Loading from '../../../components/Loading'
import Sidebar from '../Components/Sidebar'

const Feed = () => {
    const { feed, getFeedPosts, loading } = usePost()

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