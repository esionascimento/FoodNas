import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fechtOrderDetails } from '../../services/FetchFood/merchantOrder';

import { ACDataOrderDetails } from '../../store/dashboard/dashboardAction';

import { DivContact } from './styled';

export function ComponentBody() {
  interface RootState {
    storeDashboard: {
      selectPedido: string,
      selectOrderId: string
    }
  }
  
  const dispatch = useDispatch();
  const { selectPedido, selectOrderId } = useSelector((state: RootState) => state.storeDashboard);
  const [dataLog, setDataLog] = useState() as any;

  useEffect(() => {
    function detailsOrderId() {
      fechtOrderDetails(selectOrderId).then((data) => {
        dispatch(ACDataOrderDetails(data));
        setDataLog(data.data);
      })
    }
    detailsOrderId();
  }, [selectOrderId, dispatch])

  function items() {
    return dataLog.items.map((aux: any, index: any) => {
        return (
          <DivContact key={index}>
            <div>
              <p>{index + 1}</p>
            </div>
            <div>
              <p>{`nome: ${aux.name}`}</p>
              <p>{`quantidade: ${aux.quantity}`}</p>
              <p>{`valor unitario: ${aux.unitPrice !== 0 ? aux.unitPrice : aux.optionsPrice}`}</p>
              <p>{`Valor Total: ${aux.totalPrice}`}</p>
            </div>
          </DivContact>
        )
      })
  }
  function componentBody() {
    if (selectPedido === 'null') {
      return (
        <>
          <p>error</p>
        </>
      )
    } else if (selectPedido === 'canceled') {
      return (
        <>
          <h2>Pedido Cancelado</h2>
          <div>
            <h3>Contato</h3>
            <p>{`Nome: ${dataLog && dataLog.customer.name}`}</p>
            <p>{`Telefone: ${dataLog && dataLog.customer.phone.number}`}</p>
            <p>{`Localizador: ${dataLog && dataLog.customer.phone.localizer}`}</p>
            <h3>Endereço</h3>
            <p>{`rua: ${dataLog && dataLog.delivery.deliveryAddress.streetName}`}</p>
            <p>{`numero: ${dataLog && dataLog.delivery.deliveryAddress.streetNumber}`}</p>
            <h3>Pagamento</h3>
            <p>{`metodo pagamento: ${dataLog && dataLog.payments.methods[0].method}`}</p>
            <p>{`entrega: ${dataLog && dataLog.total.deliveryFee}`}</p>
            <p>{`total: ${dataLog && dataLog.total.orderAmount}`}</p>
            {dataLog && items()}
          </div>
        </>
      )
    } else if (selectPedido === 'pending') {
      return (
        <>
          {}
          <h2>Pedido Pendente</h2>
          <div>
            <h3>Contato</h3>
            <DivContact>
              <p>{`Telefone: ${dataLog && dataLog.customer.phone.number}`}</p>
              <p>{`Localizador: ${dataLog && dataLog.customer.phone.localizer}`}</p>
            </DivContact>
            <h3>Endereço</h3>
            <p>{`Rua: ${dataLog && dataLog.delivery.deliveryAddress.streetName}`}</p>
            <h3>Pedido(s)</h3>
            {dataLog ? items() : ''}
          </div>
        </>
      )
    }
  }

  return (
    <>
      {dataLog ? componentBody() : <p>...</p>}
    </>
  )
}
