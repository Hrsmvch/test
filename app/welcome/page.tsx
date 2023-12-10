'use client'

import { createUserDocumentFromAuth, signInWithGoogleRedirect, signInWithGooglePopup } from '@/utils/firebase.utils';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const WelcomePage = () => { 
  const router = useRouter();
  const [error, setError] = useState('');
 
  const handleLoginWithGoogle = async () => {
    try {
      const response = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(response?.user);
      
      console.log('Successful sign in!');
      setError('')
      router.push('/') 
    } catch (error: any) {
      console.log('Failed sign in!');
      setError('User does not exist. Sign in not allowed!');
    }
  };

 
  
  return (
    <div> 
      <form> 
        <button type='button' onClick={handleLoginWithGoogle}>Sign In With Google</button>
        {error && <div style={{ color: 'red' }}>{error}</div>}
      </form>
    </div>
  )
}

export default WelcomePage