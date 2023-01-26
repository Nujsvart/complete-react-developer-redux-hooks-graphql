import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

const SignIn = () => {
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
    </div>
  );
};

export default SignIn;
