import React, { useState } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup 
} from 'firebase/auth';
import { auth } from './firebase';
import SignIn from './SignIn';
import SignUp from './SignUp';

function Auth({ onAuthenticate }) {
  const [isSignIn, setIsSignIn] = useState(true);
  const [error, setError] = useState(null);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('Successfully signed in with Google:', user);
      onAuthenticate(user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
      setError(error.message);
    }
  };

  const handleSignIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Successfully signed in:', user);
      onAuthenticate(user);
    } catch (error) {
      console.error('Error signing in:', error);
      setError(error.message);
    }
  };

  const handleSignUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Successfully signed up:', user);
      onAuthenticate(user);
    } catch (error) {
      console.error('Error signing up:', error);
      setError(error.message);
    }
  };

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn);
    setError(null);
  };

  return (
    <div>
      {error && <div className="error-message">{error}</div>}
      {isSignIn ? (
        <SignIn 
          onToggleForm={handleToggleForm} 
          onGoogleSignIn={handleGoogleSignIn} 
          onSubmit={handleSignIn}
        />
      ) : (
        <SignUp 
          onToggleForm={handleToggleForm} 
          onGoogleSignIn={handleGoogleSignIn} 
          onSubmit={handleSignUp}
        />
      )}
    </div>
  );
}

export default Auth; 