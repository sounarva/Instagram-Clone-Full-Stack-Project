import { useNavigate } from "react-router-dom"
import useAuth from "../Hooks/useAuth"
import { Bounce, toast } from "react-toastify"

const LogoutBtn = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()
    const logOutHandler = async () => {
        const response = await logout()
        if (response.success) {
            successMessage(response.message)
            navigate('/login')
        } else {
            errorMessage(response.message)
        }
    }

    const successMessage = (content) => {
        toast.success(content, {
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
    }

    const errorMessage = (content) => {
        toast.error(content, {
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
    }

    return (
        <div className='logOutBtn'>
            <button onClick={logOutHandler}>
                <svg aria-label="Log out" color="currentColor" fill="currentColor" height="18" role="img" viewBox="0 0 24 24" width="18">
                    <path d="M10 2v2H5v16h5v2H3V2h7zm10.293 9L16 6.707l1.414-1.414L22.828 10.707a1 1 0 010 1.414l-5.414 5.414L16 16.121 20.293 12H9v-2h11.293z" fillRule="evenodd"></path>
                </svg>
                <span>Log Out</span>
            </button>
        </div>
    )
}

export default LogoutBtn