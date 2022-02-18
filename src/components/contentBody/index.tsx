import React, { useCallback, useEffect, useState, useMemo, memo } from 'react'
import { Layout, Row, Col, Skeleton, Divider } from 'antd'
import { useSelector, useDispatch } from 'react-redux'

import InfiniteScroll from 'react-infinite-scroll-component'
import ColRight from '../colRight'

import { ACSelectPedido, ACSelectOrderId } from '../../store/dashboard/dashboardAction'
import { ACDataOrderConfirmed, ACDataOrderAck, ACDataOrderPending, ACDataOrderCanceled } from '../../store/dataOrder/dataOrderAction'

import { fechtOrderEventAcnowledgment } from '../../services/FetchFood/merchantOrder'

import 'antd/dist/antd.css'
import { DivBody, DivFooter } from '../../../styles/dashboardCss'
const { Footer } = Layout

function ContentBody() {
  interface RootState {
    storeDataOrder: {
      dataOrderPending: [],
      dataOrderConfirmed: [],
      dataOrderCanceled: []
    }
  }
  const dispatch = useDispatch()
  const { Content } = Layout
  const apiPending = useSelector((state: RootState) => state.storeDataOrder.dataOrderPending)
  const apiConfirmed = useSelector((state: RootState) => state.storeDataOrder.dataOrderConfirmed)
  const apiCanceled = useSelector((state: RootState) => state.storeDataOrder.dataOrderCanceled)

  const [dataPending, setDataPending] = useState([])
  const [dataConfirmado, setDataConfirmado] = useState([])
  const [dataCanceled, setDataCanceled] = useState([])
  const [dataDispatched, setDataDispatched] = useState([])
  const [dataConcluded, setDataConcluded] = useState([])
  const [aux, setAux] = useState()

  useMemo(() => {
    const storagePlaced = JSON.parse(localStorage.getItem('orderPLACED'))
    const storageConfirmed = JSON.parse(localStorage.getItem('orderCONFIRMED'))
    const storageCanceled = JSON.parse(localStorage.getItem('orderCANCELLED'))
    const storageDispatched = JSON.parse(localStorage.getItem('orderDISPATCHED'))
    const storageConcluded = JSON.parse(localStorage.getItem('orderCONCLUDED'))

    if (storagePlaced) {
      storagePlaced.data.forEach((data: { code: string }) => {
        setDataPending(prev => [...prev, data])
      })
    }
    if (storageConfirmed) {
      storageConfirmed.data.forEach((data: { code: string }) => {
        setDataConfirmado(prev => [...prev, data])
      })
    }
    if (storageCanceled) {
      storageCanceled.data.forEach((data: { code: string }) => {
        setDataCanceled(prev => [...prev, data])
      })
    }
    if (storageConcluded) {
      storageConcluded.data.forEach((data: { code: string }) => {
        setDataConcluded(prev => [...prev, data])
      })
    }
    if (storageDispatched) {
      storageDispatched.data.forEach((data: { code: string }) => {
        setDataDispatched(prev => [...prev, data])
      })
    }
  }, [])

  useEffect(() => {
    async function newResultPolling() {
      if (apiPending.length) {
        const auxDataPending = [...dataPending]
        const auxApiPending: Array<{ id: string }> = [...apiPending]

        for (let i = 0; i < auxApiPending.length; i++) {
          const id = auxApiPending[i].id
          const index = auxDataPending.map((item) => item.id).indexOf(id)
          if (index > -1) {
            auxDataPending.splice(index, 1)
          }
        }
        const aoba = [...auxApiPending, ...auxDataPending]
        setDataPending(aoba)
        dispatch(ACDataOrderPending([]))
        await fechtOrderEventAcnowledgment(apiPending)
      }
    }
    newResultPolling()
  }, [apiPending, dispatch])

  useEffect(() => {
    async function newResultConfirmed() {
      if (apiConfirmed.length) {
        console.log('apiConfirmed :', apiConfirmed)
        const auxDataConfirmed = [...dataConfirmado]

        apiConfirmed.forEach((data) => {
          auxDataConfirmed.push(data)
        })

        setDataConfirmado(auxDataConfirmed)
        dispatch(ACDataOrderConfirmed([]))
        await fechtOrderEventAcnowledgment(apiConfirmed)
      }
    }
    newResultConfirmed()
  }, [apiConfirmed, dispatch])

  useEffect(() => {
    async function newResultConfirmed() {
      if (apiCanceled.length) {
        const auxDataConfirmed = [...dataCanceled]

        apiCanceled.forEach((data) => {
          auxDataConfirmed.push(data)
        })

        setDataCanceled(auxDataConfirmed)
        dispatch(ACDataOrderCanceled([]))
        await fechtOrderEventAcnowledgment(apiCanceled)
      }
    }
    newResultConfirmed()
  }, [apiCanceled, dispatch])

  const loadMoreData = () => {
    setDataCanceled([])
  }

  const handlerOrderByStatus = useCallback((e, dados) => {
    setAux(e.target.name)
    dispatch(ACDataOrderAck(dados))
    dispatch(ACSelectPedido(e.target.id))
    dispatch(ACSelectOrderId(e.target.name))
  }, [dispatch])

  return (
    <>
      <Layout style={{ background: 'silver' }}>
        <Content>
          <Row wrap={false}>
            <Col flex="200px">
              <DivBody
                id={'scrollableDiv'}
                >
                <InfiniteScroll
                  dataLength={10}
                  next={loadMoreData}
                  hasMore={10 < 50}
                  loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                  endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                  scrollableTarget="scrollableDiv"
                  >
                    {dataPending.length
                      ? <div>
                        <h3>Pedidos pendentes</h3>
                          {dataPending.length &&
                            dataPending.map((dados, index) => (
                              <button
                                id="pending"
                                name={dados.orderId}
                                key={index}
                                onClick={(e) => handlerOrderByStatus(e, dados)}
                              >
                                {dados.id}
                              </button>
                            ))
                          }
                      </div>
                      : null
                    }
                    <div>
                      <h3>Pedidos Confirmados</h3>
                      {dataConfirmado.length
                        ? dataConfirmado.map((dados, index) => (
                          <button id="confirmed" name={dados.orderId} key={index}>{dados.id}</button>
                        ))
                        : <p>0 Pedidos Confirmados</p>
                      }
                    </div>
                    <div>
                      <h3>Pedidos Despachados</h3>
                      {dataDispatched.length
                        ? dataDispatched.map((dados, index) => (
                          <button id="dispatched" name={dados.orderId} key={index} onClick={(e) => handlerOrderByStatus(e, dados)}>{dados.id}</button>
                        ))
                        : <p>0 Pedidos Despachados</p>
                        }
                    </div>
                    <div>
                      <h3>Pedidos Concluidos</h3>
                      {dataConcluded.length
                        ? dataConcluded.map((dados, index) => (
                          <button id="concluded" name={dados.orderId} key={index} onClick={(e) => handlerOrderByStatus(e, dados)}>{dados.id}</button>
                        ))
                        : <p>0 Pedidos Concluídos</p>
                        }
                    </div>
                    <div>
                      <h3>Pedidos Cancelados</h3>
                      {dataCanceled.length
                        ? dataCanceled.map((dados, index) => (
                          <button id="canceled" name={dados.orderId} key={index} onClick={(e) => handlerOrderByStatus(e, dados)}>{dados.id}</button>
                        ))
                        : <p>0 Pedidos Cancelados</p>
                        }
                    </div>
                </InfiniteScroll>
              </DivBody>
            </Col>
            <Col flex="auto" >
              <DivBody>
                <div>
                  {aux ? <ColRight /> : 'Bem vindo de volta!!'}
                </div>
              </DivBody>
            </Col>
          </Row>
        </Content>
        <Footer style={{ background: 'silver', textAlign: 'center', margin: '0px', padding: '0px', height: '70px' }}>
          <Row>
            <Col flex="200px">
              <DivFooter>
                Relatorio do dia
              </DivFooter>
              <DivFooter>
                Relatorio do dia
              </DivFooter>
            </Col>

            <Col
              flex="auto"
            >
              Info importante: Dinheiro, Cartão, Observação
            </Col>
          </Row>
        </Footer>
      </Layout>
    </>
  )
}

export default memo(ContentBody)
