import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { useSelector, useDispatch } from "react-redux";
const { Header } = Layout;

import { ACVisibleModalPausa } from '../../store/dashboard/dashboardAction';
import { ACStatusLoja } from '../../store/merchantOrder/merchantOrderAction';
import { ModalPausa } from './modalPausa';

import { fechtOrderEventPolling } from '../../services/FetchFood/merchantOrder';
import { fechtMerchantStatus } from '../../services/FetchFood/merchantMerchant';

import { DivBody, Div, DivMenu } from './styled';
let intervalInfinit = null;

export const HeaderAntd = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState();
  const [isActive, setIsActive] = useState(true);
  const [dataLog, setData] = useState([]);
  console.log('dataLog :', dataLog);
  
  const { theme: storeTheme } = useSelector(state => state.storeDashboard);
  /* const { modalPausa: { tempo } } = useSelector(state => state.storeDashboard); */
  const { statusLoja } = useSelector(state => state.merchantOrder);

  useEffect(() => {
    if (storeTheme === 'light') {
      return setTheme('#fff');
    }
    setTheme('#001529');
  }, [ storeTheme]);

  async function fetchStatus() {
    fechtMerchantStatus().then((data) => {
      const { message } = data.data[0];
      dispatch(ACStatusLoja(message.title));
    })
  }
  
  async function polling() {
    const resultPolling = await fechtOrderEventPolling();
    console.log('resultPolling :', resultPolling);
    if (resultPolling.status === 200) {
      resultPolling.data.data.map((data) => {
        setData(dataLog => [...dataLog, data]);
      })
    }
    fetchStatus();
  }
  
  function initTimer() {
    if (isActive) {
      polling();
      let count = 0
      intervalInfinit = setInterval(() => {
        console.log('count :', count);
        if (count === 30) {
          polling();
          count = 0;
          return
        }
        count += 1;
      }, 1000);
    } else {
      clearInterval(intervalInfinit);
      fetchStatus();
    }
    setIsActive(prev => !prev);
  }
  
  function onModal() {
    dispatch(ACVisibleModalPausa(true));
  };

  return (
    <Header style={{background: theme, margin:  '-10px 0'}}>
      <DivBody>
        <Div>
          <DivMenu>FoodNas</DivMenu>
          <DivMenu>0 Pedidos</DivMenu>
        </Div>
        <Div>
          <Div>{statusLoja}</Div>
          <DivMenu onClick={initTimer}>Abrir Loja</DivMenu>
          <DivMenu onClick={onModal}>Pausar/Fechar</DivMenu>
        </Div>
      </DivBody>
      <ModalPausa />
    </Header>
  )
};
