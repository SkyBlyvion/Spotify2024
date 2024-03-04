import React, { useState } from 'react'
import { dataAlbumNav, imgLogo, styleIcon, dataUserNav } from '../constants/appConstant'
import { NavLink } from 'react-router-dom'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'

// pas de mécanique, directement mettre les parentheses, fait un return direct
const NavLinks = ({handleClick}) => (
    <>
    <div className="mt-10">
        {/* on va mapper sur dataAlbumNav */}
        {dataAlbumNav.map((item)=>(
            <NavLink
            key={item.title}
            to={item.path}
            end
            className="flex flex-row p-3 items-center justify-start font-medium text-sm text-white hover:bg-green_06"
            onClick={()=> handleClick && handleClick()}
            >
                <item.icon style={styleIcon} className='mr-2'/>
                {item.title}
            </NavLink>
        ))}
    </div>
    <div className="mt-5">
        {/* on va mapper sur dataUserNav */}
        {dataUserNav.map((item)=>(
            <NavLink
            key={item.title}
            to={item.path}
            end
            className="flex flex-row p-3 items-center justify-start font-medium text-sm text-white hover:bg-green_06"
            onClick={()=> handleClick && handleClick()}
            >
                <item.icon style={styleIcon} className='mr-2'/>
                {item.title}
            </NavLink>
        ))}
    </div>
    </>
)

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