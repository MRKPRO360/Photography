import React, { useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthContext = React.createContext();

export const useAuth = function () {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // signup
  const signup = async function (email, password, username, userpic) {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: username,
      photoURL: userpic,
    });
    const user = auth.currentUser;
    setCurrentUser({ ...user });
    return result;
  };

  // login
  const login = async function (email, password) {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = async function () {
    return await signInWithPopup(auth, googleProvider);
  };

  // logout
  const logout = async function () {
    return await signOut(auth);
  };

  const value = {
    signup,
    login,
    googleLogin,
    logout,
    currentUser,
    loading,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
