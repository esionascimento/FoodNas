import { APIPOST } from "./utilsFood"

export const fechtMerchantStatus = () => APIPOST.get('/merchant/merchant/status')
