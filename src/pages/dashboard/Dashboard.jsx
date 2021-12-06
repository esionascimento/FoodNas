import React from 'react';

import './Dashboard.css';

export function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <section>
        <div>
          <h3>Clique abaixo para pegar codigo de acesso.</h3>
          <button type="button">Gerar Código</button>
          <h4>Código gerado: </h4>
        </div>
        <div>
          <h3>Autorizar loja.</h3>
          <button type="button">Autorizar</button>
        </div>
        <div>
          <h3>Codigo de autorização.</h3>
          <labe>Cole o código de autorização, o mesmo que o Ifood disponibilizou ao autorizar a aplicação.</labe>
          <input type="text" required />
          <button type="button">Enviar</button>
        </div>
      </section>
    </div>
  );
}