import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserFavorite } from '../../redux/user/userSlice';
import { selectUserData } from '../../redux/user/userSelector';
import { useAuthContext } from '../../contexts/AuthContext';
import PageLoader from '../../components/loader/PageLoader';
import AlbumCard from '../../components/AlbumCard';

const Library = () => {

  // on récupére notre hook
  const dispatch = useDispatch();

  // on récupére l'id de l'utilisateur depuis le authContext
  const {userId} = useAuthContext();

  // dans un usefeet je dispatch la requête et lui donne son id
  useEffect(() => {
    dispatch(fetchUserFavorite(userId));
  }, [])

  // on peut récupérer les favoris de l'utilisateur
  const {loading, userFavorite} = useSelector(selectUserData)

  // on récupére les infos du slice player
  const {isPlaying, activeSong} = useSelector(state => state.player)

  // console.log('liked',userFavorite)

  return (
    loading ? <PageLoader /> :
    userFavorite && userFavorite.length > 0 ?
    <>
      <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Mes Albums favoris</h2>
      <div className='flex flex-wrap'>
        {userFavorite.map((data, index)=>(
          <div className='p-3 l-3' key={`album_${index}`}>
            <AlbumCard 
              data={data} 
              songs={data?.songs} 
              index={0} 
              isPlaying={isPlaying} 
              activeSong={activeSong} 
            />
          </div>
        ))}
      </div>
    </>
    : <h2 className='font-bold text-3xl text-white text-left mt-10 mb-4'>Aucun favoris trouvé</h2>
  )
}

export default Library