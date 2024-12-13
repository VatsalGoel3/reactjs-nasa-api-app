import React from 'react'

export default function Sidebar(props) {
    const {handleToggleModal} = props
    return (
        <div className='sidebar'>
            <div onClick={handleToggleModal} className='bgOverlay'></div>
            <div className='sidebarContents'>
                <h2>SpaceX vision for the mars</h2>
                <div>
                    <p>Description</p>
                    <p>about the imawdadawdawddawdawdaw dage</p>
                </div>
                <button onClick={handleToggleModal}>
                    <i className="fa-solid fa-right-long"></i>
                </button>
            </div>
        </div>
      ) 
}
