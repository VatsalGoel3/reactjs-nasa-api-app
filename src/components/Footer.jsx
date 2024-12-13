import React from 'react'

export default function Footer(props) {
    const {showModal, handleToggleModal} = props

    return (
        <footer>
            <div className='bgGradient'></div>
            <div>
                <h2>SpaceX vision for Mars</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={handleToggleModal}>
                <i class="fa-solid fa-circle-info"></i>
            </button>
        </footer>
      )
}
