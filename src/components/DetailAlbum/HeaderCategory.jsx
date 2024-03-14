import React from 'react';

const HeaderCategory = ({ dataAlbum }) => {

    // Vérifie si `genre` est défini et a des éléments
    const genreList = dataAlbum?.genre && dataAlbum.genre.length > 0
        ? dataAlbum.genre.map((g) => g.label).join(', ') 
        : 'Aucun genre';

    // On calcule le texte pour le nombre de genres
    const genreCountText = dataAlbum?.genre && dataAlbum.genre.length > 1
        ? `${dataAlbum.genre.length} genres`
        : dataAlbum?.genre && dataAlbum.genre.length === 1
        ? '1 genre'
        : 'Aucun genre';

    return (
        <div className='flex items-center'> 
            <p className='text-white'>{genreCountText} - {genreList}</p>
        </div>
    );
};

export default HeaderCategory;
