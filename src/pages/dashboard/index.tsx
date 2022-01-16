import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { setCookie } from 'nookies';
import { Layout, Row, Col, Skeleton, Divider } from 'antd';
const { Footer } = Layout;
import { useSelector, useDispatch } from "react-redux";

import { fechtCatalogProductList } from '../../services/FetchFood/merchantCatalog';
import { fechtAuthenticationTokenCentralized } from '../../services/FetchFood/merchantAuthorization';
import withAuth from '../../utils/withAuth';
import LeftMenu from "../../components/left-menu/index";
/* import Header from "../../components/header"; */
import { HeaderAntd } from '../../components/headerAntd';
import { fechtOrderEventPolling } from '../../services/FetchFood/merchantOrder';
import { fechtMerchantStatus } from '../../services/FetchFood/merchantMerchant';

import { StatusLoja } from '../../store/merchantOrder/merchantOrderAction';

import { DivBody, DivFooter } from '../../../styles/dashboardCss';
import 'antd/dist/antd.css';

function Dashboard() {
  interface RootState {
    merchantOrder: {
      statusLoja: string
    }
  }
  const dispatch = useDispatch();
  const {Content} = Layout;
  const merchantOrder = (state: RootState) => state.merchantOrder;
  const isOn = useSelector(merchantOrder);
  const { statusLoja } = isOn;
  const [pausado, setPausado] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isPausa, setIsPausa] = useState(false);
  const [isMin, setIsMin] = useState(null);
  const [keyPoll, setKeyPoll] = useState(true);
  const [dataLog, setData] = useState([]);
  
  let aux = 'undefined';
  
  useEffect(() => {
    async function fetchData() {
      console.log('loja status')
      fechtMerchantStatus().then((data) => {
        const { message } = data.data[0];
        dispatch(StatusLoja(message.title));
      }).catch((err) => {
        console.log('errStatus :', err);
      });
    }
    fetchData();
  }, [keyPoll, dispatch]);
  
  //status 401 "message": "token expired"
  //status 204 no content abrir loja sem retorno
  //status 200 ok - a pedidos novos
  
  useEffect(() => {
    async function fetchData() {
      async function polling() {
        console.log('data :');
        const resultPolling = await fechtOrderEventPolling();
        console.log('resultPolling :', resultPolling);
        if (resultPolling.status === 200) {
          resultPolling.data.data.map((data: any) => {
            setData(dataLog => [...dataLog, data]);
          })
        }
        setKeyPoll(prevKeyPoll => !prevKeyPoll)
      }
      let intervalInfinit = null;
      let count = 0;

      if (isActive) {
        console.log("pausa");
        setIsPausa(false);
        polling();
        intervalInfinit = setInterval(() => {
          console.log('interval infi')
          if (count === 30) {
            polling();
            count = 0;
            return
          }
          count += 1;
        }, 1000);
      }
      return () => clearInterval(intervalInfinit);
    }
    fetchData();
  }, [isActive, pausado]);

  useEffect(() => {
    console.log('useEffect Tempo pausa')
    async function fetchData() {
      let intervalMin = null;
      let tempMin = 0;

      if (isPausa) {
        intervalMin = setInterval(() => {
          if (tempMin >= isMin) {
            setPausado(false);
            setIsActive(true);
            return
          }
          tempMin += 1;
        }, 1000);
      }
      return () => clearInterval(intervalMin);
    }
    fetchData();
  }, [isPausa, isMin]);
  
  function initTimer(event: any) {
    aux = event.target.name;
    setIsMin(aux);

    setIsActive(false);

    if (aux === 'closed') {
      setPausado(true);
      setIsPausa(false);
    } else if (isActive === true && aux === 'null') {
      setPausado(true);
    } else {
      if (aux === 'null') {
        /* polling(); */
        setIsActive(true);
        setPausado(false);
      } else {
        setPausado(true);
        setIsPausa(true);
      }
    }
  }

  async function generateCode() {
    try {
      const {data} = await fechtAuthenticationTokenCentralized();
      setCookie(null, 'food.token', data.data.accessToken, {maxAge: 86400 * 7, path: '/'});
      const aux = await fechtCatalogProductList()
      console.log('aux :', aux.data);
    } catch (err) {
      console.log('err :', err);
    }
  }

  const loadMoreData = () => {

  };

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
                    {dataLog ?
                      dataLog.map((dados, index) => (
                        <button key={index}>{dados.id}</button>
                        ))
                      :
                      dataLog.map((dados, index) => (
                        <button key={index}>{dados.id}</button>
                        ))
                      }
                  </InfiniteScroll>
                </DivBody>
              </Col>
              <Col flex="auto" >
                <DivBody>
                  <div>
                    <div>{statusLoja}</div>
                    <div>
                      <h3>Clique abaixo para pegar codigo de acesso.</h3>
                      <button onClick={generateCode} type="button">Gerar Código</button>
                      <h4>Código gerado: </h4>
                    </div>
                    <div>
                      <h3>Play/Pause - infinito</h3>
                      <button name="null" onClick={initTimer} type="button">Infinito</button>
                      <h4>{pausado ? 'Pausados' : 'Ativo'}</h4>
                    </div>
                    <div>
                      <h3>Play/Pause - 2 min</h3>
                      <button name="120" onClick={initTimer} type="button">2 min</button>
                      <h4>{pausado ? 'Pausado' : 'Ativo'}</h4>
                    </div>
                    <div>
                      <h3>Play/Pause - Fechar loja</h3>
                      <button name="closed" onClick={initTimer} type="button">Fechar loja</button>
                    </div>
                    <div>
                      <h3>Autorizar loja.</h3>
                      <button type="button">Autorizar</button>
                    </div>
                    <div>
                      <h3>Codigo de autorização.</h3>
                      <label>Cole o código de autorização, o mesmo que o Ifood disponibilizou ao autorizar a aplicação.</label>
                      <input type="text" required />
                      <button type="button">Enviar</button>
                    </div>
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
