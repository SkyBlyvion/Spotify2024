import React from 'react'
import { useSelector } from 'react-redux'
import AlbumCard from '../AlbumCard';

//premiere chose a faire, je recupere et destructure les data
const ListAlbumArtist = ({dataArtist}) => {

    // console.log('data artiste',dataArtist)

    //faut commencer par recuperer le active songs and isplaying de notre sliceplayer
    // on recupére les données du slice Player
    // importer useSelector
    const {isPlaying, activeSong} = useSelector(state => state.player);

    //on recupére les données du tableau album
    const albums = dataArtist?.albums

    // on map pour afficher les albums et fonction annonyme et auto return
    // on recupére data et index
    // en mapp on est dans l'objet album
    //index 0 pour premiere musique 
  return (

    <>
        <div className='flex flex-wrap'>
            {albums && albums.map((data, index)=>(
                <div key={index} className='m-3'> 
                    <AlbumCard key={index} data={data} songs={data?.songs} isPlaying={isPlaying} activeSong={activeSong} index={0} artist={dataArtist?.name}/>
                </div>
            ))}
        </div>
    </>
    
  )
}

export default ListAlbumArtist