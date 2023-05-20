import React, { useState } from 'react';
import app from '../firebase/firebase.config';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const SocialButton = () => {

    const [user, setUser] = useState({});
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const navigate=useNavigate()

  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
        navigate('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
    return (
        <div>
          <span className="mr-3">Sign In With</span>
      <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline btn-sm">G</button>
      <span>oogle</span>
          </div>
    );
};

export default SocialButton;