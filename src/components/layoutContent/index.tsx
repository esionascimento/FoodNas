import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fechtOrderDetails } from '../../services/FetchFood/merchantOrder';

import { ACDataOrderDetails } from '../../store/dataOrder/dataOrderAction';

import { ComponentPending } from './componentPending';
import { ComponentCanceled } from './componentCanceled';

function ComponentBody() {
  interface RootState {
    storeDashboard: {
      selectPedido: string,
      selectOrderId: string
    },
    storeDataOrder: {
      dataOrderAck: {}
    }
  }
  
  const dispatch = useDispatch();
  const selectPedido = useSelector((state: RootState) => state.storeDashboard.selectPedido);
  const selectOrderId = useSelector((state: RootState) => state.storeDashboard.selectOrderId);
  const dataOrderAck = useSelector((state: RootState) => state.storeDataOrder.dataOrderAck);
  
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
          {ComponentCanceled(dataLog)}
        </>
      )
    } else if (selectPedido === 'pending') {
      return (
        <>
          {ComponentPending(dataLog, dataOrderAck)}
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

export default ComponentBody;
