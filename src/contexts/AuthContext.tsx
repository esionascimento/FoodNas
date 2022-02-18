import React, { createContext, /* useEffect, */ useState } from 'react'
import { HeadersDefaults } from 'axios'
import { fetchLogin/* , fetchAuthorizationAtlas */ } from '../services/FetchAtlas'
import { APIATLAS } from '../services/FetchAtlas/utilsPostgres'
import { setCookie/* , parseCookies */ } from 'nookies'

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

interface CommonHeaderProperties extends HeadersDefaults {
  Authorization: string;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  /* useEffect(() => {
    const token = parseCookies(context)
    const token = localStorage.getItem('atlas.token');
    if (token) {
      fetchAuthorizationAtlas().then(response => {
        setUser(response.data);
      })
    }
  }, []) */

  async function signIn({ email, password }: SignInData) {
    const { data } = await fetchLogin({
      email,
      password
    })
    setCookie(null, 'atlas.token', data.token, { maxAge: 86400 * 7, path: '/' })
    setCookie(null, 'atlas.id_store', data.id_store, { maxAge: 86400 * 7, path: '/' })
    setCookie(null, 'atlas.first_name', data.first_name, { maxAge: 86400 * 7, path: '/' })
    setCookie(null, 'atlas.id', data.id, { maxAge: 86400 * 7, path: '/' })

    setCookie(null, 'food.isLoja', 'Abrir Loja', { maxAge: 86400 * 7, path: '/' })

    setUser(data)

    APIATLAS.defaults.headers = {
      Authorization: `${data.token}`
    } as CommonHeaderProperties
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
