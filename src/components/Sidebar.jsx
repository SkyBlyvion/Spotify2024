import React, { useState } from 'react'
import { dataAlbumNav, dataUserNav, imgLogo, styleIcon } from '../constants/appConstant'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
import NavLinks from './NavLinks'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext'
import { FiLogOut } from 'react-icons/fi'


// React functional component that renders the sidebar menu. It uses the useState hook to manage the state of mobileMenu,
//which is used to control the visibility of the sidebar menu on smaller screens. The component renders two different navigation bars based on the screen size. 
// It also uses the NavLinks component to display the navigation links. Additionally, it includes icons for toggling the mobile menu.
const Sidebar = () => {
    const [mobileMenu, isMobileMenu] = useState(false)

    // on recupere l'id de l'utilisateur
    const {userId, signOut} = useAuthContext();
    // console.log('userId', userId)

    // on recupere le hook de navigation
    const navigate = useNavigate();

    // on crée une méthode de déconnexion
    const handleLogout=()=>{
        signOut();
        navigate('/');
    }

  return (
    <>
        {/* navbar pour la vue au dessus de 768px */}
        <div className='hidden md:flex flex-col w-[240px] py-10 px-4 bg-black'>
            <div>
                
            </div>
            <Link to = '/'>
                <img src={imgLogo} alt='logo Spotify' className='w-full h-14 object-contain'/>
            </Link>
                <NavLinks data={dataAlbumNav} marginTop={'mt-10'}/>
                <NavLinks data={dataUserNav} marginTop={'mt-5'} userId={userId}/>
                {/* ajout bouton deconnexion */}
                <div className='mt-5'>
                    <button onClick={()=>{
                        const confirmLogout = window.confirm('Voulez-vous vous deconnecter ?');
                        if(confirmLogout){
                            handleLogout();
                        }
                    }}
                    className='w-full flex p-3 items-center justify-start font-medium text-sm text-white hover:bg-green_06'
                    >
                        <FiLogOut className='w-6 h-6 mr-2'/>
                        Se deconnecter
                    </button>
                </div>
        </div>
        {/* gestion des icones pour ouvrir/fermer le menu en petti ecran */}
        <div className='absolute md:hidden block top-6 right-3'>
            {mobileMenu ? (
                <RiCloseLine style={styleIcon} className='text-white mr-2' onClick={() => isMobileMenu(false)}/>
            ) : (
                <HiOutlineMenu style={styleIcon} className='text-white mr-2' onClick={() => isMobileMenu(true)}/>
            )}
        </div>

        {/* navbar pour la vue en dessous de 768px */}
        {/* si le menu est ouvert on l'affiche sinon on le cache */}
        {/* left-0 pour le menu de droite et -left-full pour le menu de gauche */}
        <div className={`z-20 absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white_01 to-black backdrop-blur-lg p-6 md:hidden smooth-transition ${mobileMenu ? 'left-0' : '-left-full'}`}>
            <img src={imgLogo} alt='logo Spotify' className='w-full h-14 object-contain'/>
            <NavLinks data={dataAlbumNav} marginTop={'mt-10'} handleClick={() => isMobileMenu(false)}/>
            <NavLinks data={dataUserNav} marginTop={'mt-5'} handleClick={() => isMobileMenu(false)}/>

             {/* ajout bouton deconnexion */}
            <div className='mt-5'>
                    <button onClick={()=>{
                        const confirmLogout = window.confirm('Voulez-vous vous deconnecter ?');
                        if(confirmLogout){
                            handleLogout();
                        }
                    }}
                    className='w-full flex p-3 items-center justify-start font-medium text-sm text-white hover:bg-green_06'
                    >
                        <FiLogOut className='w-6 h-6 mr-2'/>
                        Se deconnecter
                    </button>
            </div>
        </div>
    </>
  )
}

export default Sidebar