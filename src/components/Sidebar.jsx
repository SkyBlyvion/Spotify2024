import React, { useState } from 'react'
import { dataAlbumNav, imgLogo, styleIcon, dataUserNav } from '../constants/appConstant'
import { NavLink } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
// les fichiers sonts importés depuis un dossier
import NavLinks from './NavLinks'


// variable pour responsive, mobile menu true
const Sidebar = () => {
    const {mobileMenu, isMobileMenu} = useState(false)


  return (
    <>
        {/* navbar pour la vue au dessus de 768px */}
        <div className='hidden md:flex flex-col w-[240px] py-10 px-4 bg-black'>
            <img src={imgLogo} alt='logo Spotify' className='w-full h-14 object-contain'/>
                <NavLinks/>
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
            <img srx={imgLogo} alt='logo Spotify' className='w-full h-14 object-contain'/>
            <NavLinks handleClick={() => isMobileMenu(false)}/>
        </div>
    </>
  )
}

export default Sidebar