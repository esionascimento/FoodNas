import React, { useCallback, useEffect, useState, useMemo, memo } from 'react';
import { Layout, Row, Col, Skeleton, Divider } from 'antd';
const { Footer } = Layout;
import { useSelector, useDispatch } from "react-redux";

import InfiniteScroll from 'react-infinite-scroll-component';
import ComponentContent from '../../components/layoutContent';

import { ACSelectPedido, ACSelectOrderId } from '../../store/dashboard/dashboardAction';
import { ACDataOrderPending } from '../../store/dataOrder/dataOrderAction';
import { ACDataOrderAck } from '../../store/dataOrder/dataOrderAction';

import { fechtOrderEventAcnowledgment } from '../../services/FetchFood/merchantOrder';

import 'antd/dist/antd.css';
import { DivBody, DivFooter } from '../../../styles/dashboardCss';

function ContentBody() {
  interface RootState {
    storeDataOrder: {
      dataOrderPending: []
    }
  }
  const dispatch = useDispatch();
  const {Content} = Layout;
  const apiPending = useSelector((state: RootState) => state.storeDataOrder.dataOrderPending);
  
  const [dataPending, setDataPending] = useState([]);
  const [dataConfirmado, setDataConfirmado] = useState([]);
  const [dataCanceled, setDataCanceled] = useState([]);
  const [aux, setAux] = useState();
  
  useMemo(() => {
    const storageFoodOrders = JSON.parse(localStorage.getItem('food.orders'));
    
    if (storageFoodOrders) {
      storageFoodOrders.data.map((data: any) => {
        if (data.code === 'PLC') {
          setDataPending(prev => [...prev, data]);
        } else if (data.code === 'CAN') {
          setDataCanceled(prev => [...prev, data]);
        }
      });
    }
  }, []);
  
  useEffect(() => {
    async function aaaa() {
      if (apiPending.length) {
        let auxDataPending = [...dataPending];
        let auxApiPending = [...apiPending];
  
        for (let i = 0; i < auxApiPending.length;i++) {
          let index = auxDataPending.map((item) => item["id"]).indexOf(auxApiPending[i]["id"]);
          if (index > -1) {
            auxDataPending.splice(index, 1);
          }
        }
        const aoba = [...auxApiPending, ...auxDataPending];
        setDataPending(aoba);
        dispatch(ACDataOrderPending([]));
        await fechtOrderEventAcnowledgment(apiPending);
      }
    }
    aaaa();
  }, [apiPending, dispatch]) // eslint-disable-line
  
  const loadMoreData = () => {
    
  };

  const handlerOrderByStatus = useCallback((e: any, dados: any) => {
    setAux(e.target.name);
    dispatch(ACDataOrderAck(dados));
    dispatch(ACSelectPedido(e.target.id));
    dispatch(ACSelectOrderId(e.target.name));
  },[dispatch]);

  return (
    <>
      <Layout>
        <Content>
          <Row wrap={false}>
            <Col flex="200px">
              <DivBody
                id={"scrollableDiv"}
                >
                <InfiniteScroll
                  dataLength={10}
                  next={loadMoreData}
                  hasMore={10 < 50}
                  loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
                  endMessage={<Divider plain>It is all, nothing more 🤐</Divider>}
                  scrollableTarget="scrollableDiv"
                  >
                    {dataPending.length ?
                      <div>
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
                      :
                      null
                    }
                    <div>
                      <h3>Pedidos Confirmados</h3>
                      {dataConfirmado.length ?
                        dataConfirmado.map((dados, index) => (
                          <button key={index}>{dados.orderId}</button>
                        ))
                        :
                        <p>0 Pedidos Confirmados</p>
                      }
                    </div>
                    <div>
                      <h3>Pedidos Cancelados</h3>
                      {dataCanceled.length ?
                        dataCanceled.map((dados, index) => (
                          <button id="canceled" name={dados.orderId} key={index} onClick={(e) => handlerOrderByStatus(e, dados)}>{dados.id}</button>
                          ))
                          :
                          <p>0 Pedidos Cancelados</p>
                        }
                    </div>
                </InfiniteScroll>
              </DivBody>
            </Col>
            <Col flex="auto" >
              <DivBody>
                <div>
                  {aux ? <ComponentContent /> : 'Bem vindo de volta!!'}
                </div>
              </DivBody>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center', margin: "0px", padding: "0px", height: '70px'}}>
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
  );
}

export default memo(ContentBody);
