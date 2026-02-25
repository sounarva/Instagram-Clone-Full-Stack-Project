import { createContext, useState } from "react";

export const PostContext = createContext()

export const PostContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [posts, setPosts] = useState([])
    const [feed, setFeed] = useState([])
    const [isCreatePostOpen, setIsCreatePostOpen] = useState(false)

    return (
        <PostContext.Provider value={{ loading, setLoading, error, setError, posts, setPosts, feed, setFeed, isCreatePostOpen, setIsCreatePostOpen }}>
            {children}
        </PostContext.Provider>
    )
}