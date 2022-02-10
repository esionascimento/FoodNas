import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fechtOrderDetails } from '../../services/FetchFood/merchantOrder';

import { ACDataOrderDetails } from '../../store/dashboard/dashboardAction';

import { ComponentPending } from './componentPending';
import { ComponentCanceled } from './componentCanceled';

export function ComponentBody() {
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
  const { selectPedido, selectOrderId } = useSelector((state: RootState) => state.storeDashboard);
  const { dataOrderAck } = useSelector((state: RootState) => state.storeDataOrder);
  
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
