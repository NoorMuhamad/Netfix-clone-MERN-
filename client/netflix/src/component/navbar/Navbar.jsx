import './Navbar.css'
import {useState} from 'react'
import { Search, Notifications, ArrowDropDown } from '@material-ui/icons'

const Navbar = () => {
    const [isScrolled,setIsScrolled]= useState(false);
    window.onscroll = ()=>{
        setIsScrolled(window.pageYOffset === 0 ? false : true) 
        return ()=> (window.onscroll = null);
    }
   
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My list</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications className="icon" />
                    <img src="https://i.pinimg.com/originals/03/c8/10/03c8107c29fcce267d3590e11ac97a9a.jpg" alt="" />
                    <div className="profile">
                    <ArrowDropDown className="icon" />
                    <div className="options">
                        <span>Settings</span>
                        <span>Logout</span>
                    </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Navbar
