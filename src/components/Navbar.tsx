import menu from "../assets/images/brown-menu.svg";
import logo from "../assets/icons/logo.jpg";
import { useState } from "react";
import {myProp, toggleProp, Props} from "../constants/interface";

export const Navbar = ({toggle, setToggle}: toggleProp) => {
    const [isHidden, setIsHidden] = useState<boolean>(false);
    return (
        <div className={styles.navbar}>
            <NavBar 
                toggle={toggle} 
                setToggle={setToggle} 
                isHidden={isHidden} 
                setIsHidden={setIsHidden} 
            />
            <NavBarMenu 
                toggle={toggle} 
                isHidden={isHidden} 
                setIsHidden={setIsHidden} 
            />
        </div>
    )
}



const NavBar = ({toggle, setToggle, isHidden, setIsHidden}: myProp) => {
    return (
        <div className={styles.nav}>
            <img 
            onClick={() => {window.scrollTo(0, 0)}}
            src={logo} 
            className={styles.logo} 
            alt="logo" 
        />
            <div className={styles.navEnd}>
                <button 
                    onClick={() => { setToggle(!toggle) }}
                    className={styles.lang}
                >
                    { !toggle? 'EN' : 'ع' }
                </button>
                <div>
                    <img
                        onClick={() => { setIsHidden(!isHidden) }} 
                        src={menu} 
                        className={styles.menuIcon} 
                        alt="menu" 
                    />
                </div>
            </div>
        </div>
    )
}

const NavBarMenu = ({isHidden, setIsHidden, toggle}: Props) => {
    return (
        <>
            {isHidden && 
                <div className={styles.menu}>
                    <a className={`${styles.link} cursor-pointer`} onClick={() => {window.scrollTo(0, 0); setIsHidden(!isHidden)}}>
                        {!toggle? 'الرئيسية' : 'Home'}
                    </a>
                    <a onClick={() => {setIsHidden(!isHidden)}} className={styles.link} href="#about">
                        {!toggle? 'من نحن' : 'About Us'}
                    </a>
                    <a onClick={() => {setIsHidden(!isHidden)}} className={styles.link} href="#services">
                        {!toggle? 'خدماتنا' : 'Services'}
                    </a>
                    <a onClick={() => {setIsHidden(!isHidden)}} className={styles.link} href="#contact">
                        {!toggle? 'تواصل معنا' : 'Contact Us'}
                    </a>
                </div>  
            }
        </>

    )
}

const styles = {
    navbar: 'gridCenter bg-white z-20 fixed top-0 w-full px-8',
    nav: 'flex justify-between items-center w-full md:px-4 md:py-4 lg:px-8',
    logo: 'cursor-pointer w-18 h-16',
    navEnd: 'flex justify-between items-center gap-3',
    dropDown: 'gridCenter',
    menu: ' md:flex gridCenter w-full text-center lg:justify-center md:gap-8 pb-4 lg:absolute top-8',
    link: 'md:border-b-2 md:border-b-[#6c0022] font-bold border w-full lg:w-fit py-3 md:px-4 xs:text-sm',
    menuIcon: 'h-12 cursor-pointer',
    lang: 'text-2xl font-bold cursor-pointer'
}