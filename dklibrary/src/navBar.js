import { Link } from 'react-router-dom';
import { useEffect,useRef } from 'react';
const NavBar = () => {
    // const menu=document.getElementById("menu");
    // const menuIcon=document.getElementById("menuIcon");
    const menuRef=useRef(null);
    const menuIconRef=useRef(null);
    const closeMenuRef=useRef(null);
    
    const handleMenu=()=>{
        if(menuRef.current && menuIconRef.current){
            menuRef.current.style.display="block";
            menuIconRef.current.style.display="none";
        }
    }
    const handleCloseMenu=()=>{
        if(menuRef.current && closeMenuRef.current){
            menuRef.current.style.display="none";
            menuIconRef.current.style.display="block";
        }
    }
useEffect(()=>{
    const menu=menuRef.current;
    const menuIcon=menuIconRef.current;
    const closeMenuIcon=closeMenuRef.current;
},[]);
return (
        <div class="bg-gray-200 p-3">
            <div className="navContainer" class="flex w-full md:w-[80%] m-auto justify-between pt-5">
            <div class="flex">
            {/* book icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-10 md:w-11 h-10 md:h-11 text-blue-700 -mt-1 mr-0 md:mr-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
            </svg>
            <h2 class="text-2xl ml-3 md:ml-0 text-red-900 font-semibold">DK Library:</h2>
            </div>
            {/* open menu icon */}
            <svg id="menuIcon" ref={menuIconRef} onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 text-blue-600 hover:text-red-600 visible md:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>
            {/* links section */}
            <div id='menu' ref={menuRef} class="hidden md:flex bg-gray-400 md:bg-gray-200 h-[250px] md:h-auto p-2 pt-3 md:pt-0 md:p-0 ml-2 md:ml-0 shadow-xl md:shadow-none rounded-md md:rounded-none w-52 md:w-auto">
            <Link id='link' to="/"> All Categories </Link><br/>
            <Link id='link' to="/">Premium Books</Link><br/>
            <Link id='link' to="/">Contacts</Link><br/>
            <Link id='link' to="/">Register</Link><br/><br/>
            <Link id='login' to="" class="ml-5 -mt-2">Login</Link><br/><br/>
            <svg id='closeMenu'ref={closeMenuRef} onClick={handleCloseMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 m-auto mt-5 block md:hidden">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            </div>
            </div>
        </div>
     );
};
 
export default NavBar;