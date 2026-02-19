import { useState } from 'react'
import '../Styles/registerForm.scss'
import { Link } from 'react-router-dom'
import { Bounce, toast } from 'react-toastify'
import axios from 'axios'
import RedirectPopup from '../../../components/RedirectPopup'

const Register = () => {
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPopup, setShowPopup] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const successMessage = (content) => {
        toast.success(content, {
            position: "top-right",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            transition: Bounce,
        })
    }

    const errorMessage = (content) => {
        toast.error(content, {
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

    const submitHandler = async (e) => {
        e.preventDefault()
        if (userName.trim() === '' || email.trim() === '' || password.trim() === '') {
            errorMessage('Blank fields are not allowed')
            return
        }
        if (password.length < 6) {
            errorMessage('Password must be at least 6 characters long')
            return
        }

        try {
            const response = await axios.post('http://localhost:3200/api/v1/auth/register', {
                username: userName,
                email: email,
                password: password
            }, {
                withCredentials: true
            })
            successMessage(response.data.message)

            const timer = setTimeout(() => {
                setShowPopup(true)
            }, 1400);

            return () => clearTimeout(timer);

        } catch (error) {
            errorMessage(error.response.data.message)
        }
        setUserName('')
        setEmail('')
        setPassword('')
    }

    return (
        <main className='register-container'>
            {showPopup && <RedirectPopup page='register' />}
            <section className='bg'></section>
            <section className='form-container'>
                <div className="form-wrapper">
                    <h2><i className="ri-user-3-line"></i> Create Account</h2>
                    <form onSubmit={(e) => submitHandler(e)}>
                        <input
                            onInput={(e) => setUserName(e.target.value)}
                            type="text"
                            name="username"
                            id="username"
                            value={userName}
                            placeholder='Enter your username'
                            required
                            autoComplete='off' />

                        <input
                            onInput={(e) => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            placeholder='Enter your email'
                            required
                            autoComplete='off' />


                        <div className='password-wrapper'>
                            <input
                                onInput={(e) => setPassword(e.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                id="password"
                                value={password}
                                placeholder='Enter your password'
                                required
                                autoComplete='off' />
                            <p onClick={() => setShowPassword(!showPassword)}>
                                <i className={showPassword ? "ri-eye-close-line" : "ri-eye-line"}></i>
                            </p>
                        </div>

                        <button type='submit'>Register</button>
                    </form>
                    <div className='divider'>
                        <div className="line"></div>
                        <p>OR</p>
                        <div className="line"></div>
                    </div>
                    <p>Already have an account?<Link to='/login'>Login</Link></p>
                </div>
            </section>
        </main>
    )
}

export default Register