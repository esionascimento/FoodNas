import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fechtOrderDetails } from '../../services/FetchFood/merchantOrder'

import { ACDataOrderDetails } from '../../store/dataOrder/dataOrderAction'

import { CompPending } from './compPending'
import { CompRender } from './compRender'

function ComponentBody() {
  interface RootState {
    storeDashboard: {
      selectPedido: string,
      selectOrderId: string
    },
    storeDataOrder: {
      dataOrderAck: object
    }
  }

  const dispatch = useDispatch()
  const selectPedido = useSelector((state: RootState) => state.storeDashboard.selectPedido)
  const selectOrderId = useSelector((state: RootState) => state.storeDashboard.selectOrderId)
  const dataOrderAck = useSelector((state: RootState) => state.storeDataOrder.dataOrderAck)

  const [dataLog, setDataLog] = useState()

  useEffect(() => {
    function detailsOrderId() {
      fechtOrderDetails(selectOrderId).then((data) => {
        dispatch(ACDataOrderDetails(data))
        setDataLog(data.data)
      })
    }
    detailsOrderId()
  }, [selectOrderId, dispatch])

  function colRight() {
    if (selectPedido === 'null') {
      return (
        <>
          <p>error</p>
        </>
      )
    } else if (selectPedido === 'pending') {
      return (
        <>
          {CompPending(dataLog, dataOrderAck, selectOrderId, dispatch)}
        </>
      )
    } else {
      return (
        <>
          {CompRender(dataLog, selectPedido, selectOrderId)}
        </>
      )
    }
  }

  return (
    <>
      {dataLog ? colRight() : <p>...</p>}
    </>
  )
}

export default ComponentBody
