import React from 'react'
import { useSelector } from 'react-redux'
import { selectAlbumsData } from '../redux/album/albumSelector'
import AlbumCard from '../components/AlbumCard'
import ArtistCard from './ArtistCard'

// afficher les resultats de la recherche
const SearchView = () => {

    // on récupére les infos du slice album
    const {searchAlbum, searchArtist} = useSelector(selectAlbumsData);

    // on récupére le tableau de donénes de searchAlbum
    const dataAlbum = searchAlbum['hydra:member'];

    // on récupére le tableau de données de searchArtist
    const dataArtist = searchArtist['hydra:member'];

    // on récupére les infos du slice player afin d'alimeter le comopsant albumCard
    const {isPlaying, activeSong} = useSelector(state => state.player)

    // console.log
    // console.log('dataAlbumsssssssss',dataAlbum);
    console.log('dataArtistsssssssss',dataArtist);

    // si j'ai datablum et que sa longeur est plus grand que zero, j'affiche les resultats sinon null
  return (
    <>
        {/* Partie Albums */}
        {dataAlbum && dataAlbum.length > 0 
            ? <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Résultat des albums</h2>
            : <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Aucun résultat</h2>
        }
        <div className='flex flex-wrap'>
            {dataAlbum && dataAlbum.map((data, index)=>(
                <div className='p-3 l-3' key={`album_${index}`}>
                    <AlbumCard 
                        data={data}
                        songs={data?.songs}
                        isPlaying={isPlaying}
                        activeSong={activeSong}
                        index={0}
                    />
                  
                </div>
            ))
            }

        </div>
        {/* Partie Artistes */}
        {dataArtist && dataArtist.length > 0 
            ? <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Résultat des artistes</h2>
            : <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Aucun Artiste</h2>
        }
        <div className='flex flex-wrap'>
            {dataArtist && dataArtist.map((data, index)=>(
                <div className='p-3 l-3' key={`artist_${index}`}>
                    <ArtistCard dataArtist={data}/>
                </div>
            ))
            }
            
        </div>


    </>
  )
}

export default SearchView