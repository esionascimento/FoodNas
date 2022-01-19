import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { useSelector, useDispatch } from "react-redux";
const { Header } = Layout;

import { ACVisibleModalPausa } from '../../store/dashboard/dashboardAction';
import { ModalPausa } from './modalPausa';

import { DivBody, Div, DivMenu } from './styled';

export const HeaderAntd = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState();
  const { theme: storeTheme } = useSelector(state => state.storeDashboard);
  const { statusLoja } = useSelector(state => state.merchantOrder);
  console.log('statusLoja :', statusLoja);

  useEffect(() => {
    if (storeTheme === 'light') {
      return setTheme('#fff');
    }
    setTheme('#001529');
  }, [ storeTheme]);

  function onClick(e) {
    console.log(': ', e.target.name)
  }

  function onModal() {
    dispatch(ACVisibleModalPausa(true));
  };

  return (
    <Header style={{background: theme, margin:  '-10px 0'}}>
      <DivBody>
        <Div>
          <DivMenu onClick={onClick}>FoodNas</DivMenu>
          <DivMenu onClick={onClick}>0 Pedidos</DivMenu>
        </Div>
        <Div>
          <Div>{statusLoja}</Div>
          <DivMenu onClick={onModal}>Pausar/Fechar</DivMenu>
        </Div>
      </DivBody>
      <ModalPausa />
    </Header>
  )
};
