import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Layout, Row, Col, Skeleton, Divider } from 'antd';
const { Footer } = Layout;
import { useSelector, useDispatch } from "react-redux";

import LeftMenu from "../../components/left-menu/index";
/* import Header from "../../components/header"; */
import { HeaderAntd } from '../../components/headerAntd/index';
import { ComponentBody } from '../../components/layoutContent';
import withAuth from '../../utils/withAuth';
import { ACSelectPedido, ACSelectOrderId } from '../../store/dashboard/dashboardAction';

import { DivBody, DivFooter } from '../../../styles/dashboardCss';
import 'antd/dist/antd.css';

function Dashboard() {
  const dispatch = useDispatch();
  interface RootState {
    merchantOrder: {
      statusLoja: string
    },
    storeDashboard: {
      dataOrderPending: []
    }
  }

  const {Content} = Layout;
  const merchantOrder = (state: RootState) => state.merchantOrder;
  const { dataOrderPending } = useSelector((state: RootState) => state.storeDashboard);
  console.log('dataOrderPendingasdfasdfas- :', dataOrderPending);
  const isOn = useSelector(merchantOrder);
  
  const [dataPending, setDataPending] = useState([]);
  const [dataConfirmado, setDataConfirmado] = useState([]);
  const [dataCanceled, setDataCanceled] = useState([]);
  const [aux, setAux] = useState();
  
  console.log('isOn :', isOn);
  
  useEffect(() => {
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
    if (dataOrderPending.length) {
      setDataPending(dataOrderPending);
    }
  }, [dataOrderPending])
  
  const loadMoreData = () => {
    
  };

  function handlerOrderByStatus(e: any) {
    setAux(e.target.name);
    dispatch(ACSelectPedido(e.target.id));
    dispatch(ACSelectOrderId(e.target.name));
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {
        typeof  window  ! ==  'undefined' ? 'null' : <HeaderAntd />
      }
      <Layout>
        {
          typeof  window  ! ==  'undefined' ? 'null' : <LeftMenu />
        }
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
                                <button id="pending" name={dados.orderId} key={index} onClick={handlerOrderByStatus}>{dados.orderId}</button>
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
                            <button id="canceled" name={dados.orderId} key={index} onClick={handlerOrderByStatus}>{dados.orderId}</button>
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
                    {aux ? <ComponentBody /> : 'Bem vindo de volta!!'}
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
              
              <Col flex="auto">Info importante: Dinheiro, Cartão, Observação</Col>
            </Row>
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default withAuth(Dashboard);
