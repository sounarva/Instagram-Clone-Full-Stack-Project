import { useState } from 'react';
import { Bounce, toast } from 'react-toastify';

const PostCard = ({ post, user, postLikeHandler, postUnlikeHandler, deletePostHandler }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const deleteBtnHandler = async (postId) => {
        const response = await deletePostHandler(postId) || null
        setIsMenuOpen(false)
        if (response?.success) {
            toast.success("Post deleted successfully ✅", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else {
            toast.error("Failed to delete post", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }

    // if (error) {
    //     toast.error(error.message, {
    //         position: "top-left",
    //         autoClose: 2000,
    //         hideProgressBar: false,
    //         closeOnClick: false,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "dark",
    //         transition: Bounce,
    //     });
    // }

    return (
        <div className="post-card">
            {/* Header section */}
            <div className="post-header">
                <div className="user-info">
                    <img
                        src={user.profilePic}
                        alt="Profile"
                        className="profile-img"
                    />
                    <span className="username">{user.username}</span>
                    <span className="time-ago">• 12h</span>
                </div>
                <div className="menu-icon" onClick={toggleMenu}>
                    <svg aria-label="More options" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <circle cx="12" cy="12" r="1.5"></circle>
                        <circle cx="6" cy="12" r="1.5"></circle>
                        <circle cx="18" cy="12" r="1.5"></circle>
                    </svg>
                </div>

                {/* Post Options Menu Dialog */}
                {isMenuOpen && (
                    <>
                        <div className="post-menu-overlay" onClick={toggleMenu}></div>
                        <div className="post-menu-dialog">
                            <button className="delete-btn" onClick={() => deleteBtnHandler(post._id)}>
                                Delete
                            </button>
                            <button className="cancel-btn" onClick={() => setIsMenuOpen(false)}>
                                Cancel
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Post Image section */}
            <div className="post-image">
                <img
                    src={post.image.filePath}
                    alt="Post Content"
                />
                <div className="tag-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path></svg>
                </div>
            </div>

            {/* Action buttons section */}
            <div className="post-actions">
                <div className="left-actions">
                    <svg
                        onClick={() => post.isLiked ? postUnlikeHandler(post._id) : postLikeHandler(post._id)}
                        className={post.isLiked ? "liked" : ""} aria-label="Like" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.194 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.32.441.526.91.617 1.387.091-.477.297-.946.617-1.387a4.21 4.21 0 013.675-1.941z"></path>
                    </svg>
                    <svg aria-label="Comment" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path>
                    </svg>
                    <svg aria-label="Share" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line>
                        <polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon>
                    </svg>
                </div>
                <div className="right-actions">
                    <svg aria-label="Save" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                        <polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon>
                    </svg>
                </div>
            </div>

            {/* Likes section */}
            <div className="post-likes">
                <span>{post.likeCount > 0 ? <strong>{post.likeCount} likes</strong> : <small>Be the first to like</small>}</span>
            </div>

            {/* Caption section */}
            <div className="post-caption">
                <span className="username">{user.username}</span>
                <span className="caption-text">
                    {post.caption}
                </span>
            </div>
        </div>
    );
};

export default PostCard;
