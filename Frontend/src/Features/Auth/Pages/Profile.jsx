import { useState, useRef, useContext, useEffect } from 'react'
import Sidebar from '../../Post/Components/Sidebar'
import '../Styles/profile.scss'
import '../Styles/profilepic.scss'
import { PostContext } from '../../Post/contexts/PostCtx'
import { usePost } from '../../Post/Hooks/usePost'
import useAuth from '../../Auth/Hooks/useAuth'
import CreatePost from '../../Post/Pages/CreatePost'
import LogoutBtn from '../Components/LogoutBtn'
import { Bounce, toast } from 'react-toastify'
import Loading from '../../../Shared/Loading'

const Profile = () => {
    const { isCreatePostOpen, setIsCreatePostOpen } = useContext(PostContext)
    const { createPostHandler, posts, getUserPostsHandler } = usePost()
    const { user, profilePic, loading } = useAuth()
    const [isProfilePicModalOpen, setIsProfilePicModalOpen] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)
    const [previewUrl, setPreviewUrl] = useState(null)
    const fileInputRef = useRef(null)

    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setSelectedFile(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewUrl(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleUpload = async () => {
        handleCloseModal()
        const response = await profilePic(selectedFile)
        if (response.success) {
            toast.success(response.message, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
        } else {
            toast.error(response.message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            })
        }
    }

    const handleCloseModal = () => {
        setIsProfilePicModalOpen(false)
        setSelectedFile(null)
        setPreviewUrl(null)
    }

    useEffect(() => {
        const getPosts = async () => {
            await getUserPostsHandler()
        }
        getPosts()
    }, [])

    if (loading) {
        return <Loading />
    }

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
                            <button
                                className='changeProfilePic'
                                onClick={() => setIsProfilePicModalOpen(true)}
                            >
                                Change Profile Picture
                            </button>
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
            {isProfilePicModalOpen && (
                <div className="profile-pic-modal-overlay" onClick={handleCloseModal}>
                    <div className="profile-pic-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Change Profile Picture</h2>
                        </div>
                        <div className="modal-body">
                            <div className="preview-container">
                                {previewUrl ? (
                                    <img src={previewUrl} alt="Preview" />
                                ) : (
                                    <div className="placeholder-icon">
                                        <svg aria-label="Icon to represent media such as images or videos" color="currentColor" fill="currentColor" height="77" role="img" viewBox="0 0 97.6 77.3" width="96">
                                            <path d="M16.3 24h.3c.3 0 .6.1.9.1.5 0 .9.1 1.2.4.3.3.5.6.5.9v.4c0 .3-.1.6-.4.9l-.1.1c-.3.3-.6.5-1.2.8l-.2.1c-.3.1-.6.1-.8.1h-.3c-.3 0-.6-.1-.8-.1-.5 0-.9-.1-1.2-.4-.3-.3-.5-.6-.5-.9v-.4c0-.3.1-.6.4-.9.3-.3.6-.5 1.2-.8.3-.1.6-.1.9-.1zm75 21.2v20.2c0 3-2.5 5.5-5.5 5.5H11.3c-3 0-5.5-2.5-5.5-5.5V20.4c0-3 2.5-5.5 5.5-5.5h45.7c.3 0 .6.1.9.3l27.1 18.2c.5.3.8.8.8 1.3V45.2z" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <path d="M34 50l12-12 11 11 15-15 15 15" fill="none" stroke="currentColor" strokeWidth="2" />
                                            <path d="M65 30l15 10-15 10V30z" fill="currentColor" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className="upload-options">
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    accept="image/*"
                                    onChange={handleFileChange}
                                />
                                <button className="file-input-label" onClick={() => fileInputRef.current.click()}>
                                    {previewUrl ? 'Choose Different Photo' : 'Select From Computer'}
                                </button>
                                {previewUrl && (
                                    <button className="upload-btn" onClick={handleUpload}>
                                        Upload
                                    </button>
                                )}
                                <button className="cancel-btn" onClick={handleCloseModal}>
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
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