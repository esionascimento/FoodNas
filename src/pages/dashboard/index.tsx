import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Layout, Row, Col, Skeleton, Divider } from 'antd';
const { Footer } = Layout;
import { useSelector } from "react-redux";

import { fechtOrderDetails } from '../../services/FetchFood/merchantOrder';

import withAuth from '../../utils/withAuth';
import LeftMenu from "../../components/left-menu/index";
/* import Header from "../../components/header"; */
import { HeaderAntd } from '../../components/headerAntd/index';

import { DivBody, DivFooter } from '../../../styles/dashboardCss';
import 'antd/dist/antd.css';

function Dashboard() {
  interface RootState {
    merchantOrder: {
      statusLoja: string
    }
  }

  const {Content} = Layout;
  const merchantOrder = (state: RootState) => state.merchantOrder;
  const isOn = useSelector(merchantOrder);

  const [dataPending, setDataPending] = useState([]);
  const [dataConfirmado, setDataConfirmado] = useState([]);
  const [dataCanceled, setDataCanceled] = useState([]);
  const [isSelect, setIsSelect] = useState('null');
  const [dataLog, setDataLog] = useState() as any;

  console.log('isOn :', isOn);
  
  /* async function generateCode() {
    try {
      const { data } = await fechtAuthenticationTokenCentralized();
      setCookie(null, 'food.token', data.data.accessToken, {maxAge: 86400 * 7, path: '/'});
      const aux = await fechtCatalogProductList()
      console.log('aux :', aux.data);
    } catch (err) {
      console.log('errAuthCentrDash :', err.message);
    }
  } */
  
  useEffect(() => {
    const aux = JSON.parse(localStorage.getItem('food.orders'));
    
    if (aux) {
      aux.data.map((data: any) => {
        if (data.code === 'PLC') {
          setDataPending(prev => [...prev, data]);
        } else if (data.code === 'CAN') {
          setDataCanceled(prev => [...prev, data]);
        }
      });
    }
  }, []);
  
  const loadMoreData = () => {
    
  };
  
  function onClickCanceled(e: any) {
    setIsSelect('canceled');
    fechtOrderDetails(e.target.name).then((data) => {
      console.log('dataFetchOrderDetails :', data);
      setDataLog(data.data);
    })
  }

  useEffect(() => {
    componentBody();
  }, [dataLog]);
  
  function items() {
    return dataLog.items.map((aux) => {
      console.log('aux :', aux);
        return (
          <>
            <p key="aux">{`nome: ${aux.name}`}</p>
            <p key="aux">{`quantidade: ${aux.quantity}`}</p>
            <p key="aux">{`valor unitario: ${aux.totalPrice}`}</p>
          </>
        )
      })
  }

  function componentBody() {
    if (isSelect === 'null') {
      return (
        <>
          <p>opa</p>
        </>
      )
    } else if (isSelect === 'canceled') {
      console.log('dataLog :', dataLog);
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
            {items()}
          </div>
        </>
      )
    }
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
                      <div>
                        <p>Pedidos pendentes</p>
                        {dataPending.length ?
                          dataPending.map((dados, index) => (
                            <button key={index}>{dados.orderId}</button>
                          ))
                          :
                          <p>0 Pedidos Pendentes</p>
                        }
                      </div>
                      <div>
                        <p>Pedidos Confirmados</p>
                        {dataConfirmado.length ?
                          dataConfirmado.map((dados, index) => (
                            <button key={index}>{dados.orderId}</button>
                          ))
                          :
                          <p>0 Pedidos Confirmados</p>
                        }
                      </div>
                      <div>
                        <p>Pedidos Cancelados</p>
                        {dataCanceled.length ?
                          dataCanceled.map((dados, index) => (
                            <button name={dados.orderId}key={index} onClick={onClickCanceled}>{dados.orderId}</button>
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
                    {dataLog ? componentBody() : <p>ops</p>}
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
