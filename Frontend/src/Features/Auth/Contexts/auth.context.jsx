import { createContext, useEffect, useState } from "react";
import { getMeApi, loginApi, logoutApi, registerApi } from "../Services/auth.api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const [isAuthReady, setIsAuthReady] = useState(false)

    useEffect(() => {
        const getMe = async () => {
            const response = await getMeApi()
            if (response.success) {
                setUser(response.user)
            }
            setIsAuthReady(true)
        }
        getMe()
    }, [])

    const login = async (email, password) => {
        try {
            setLoading(true)
            const response = await loginApi(email, password)
            setUser(response.user)
            return response
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    const register = async (username, email, password) => {
        try {
            setLoading(true)
            const response = await registerApi(username, email, password)
            setUser(response.user)
            return response
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    const logout = async () => {
        try {
            setLoading(true)
            const response = await logoutApi()
            setUser([])
            return response
        } catch (error) {
            return error
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, register, loading, isAuthReady, logout }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider
