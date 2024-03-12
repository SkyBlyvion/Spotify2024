import React, { useEffect, useState } from 'react'
import { albumUrl, artistUrl } from '../../constants/apiConstant'
import PageLoader from '../loader/PageLoader'

const HeaderInfo = ({dataAlbum}) => {

    // on récupére la photo d'artiste si elle existe sinon photo album
    const imgPath = dataAlbum?.artist?.imagePath 
    ? `${artistUrl}/${dataAlbum?.artist?.imagePath}` 
    : `${albumUrl}/${dataAlbum?.imagePath}`

    // formater la date, recupere que l'année
    const releaseDate = new Date(dataAlbum?.releaseDate).getFullYear() ?? 'Date Inconnue'
    
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(false);
    }, [])
    // on definit le nombre de titres par albums
    // si il y a plusieurs titres on affiche le nombre 
    const nbTitle = dataAlbum.songs ? dataAlbum?.songs.length > 1 
    ? dataAlbum?.songs.length + ' titres'
    : dataAlbum?.songs.length + ' titre'
    : 'Aucun titre'

    // petit element graphique pour faire un point de separation
    const Dot = () => (
        <p>&#8226;</p>
    )

    // traitement pour la durée de l'album
    const durationAlbum = () => {

        // on va calculer le nombre de secondes pour tous les titres
        const totalSeconds = dataAlbum?.songs && dataAlbum?.songs.map(function(num){
            return parseInt(num.duration)
        }).reduce((a,b)=>{
            return a + b
        })

        // on formate les heures, minute secondes 
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const secondes = totalSeconds % 60;

        // on va retourner une string sous la forme 'HH:MM:SS'
        return hours > 0 
        ? `${hours} h ${minutes} min ${secondes} s` 
        : `${minutes} min ${secondes} s`

    }


  return (
    isLoading ? <PageLoader /> :
    <div className='flex items-center'>
        <img src={imgPath} alt={dataAlbum?.artist?.name ?? 'photoArtiste'} className='w-10 h-10 rounded-full'/>
        <p className='font-bold text-base p-1'>{dataAlbum?.artist?.name ?? 'artiste inconnu'}</p>
        <Dot/>
        <p className='font-bold text-base p-1'>{releaseDate}</p>
        <Dot/>
        <p className='font-bold text-base p-1'>{nbTitle}</p>
        <Dot/>
        <p className='font-bold text-base p-1'>{dataAlbum?.songs?.length > 0 ? durationAlbum() : 'Duree inconnue'}</p>
 
    </div>

  )
}

export default HeaderInfo