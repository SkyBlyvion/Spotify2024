import React, { useState } from 'react'
import CustomInput from '../../components/CustomInput'
import ButtonLoader from '../../components/loader/ButtonLoader';
import { Link } from 'react-router-dom';

const Login = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const handleSubmit = () => {
    console.log({nickname, email, password});
  }

  return (
    <div className='flex flex-1 flex-col h-screen justify-start items-center bg-black'>
      <h2 className='text-white font-bold text-xl py-5'>Connexion</h2>
      <form onSubmit={handleSubmit} className='max-w-md mx-auto'>
        {/* input pour l'email */}
        <CustomInput state={email} label="Votre Email" type="email" callable={(event) => setEmail(event.target.value)}/>
        {/* input pour password */}
        <CustomInput state={password} label="Votre Password" type="password" callable={(event) => setPassword(event.target.value)}/>

        <p className='text-white'>Vous n'avez pas de compte ?<Link to='/register' className='text-white font-bold hover:text-green'> S'enregistrer</Link></p>
          <div className='flex items-center justify-center pt-5'>
           { isLoading ? <ButtonLoader/> : 
            <button type='submit' className='bg-green hover:bg-green_top text-white font-bold py-2 px-4 rounded'>
              S'enregistrer
            </button>}
          </div>
      </form>
    </div>
  )
}

export default Login