

export function componentBody() {
  if (isSelect === 'null') {
    return (
      <>
        <p>opa</p>
      </>
    )
  } else if (isSelect === 'canceled') {
    console.log('dataLog :', dataLog);
    return (
      <>
        <h2>Pedido Cancelado</h2>
        <div>
          <h3>Contato</h3>
          <p>{`Nome: ${dataLog && dataLog.customer.name}`}</p>
          <p>{`Telefone: ${dataLog && dataLog.customer.phone.number}`}</p>
          <p>{`Localizador: ${dataLog && dataLog.customer.phone.localizer}`}</p>
          <h3>Endereço</h3>
          <p>{`rua: ${dataLog && dataLog.delivery.deliveryAddress.streetName}`}</p>
          <p>{`numero: ${dataLog && dataLog.delivery.deliveryAddress.streetNumber}`}</p>
          <h3>Pagamento</h3>
          <p>{`metodo pagamento: ${dataLog && dataLog.payments.methods[0].method}`}</p>
          <p>{`entrega: ${dataLog && dataLog.total.deliveryFee}`}</p>
          <p>{`total: ${dataLog && dataLog.total.orderAmount}`}</p>
          {items()}
        </div>
      </>
    )
  } else if (isSelect === 'pending') {
    console.log('dataLog :', dataLog);
    return (
      <>
        <h2>Pedido Pendente</h2>
        <div>
          <h3>Contato</h3>
          <p>{`Nome: ${dataLog && dataLog.customer.name}`}</p>
          <p>{`Telefone: ${dataLog && dataLog.customer.phone.number}`}</p>
          <p>{`Localizador: ${dataLog && dataLog.customer.phone.localizer}`}</p>
          <h3>Endereço</h3>
          <p>{`rua: ${dataLog && dataLog.delivery.deliveryAddress.streetName}`}</p>
          <p>{`numero: ${dataLog && dataLog.delivery.deliveryAddress.streetNumber}`}</p>
          <h3>Pagamento</h3>
          <p>{`metodo pagamento: ${dataLog && dataLog.payments.methods[0].method}`}</p>
          <p>{`entrega: ${dataLog && dataLog.total.deliveryFee}`}</p>
          <p>{`total: ${dataLog && dataLog.total.orderAmount}`}</p>
          {items()}
        </div>
      </>
    )
  }
}
