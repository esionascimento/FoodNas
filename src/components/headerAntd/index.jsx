import { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { parseCookies } from 'nookies';
import { useSelector } from "react-redux";

const { Header } = Layout;
import { Section, Div, DivMenu } from './styled';

export const HeaderAntd = () => {
  const [theme, setTheme] = useState();
  const { 'foodnas.theme': cookieTheme } = parseCookies();
  const { theme: storeTheme } = useSelector(state => state.storeDashboard);
  const { statusLoja } = useSelector(state => state.merchantOrder);
  console.log('statusLoja :', statusLoja);
  

  useEffect(() => {
    if (cookieTheme) {
      if (storeTheme === 'light') {
        return setTheme('#fff');
      }
      setTheme('#001529');
    }
  }, [cookieTheme, storeTheme]);

  function onClick(e) {
    console.log(': ', e.target.name)
  }

  return (
    <Header style={{background: theme, height: '40px'}}>
      <Section>
        <Div>
          <DivMenu onClick={onClick}>kslfkj</DivMenu>
          <DivMenu onClick={onClick}>s</DivMenu>
        </Div>
        <Div>
          <Div>{statusLoja}</Div>
          <DivMenu onClick={onClick}>Pausar/Fechar</DivMenu>
        </Div>
      </Section>
    </Header>
  )
};
