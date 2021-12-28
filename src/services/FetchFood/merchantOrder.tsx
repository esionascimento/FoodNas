import { APIPOST } from "./utilsFood";

export const fechtOrderEventPolling = () => APIPOST.get('/merchant/order/event:polling');
