import { createContext, useEffect, useState } from 'react'
import { fetchLogin, fetchAuthorizationAtlas } from '../services/FetchAtlas'
import { APIATLAS } from '../services/FetchAtlas/utilsAtlas';

type User = {
  name: string;
  email: string;
  idStore: string;
  _id: string;
}

type SignInData = {
  email: string,
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: User;
  signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const token = localStorage.getItem('atlas.token');
    if (token) {
      fetchAuthorizationAtlas().then(response => {
        console.log('response :', response);
        setUser(response.data);
      })
    }
  }, [])

  async function signIn({ email, password }: SignInData) {
    const { data } = await fetchLogin({
      email,
      password
    })
    localStorage.setItem('atlas.token', data.token)
    localStorage.setItem('atlas.idStore', data.idStore)
    localStorage.setItem('atlas.name', data.name)
    localStorage.setItem('atals._id', data._id)

    setUser(data);

    APIATLAS.defaults.headers['Authorization'] = `${data.token}`;
  }

  return (
    <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}
