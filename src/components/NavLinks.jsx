import React from "react";
import { dataAlbumNav, styleIcon, dataUserNav } from '../constants/appConstant'
import { NavLink } from "react-router-dom";

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

export default NavLinks
