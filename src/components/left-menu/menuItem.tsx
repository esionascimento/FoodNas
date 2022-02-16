import React, { useCallback, useState } from "react";
import { setCookie, destroyCookie } from 'nookies';
import { Tooltip, Spin } from "antd";
import { useRouter } from 'next/router';

import { iconsListAdmin } from "./options";

import 'antd/dist/antd.css';
import * as S from "./styled";

function MenuItem() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(false);

  const selectItem = useCallback((path, index) => {
    setLoading(true);
    if (index === 4) {
      destroyCookie(null, 'food.sider.index');
      destroyCookie(null, 'food.token');
      destroyCookie(null, 'atlas.id');
      destroyCookie(null, 'atlas.id_store');
      destroyCookie(null, 'atlas.token');
      destroyCookie(null, 'atlas.first_name');
    } else {
      setCollapsed(true);
      setCookie(null, 'food.sider.index', index, {maxAge: 86400 * 7, path: '/'});
    }
    router.push(`${path}`);
  }, [router]);
  
  return (
    <>
      <Spin spinning={loading} />
      {iconsListAdmin.map(
        ({ text, active, access, icon, path }, index) => (
          <S.MenuItem 
            onClick={() => selectItem(path, index)}
            key={index}
            icon={icon}
            >
              <Tooltip
                title={
                  active && access ? "" : "Em Desenvolvimento"
                }
                placement="right"
              >     
                <S.Text>{text}</S.Text>
              </Tooltip>
          </S.MenuItem>
        )
      )}
    </>
  );
}

export default MenuItem;
