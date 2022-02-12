import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { parseCookies, setCookie } from 'nookies';
const { Header } = Layout;

import { ACVisibleModalPausa, ACIsLoja, ACDataOrderPending } from '../../store/dashboard/dashboardAction';
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
      theme: string,
      isLoja: string
    },
    merchantOrder: {
      statusLoja: string
    }
  }
  
  const dispatch = useDispatch();
  const { 'food.isLoja': isLojaCookie } = parseCookies();
  const [tema, setTema] = useState() as any;
  const [isActive, setIsActive] = useState(true);

  let isOn = true;
  const storeDashboard = (state: RootState) => state.storeDashboard;
  const merchantOrder = (state: RootState) => state.merchantOrder;
  const sDashboard = useSelector(storeDashboard);
  const isOna = useSelector(merchantOrder);
  const { theme, isLoja } = sDashboard;
  const { statusLoja } = isOna;

  useEffect(() => {
    if (theme === 'light') {
      return setTema("#fff");
    } else {
      setTema('#001529');
    }
  }, [theme]);
  
  useEffect(() => {
    if (isLojaCookie === 'Fechar Loja') {
      dispatch(ACIsLoja('Fechar Loja'));
      setCookie(null, 'food.isLoja', 'Fechar Loja', {maxAge: 86400 * 7, path: '/'});
    } else {
      dispatch(ACIsLoja('Abrir Loja'));
      setCookie(null, 'food.isLoja', 'Abrir Loja', {maxAge: 86400 * 7, path: '/'});
    }
  }, [isLojaCookie, dispatch])
  
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
    const array = [];
    let arrayLocal = [];
    if (resultPolling.status === 200) {
      const storageFoodOrders = JSON.parse(localStorage.getItem('food.orders'));

      if (storageFoodOrders) {
        arrayLocal = [...storageFoodOrders.data];
      }

      resultPolling.data.data.map((data: any) => {
        if (data['code'] === 'PLC') {
          array.push(data);
          arrayLocal.push(data);
          localStorage.setItem('food.orders', JSON.stringify({data: arrayLocal}));
        }
      });
      dispatch(ACDataOrderPending(array));
    }
  }
  
  function initTimer() {
    if (isLoja === 'Abrir Loja') {
      dispatch(ACIsLoja('Fechar Loja'));
      setCookie(null, 'food.isLoja', 'Fechar Loja', {maxAge: 86400 * 7, path: '/'});
    } else {
      dispatch(ACIsLoja('Abrir Loja'));
      setCookie(null, 'food.isLoja', 'Abrir Loja', {maxAge: 86400 * 7, path: '/'});
    }

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
      <DivBody isTheme={tema === '#001529' ? true : false}>
        <Div>
          <DivMenu>FoodNas</DivMenu>
          <DivMenu>0 Pedidos</DivMenu>
        </Div>
        <Div>
          <Div>{statusLoja}</Div>
          <DivMenu onClick={initTimer}>{isLoja}</DivMenu>
          <DivMenu onClick={onModal}>Pausar/Fechar</DivMenu>
        </Div>
      </DivBody>
      <ModalPausa />
    </Header>
  )
};
