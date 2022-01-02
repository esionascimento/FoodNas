import { APIPOST } from "./utilsFood";

export const fechtOrderEventPolling = () => APIPOST.get('/merchant/order/event:polling');

export const fechtOrderEventAcnowledgment = (data: any) => APIPOST.post('/merchant/order/event/acknowledgment', data);

export const fechtOrderDetails = () => APIPOST.get('/details/order-details');
