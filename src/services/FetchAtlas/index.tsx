import { APIATLAS } from "./utilsAtlas"

export const newRegister = (user) => APIATLAS.post('/register', user)

export const fetchLogin = (user) => APIATLAS.post('/login', user)

export const fetchAuthorizationAtlas = () => APIATLAS.get('/authorization')
