import React from 'react';

import { Login } from '../components/login';

import { DivBox, FooterRodape, DivContainer, DivRight, DivLeft } from '../../styles/indexCss';

export default function Home() {
  return (
    <div>
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
    </div>
  );
}
