import { useContext, useEffect } from 'react'
import Sidebar from '../../Post/Components/Sidebar'
import '../Styles/profile.scss'
import { PostContext } from '../../Post/contexts/PostCtx'
import { usePost } from '../../Post/Hooks/usePost'
import useAuth from '../../Auth/Hooks/useAuth'
import CreatePost from '../../Post/Pages/CreatePost'
import LogoutBtn from './LogoutBtn'

const Profile = () => {
    const { isCreatePostOpen, setIsCreatePostOpen } = useContext(PostContext)
    const { createPostHandler, posts, getUserPostsHandler } = usePost()
    const { user, logout } = useAuth()

    useEffect(() => {
        const getPosts = async () => {
            await getUserPostsHandler()
        }
        getPosts()
    }, [])

    return (
        <main>
            <LogoutBtn />
            <Sidebar />
            <div className="profile-container">
                <div className="profile-section">
                    <header className="profile-header">
                        <div className="profile-pic">
                            <img src={user?.profilePic || "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&auto=format&fit=crop"} alt="Profile" />
                        </div>
                        <div className="profile-info">
                            <h1 className="username">{user?.username || 'sounarva_swag'}</h1>
                            <code className="bio">{user?.bio || 'Building the future with AI and code. 🚀 | React & Node.js Developer | Tech Enthusiast'}</code>
                        </div>
                    </header>

                    <div className="profile-gallery">
                        {posts.map((post) => (
                            <div key={post._id} className="gallery-item">
                                <img src={post.image.filePath} alt={`Post ${post._id}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {isCreatePostOpen && (
                <CreatePost
                    user={user}
                    createPostHandler={createPostHandler}
                    setIsCreatePostOpen={setIsCreatePostOpen}
                />
            )}
        </main>
    )
}

export default Profile