import { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { parseCookies } from 'nookies';
import { useSelector } from "react-redux";

const { Header } = Layout;

export const HeaderAntd = () => {
  const [theme, setTheme] = useState();
  const { 'foodnas.theme': cookieTheme } = parseCookies();
  const { theme: storeTheme } = useSelector(state => state.storeDashboard);

  useEffect(() => {
    if (cookieTheme) {
      if (storeTheme === 'light') {
        return setTheme('light');
      }
      setTheme('dark');
    }
  }, [cookieTheme, storeTheme]);

  return (
    <Layout>
      <Header>
        {/* <div /> */}
        <Menu
          theme={theme}
          mode="horizontal"
          defaultSelectedKeys={['1']}
        >
          {new Array(3).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
    </Layout>
  )
};
