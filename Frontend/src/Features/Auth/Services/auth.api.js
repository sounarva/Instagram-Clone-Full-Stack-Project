import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000/api/v1/auth',
    withCredentials: true
})

export async function loginApi(email, password) {
    try {
        const response = await api.post('/login', {
            email,
            password
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export async function registerApi(username, email, password) {
    try {
        const response = await api.post('/register', {
            username,
            email,
            password
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export async function logoutApi() {
    try {
        const response = await api.post('/logout')
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export async function profilePicApi(imageFile) {
    try {
        const formData = new FormData()
        formData.append("profilePic", imageFile)
        const response = await api.patch("/profilepic", formData)
        console.log(response.data)
        return response.data
    } catch (error) {
        return error.response.data
    }
}

export async function getMeApi() {
    try {
        const response = await api.get('/get-me')
        return response.data
    } catch (error) {
        return error.response.data
    }
}