import { APIATLAS } from "./utilsPostgres";
import { parseCookies } from 'nookies';

export const newRegister = (user) => APIATLAS.post('/register', user)

export const fetchLogin = (user) => APIATLAS.post('/login', user)

export const fetchAuthorizationAtlas = () => APIATLAS.get('/authorization')

export const fetchRegisterUpdate = (first_name: any) => {
  const { 'atlas.id': id } = parseCookies();
  return APIATLAS.put(`/register/${id}`, first_name);
}