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
let intervalVerifyStatus = null;

export const HeaderAntd = () => {
  interface RootState {
    storeDashboard: {
      theme: string
    },
    merchantOrder: {
      statusLoja: string
    }
  }
  
  const dispatch = useDispatch();
  const [tema, setTema] = useState() as any;
  const [isActive, setIsActive] = useState(true);

  let isOn = true;
  const storeDashboard = (state: RootState) => state.storeDashboard;
  const aux = useSelector(storeDashboard);
  const { theme } = aux;
  /* const { theme: storeTheme } = useSelector(state => state.storeDashboard); */
  /* const { modalPausa: { tempo } } = useSelector(state => state.storeDashboard); */
  const merchantOrder = (state: RootState) => state.merchantOrder;
  const isOna = useSelector(merchantOrder);
  const { statusLoja } = isOna;
  /* const { statusLoja } = useSelector(state => state.merchantOrder); */

  useEffect(() => {
    if (theme === 'light') {
      return setTema("#fff");
    }
    setTema('#001529');
  }, [theme]);
  
  async function fetchStatus() {
    fechtMerchantStatus().then((data) => {
      const { message } = data.data[0];
      if (message.title != statusLoja) {
        isOn = false;
        dispatch(ACStatusLoja(message.title));
        onVerifyStatus();
      }
    })
  }

  async function onVerifyStatus() {
    if (isOn) {
      intervalVerifyStatus = setInterval(() => {
        fetchStatus();
      }, 2000);
    } else {
      isOn = true;
      clearInterval(intervalVerifyStatus);
    }
  }

  async function polling() {
    const resultPolling = await fechtOrderEventPolling();
    console.log('resultPolling :', resultPolling);
    if (resultPolling.status === 200) {
      localStorage.setItem('food.orders', JSON.stringify({data: resultPolling.data.data}));
    }
  }
  
  function initTimer() {
    if (isActive) {
      polling();
      let count = 0;
      intervalInfinit = setInterval(() => {
        if (count === 29) {
          polling();
          count = 0;
          return
        }
        count += 1;
      }, 1000);
    } else {
      clearInterval(intervalInfinit);
    }

    onVerifyStatus();
    setIsActive(prev => !prev);
  }
  
  function onModal() {
    dispatch(ACVisibleModalPausa(true));
  }

  return (
    <Header style={{background: tema, margin:  '-10px 0'}}>
      <section></section>
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
