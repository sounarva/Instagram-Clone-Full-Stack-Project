import React from 'react'
import './loading.scss'

const Loading = () => {
    return (
        <div className='loading-container'>
            <div className="loading-wrapper"></div>
            <p className='loading-text'>Loading...</p>
        </div>
    )
}

export default Loading