import React from 'react'
import { useSelector } from 'react-redux'
import { selectAlbumsData } from '../redux/album/albumSelector'
import AlbumCard from '../components/AlbumCard'
import ArtistCard from './ArtistCard'

// afficher les resultats de la recherche
const SearchView = () => {

    // on récupére les infos du slice album
    const {searchAlbum, searchArtist, searchTitle} = useSelector(selectAlbumsData);

    // on récupére le tableau de donénes de searchAlbum
    const dataAlbum = searchAlbum['hydra:member'];

    // on récupére le tableau de données de searchArtist
    const dataArtist = searchArtist['hydra:member'];

    // on recupere tableau de données de searchtitle
    const dataTitle = searchTitle['hydra:member'];

    // on récupére les infos du slice player afin d'alimeter le comopsant albumCard
    const {isPlaying, activeSong} = useSelector(state => state.player)

    // si j'ai datablum et que sa longeur est plus grand que zero, j'affiche les resultats sinon null
  return (
    <>
        {dataAlbum && dataAlbum.length > 0 && dataArtist && dataArtist.length > 0 && dataTitle && dataTitle.length > 0 && (<h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Aucun résultat trouvé</h2>)}
        {/* Partie Albums */}
        {dataAlbum && dataAlbum.length > 0 
            ? <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Résultat des albums</h2>
            : <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Aucun album trouvé</h2>
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
            : <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Aucun Artiste trouvé</h2>
        }
        <div className='flex flex-wrap'>
            {dataArtist && dataArtist.map((data, index)=>(
                <div className='p-3 l-3' key={`artist_${index}`}>
                    <ArtistCard dataArtist={data}/>
                </div>
            ))
            }
        </div>
        {/* Partie title */}
        {dataTitle && dataTitle.length > 0 
            ? <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Résultat des titres</h2>
            : <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Aucun titre trouvé</h2>
        }
        <div className='flex flex-wrap'>
            {dataTitle && dataTitle.map((data, index)=>(
                <div className='p-3 l-3' key={`title_${index}`}>
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
    </>
  )
}

export default SearchView