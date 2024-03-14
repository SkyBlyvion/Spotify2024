import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { fetchSearch } from '../redux/album/albumSlice';

// rechercher un album par words
const SearchBar = () => {

    // on déclare un state pour le champ de recherche
    const [searchWord, setSearchWord] = useState('');

    // on va avoir besoin d'apeller un hook pour apeller les méthodes du slice
    // onr ecupére le hook dispatch
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(searchWord));
    }

  return (
    <form 
        onSubmit={handleSubmit}
        autoComplete='off'
        className='text-gray-400 p-2 focus-within:text-gray-600'
    >
        <label className='sr-only'>Quel est votre recherche ?</label>
        <div className='flex justify-start items-center'>
            <BiSearch className='w-5 h-5 ml-4'/>
            <input 
                type="text"
                className='flex-1 bg-transparent border-none placeholder-gray-400 outline-none text-base text-white p-4'
                autoComplete='off'
                placeholder='Recherchez un album, un artiste, une chanson... ?'
                value={searchWord}
                onChange={(e) => setSearchWord(e.target.value)}
            />
            <button type='submit' className='text-white bg-green_top hover:bg-green px-4 py-2 rounded-lg'>Rechercher</button>
        </div>
    </form>
  )
}

export default SearchBar