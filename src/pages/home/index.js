import React from 'react';

import { Login } from '../../components/login';

import './homeCss.css'

export function Home() {
  return (
    <>
      <div className="box">
        <div className="container">
          <div className="left">
            <h1>FoodNas</h1>
          </div>
          <div className="right">
            <Login />
          </div>
        </div>
      </div>
      <footer className="rodape">
        Web site desenvolvido por Esio Rodrigues
      </footer>
    </>
  );
}
