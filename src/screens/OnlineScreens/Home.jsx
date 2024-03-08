import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAlbums } from '../../redux/album/albumSlice'
import { selectAlbumsData } from '../../redux/album/albumSelector'
import PageLoader from '../../components/loader/PageLoader'
import AlbumCard from '../../components/AlbumCard'

const Home = () => {
  // on récupère le hook useDispatch de react-redux
  const dispatch = useDispatch()

  //quand je monte home je veux recuperer la liste des albums

  useEffect(() => {
    dispatch(fetchAlbums()) // permet de mettre a jour les states albums et loading de albumSlice
  }, [dispatch])

  // on recupére notre selector pour avoir accés aux données
  const { albums, loading } = useSelector(selectAlbumsData)

  // on peut specifier le tableau qui nous interesse
  const dataAlbum = albums['hydra:member']
  // console.log('data albums', dataAlbum);
  // console.log('data albums', dataAlbum);

  return (
    loading ? <PageLoader/>:
    <div className='flex flex-col p-4'>
      <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>
        Tous les albums
      </h2>
      <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
        {/* on va mapper sur dataAlbum */}
        {dataAlbum && dataAlbum.map((data, index)=>{

          return(
            <AlbumCard
            // on passe key en parametre pour que chaque element soit unique
              key={index}
              // on passe data comme props de l'album
              data={data}

            />
          )
        })}

        {/* {dataAlbum.map((item)=>(
          <div key={item.id} className='w-[200px] h-[200px] p-2 bg-white/5 backdrop-blur-sm rounded-lg hover:bg-white/10'>
            <img src={albumUrl} alt="album" className='w-full h-full object-cover rounded-lg' />
          </div>
        ))} */}
      </div>
    </div>
  )
}

export default Home