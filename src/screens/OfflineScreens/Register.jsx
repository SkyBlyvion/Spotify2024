import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [ nickname, setNickname ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const handleSubmit = () => {}

  return (
    <div className='flex flex-1 flex-col h-screen justify-start items-center bg-black'>
      <h2 className='text-white font-bold text-xl py-5'>Enregistrez votre compte</h2>
      <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
        {/* input pour le nickname */}
        <div className='mb-3'>
          <label className='block text-white font-bold mb-2' htmlFor="nickname">Votre Pseudo</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline' 
          type="text" value={nickname} onChange={(event) => setNickname(event.target.value)}
          />
        </div>
        {/* input pour l'email */}
        <div className='mb-3'>
          <label className='block text-white font-bold mb-2' htmlFor="email">Votre Email</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline' 
          type="email" value={email} onChange={(event) => setEmail(event.target.value)}
          />
        </div>
         {/* input pour password */}
         <div className='mb-3'>
          <label className='block text-white font-bold mb-2' htmlFor="password">Votre Mot de Passe</label>
          <input className='shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline' 
          type="password" value={password} onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <p className='text-white'>Vous avez déja un compte ?<Link to='/' className='text-white font-bold hover:text-green'> Se connecter</Link></p>
          <div className='flex items-center justify-center pt-5'>
            <button type='submit' className='bg-green hover:bg-green_top text-white font-bold py-2 px-4 rounded'>
              S'enregistrer
            </button>
          </div>
      </form>
    </div>
  )
}

export default Register