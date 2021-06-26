import React from 'react'
import  './AppBar.css'
function AppBar() {
    let user=false;
    return (
        <div className='appbar'>
        <h2 className='logo'>GetTheJob</h2>
        {user ? <div className='profile-area'><p className='user-name'>Ajnash</p><img className='user-image' src="https://avatars.githubusercontent.com/u/62911231?s=400&u=20973a6c2148892db9bb0993ae930369fa856f07&v=4" alt="profile-img" /></div> :<button className='btn'>Login</button>}
        
        </div>
    )
}

export default AppBar
