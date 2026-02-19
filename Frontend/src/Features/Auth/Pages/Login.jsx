import axios from 'axios'
import '../Styles/loginForm.scss'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Bounce, toast } from 'react-toastify'
import RedirectPopup from '../../../components/RedirectPopup'

const Login = () => {
  const [showPopup, setShowPopup] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const successMessage = (content) => {
    toast.success(content, {
      position: "top-left",
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
      position: "top-left",
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
    if (email.trim() === '' || password.trim() === '') {
      errorMessage('Blank fields are not allowed')
      return
    }

    try {
      const response = await axios.post('http://localhost:3200/api/v1/auth/login', {
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
    setEmail('')
    setPassword('')
  }

  return (
    <main className='login-container'>
      {showPopup && <RedirectPopup page='login' />}
      <section className='bg'></section>
      <section className='form-container'>
        <div className="form-wrapper">
          <h2><i className="ri-user-3-line"></i>User Login</h2>
          <form onSubmit={(e) => submitHandler(e)}>
            <input
              onInput={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder='Enter your email'
              required 
              autoComplete='off'
              />

            <input
              onInput={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder='Enter your password'
              required 
              autoComplete='off'/>

            <button type='submit'>Login</button>
          </form>
          <div className='divider'>
            <div className="line"></div>
            <p>OR</p>
            <div className="line"></div>
          </div>
          <p>Don't have an account?<Link to='/register'>Register</Link></p>
        </div>
      </section>
    </main>
  )
}

export default Login