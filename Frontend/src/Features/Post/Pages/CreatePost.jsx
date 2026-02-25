import { useState, useRef } from 'react';
import '../Styles/createPost.scss';

const CreatePost = ({ user, createPostHandler, setIsCreatePostOpen }) => {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [caption, setCaption] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCreatePost = async () => {
    await createPostHandler(image, caption)
    setIsCreatePostOpen(false);
  };

  const handleBack = () => {
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="create-post-overlay" onClick={() => setIsCreatePostOpen(false)}>
      <button className="close-btn" onClick={() => setIsCreatePostOpen(false)}>
        <svg aria-label="Close" color="currentColor" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18">
          <polyline fill="none" points="20.643 3.357 12 12 3.357 20.643" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline>
          <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.643" x2="3.357" y1="20.643" y2="3.357"></line>
        </svg>
      </button>
      <div className="create-post-modal" onClick={(e) => e.stopPropagation()}>
        <div className={`modal-content ${preview ? 'has-preview' : ''}`}>
          <div className="upload-section">
            {preview && (
              <button className="back-btn" onClick={handleBack}>
                <svg aria-label="Back" color="currentColor" fill="currentColor" height="24" role="img" viewBox="0 0 24 24" width="24">
                  <line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="2.909" x2="22.001" y1="12.004" y2="12.004"></line>
                  <polyline fill="none" points="9.276 4.726 2.001 12.004 9.276 19.274" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polyline>
                </svg>
              </button>
            )}
            {!preview ? (
              <div className="file-input-container" onClick={() => fileInputRef.current.click()}>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <div className="placeholder">
                  <svg aria-label="Icon to represent media such as images or videos" color="currentColor" fill="currentColor" height="77" role="img" viewBox="0 0 97.6 77.3" width="96">
                    <path d="M16.3 24h.3c.3 0 .6.1.9.1.5 0 .9.1 1.2.4.3.3.5.6.5.9v.4c0 .3-.1.6-.4.9l-.1.1c-.3.3-.6.5-1.2.8l-.2.1c-.3.1-.6.1-.8.1h-.3c-.3 0-.6-.1-.8-.1-.5 0-.9-.1-1.2-.4-.3-.3-.5-.6-.5-.9v-.4c0-.3.1-.6.4-.9.3-.3.6-.5 1.2-.8.3-.1.6-.1.9-.1zm75 21.2v20.2c0 3-2.5 5.5-5.5 5.5H11.3c-3 0-5.5-2.5-5.5-5.5V20.4c0-3 2.5-5.5 5.5-5.5h45.7c.3 0 .6.1.9.3l27.1 18.2c.5.3.8.8.8 1.3V45.2z" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M34 50l12-12 11 11 15-15 15 15" fill="none" stroke="currentColor" strokeWidth="2" />
                    <path d="M65 30l15 10-15 10V30z" fill="currentColor" />
                  </svg>
                  <span>Select from computer</span>
                </div>
              </div>
            ) : (
              <img src={preview} alt="Preview" className="image-preview" />
            )}
          </div>
          <div className="details-section">
            <div className="user-info">
              <div className="profile-img">
                <img src={user?.profileImg || "https://imgs.search.brave.com/gM0DGt0wClo49xa3sWIKsCDME15MErrjPVArXfZ815U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDkv/MzU0Lzg1Mi9zbWFs/bC9tYWxlLXBvcnRy/YWl0LXBlb3BsZS1w/cm9maWxlLXBlcmZl/Y3QtZm9yLXNvY2lh/bC1tZWRpYS1hbmQt/YnVzaW5lc3MtcHJl/c2VudGF0aW9ucy11/c2VyLWludGVyZmFj/ZS11eC1ncmFwaGlj/LWFuZC13ZWItZGVz/aWduLWFwcGxpY2F0/aW9ucy1hbmQtaW50/ZXJmYWNlcy1pbGx1/c3RyYXRpb24tdmVj/dG9yLmpwZw"} alt="User" />
              </div>
              <span className="username">{user?.username || 'sounarva_swag'}</span>
            </div>
            <div className="caption-container">
              <textarea
                placeholder="Write a caption..."
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                maxLength={2200}
              ></textarea>
              <div className="caption-footer">
                <button className="emoji-btn">
                  <svg aria-label="Emoji" color="currentColor" fill="currentColor" height="20" role="img" viewBox="0 0 24 24" width="20">
                    <path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-7.66 0a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm3.83 8a5.222 5.222 0 01-4.817-3.128 1.25 1.25 0 012.314-1.033 2.73 2.73 0 005.007 0 1.25 1.25 0 112.314 1.033A5.222 5.222 0 0112 18.997zm0-16.5a10 10 0 1010 10 10 10 0 00-10-10zm0 18a8 8 0 118-8 8 8 0 01-8 8z"></path>
                  </svg>
                </button>
                <span className="char-count">{caption.length}/2,200</span>
              </div>
            </div>
            <button className="create-btn" onClick={handleCreatePost} disabled={!image}>
              Create Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;