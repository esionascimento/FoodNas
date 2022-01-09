import { createContext, /* useEffect, */ useState } from 'react'
import { fetchLogin/* , fetchAuthorizationAtlas */ } from '../services/FetchAtlas'
import { APIATLAS } from '../services/FetchAtlas/utilsAtlas';
import { setCookie/* , parseCookies */ } from 'nookies';

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
    });
    setCookie(null, 'atlas.token', data.token, {maxAge: 86400 * 7, path: '/'});
    setCookie(null, 'atlas.id_store', data.idStore, {maxAge: 86400 * 7, path: '/'});
    setCookie(null, 'atlas.name', data.name, {maxAge: 86400 * 7, path: '/'});
    setCookie(null, 'atlas.id', data._id, {maxAge: 86400 * 7, path: '/'});

    setUser(data);

    APIATLAS.defaults.headers['Authorization'] = `${data.token}`;
  }

  return (
    <AuthContext.Provider value={{user, isAuthenticated, signIn}}>
      {children}
    </AuthContext.Provider>
  )
}
