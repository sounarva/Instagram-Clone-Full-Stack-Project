import { createContext, useState } from "react";
import { loginApi, registerApi } from "../Services/auth.api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)

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

    return (
        <AuthContext.Provider value={{ user, login, register, loading }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider
