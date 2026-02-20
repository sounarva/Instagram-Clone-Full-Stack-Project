import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Features/Auth/Pages/Login";
import Register from "../Features/Auth/Pages/Register";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Welcome to InstaClone</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes