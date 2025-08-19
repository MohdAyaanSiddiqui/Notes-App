import React from "react";
import './Header.css'

function Header({user,handleLogout}){
    if(user){
        return(
            <header className="head">
                <div className="header-content">
                    <div className="header-left">
                        <h1>Notes App</h1>
                        <p>Your Smart Note-Taking Assistant</p>
                    </div>
                    {user &&(
                    <div className="header-right">
                        <span className="user-email">{user.email}</span>
                        <button className="logout-btn" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                    )}
                </div>
            </header>
        )
    }
    
    return(
        <header className="head">
            <h1>Notes App</h1>
            <p>Your Smart Note-Taking Assistant</p>
        </header>
    )
}
export default Header