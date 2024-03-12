import React from 'react'
import { styleIcon } from '../../constants/appConstant';
import parse from 'html-react-parser';
import { RiArticleLine } from 'react-icons/ri';
import { FaCompactDisc } from 'react-icons/fa';
import { BsCalendar2Week } from 'react-icons/bs';
import {GiMicrophone } from 'react-icons/gi';

const InfoCollapse = ({dataAlbum}) => {

    // on déclare les constantes
    const date = new Date(dataAlbum?.releaseDate);
    const option = {day: 'numeric', month: 'long', year: 'numeric'};
    const dateFormat = date.toLocaleDateString('fr-FR', option);
    // console.log(dateFormat);

  return (
    <>
        <h2 className='text-xl my-5'>Informations</h2>
        <div className='w-full flex justify-start items-start bg-gradient-to-b from-transparent via-green_top to-transparent pt-5 pb-10'>
            {/* Container de gauche */}
            <div className='flex items-start justify-start w-[60%]'>
                <div className='flex-col' style={{maxWidth: '80%'}}>
                    <div className='p-1 m-1 flex'>
                        <RiArticleLine className='me-1 ' style={styleIcon}/>
                    </div>
                    <div className='p-1 m-1 pb-5'>
                        {dataAlbum?.artist?.biography
                            ? parse(dataAlbum?.artist?.biography)
                            : 'Aucune biographie disponible'
                        }
                    </div>
                </div>
            </div>
            {/* container de droite */}
            <div className='flex-col ' style={{minWidth: '20%'}}>
                <div className='flex items-center p-1 m-1 pb-5'>
                    <FaCompactDisc  className='me-1' style={styleIcon}/>
                    <span className='font-bold mr-1'>
                        Album: {dataAlbum?.title}
                    </span>
                </div>
            </div>
            {/* artiste*/}
            <div className='flex-col ' style={{minWidth: '20%'}}>
                <div className='flex items-center p-1 m-1 pb-5'>
                    <GiMicrophone  className='me-1' style={styleIcon}/>
                    <span className='font-bold mr-1'>
                        Artiste: {dataAlbum?.artist?.name}
                    </span>
                </div>
            </div>
            {/* date de sortie */}
            <div className='flex-col ' style={{minWidth: '20%'}}>
                <div className='flex items-center p-1 m-1 pb-5'>
                    <BsCalendar2Week  className='me-1' style={styleIcon}/>
                    <span className='font-bold mr-1'>
                        Sorti le: {dateFormat}
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default InfoCollapse