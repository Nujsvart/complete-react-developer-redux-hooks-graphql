import { useEffect } from "react";

import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

const SignIn = () => {
  useEffect(() => {
    const handleRedirect = async () => {
      const res = await getRedirectResult(auth);

      if (res) {
        const user = await createUserDocumentFromAuth(res.user);
      }
    };
    handleRedirect();
  }, []);

  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);

    const user = await createUserDocumentFromAuth(res.user);

    console.log(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in With Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in With Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
