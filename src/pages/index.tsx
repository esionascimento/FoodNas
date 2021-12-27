import React from 'react';

import { Login } from '../components/login';
import { DivBox, FooterRodape, DivContainer, DivRight, DivLeft } from './_indexCss';

export default function Home() {
  return (
    <>
      <DivBox>
        <DivContainer>
          <DivLeft>
            <h1>FoodNas</h1>
          </DivLeft>
          <DivRight>
            <Login />
          </DivRight>
        </DivContainer>
      </DivBox>
      <FooterRodape>
        Web site desenvolvido por Esio Rodrigues
      </FooterRodape>
    </>
  );
}
