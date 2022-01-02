import { APIPOST } from "./utilsFood"

export const fechtAuthenticationCode = (user) => APIPOST.post('/merchant/authentication/usercode', user);

export const fechtAuthenticationTokenCentralized = () => APIPOST.get('/merchant/authentication/token/centralized');
