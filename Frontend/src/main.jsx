import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import AuthProvider from './Features/Auth/Contexts/auth.context.jsx'
import { PostContextProvider } from './Features/Post/contexts/PostCtx.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer />
    <AuthProvider>
      <PostContextProvider>
        <App />
      </PostContextProvider>
    </AuthProvider>
  </StrictMode>,
)
