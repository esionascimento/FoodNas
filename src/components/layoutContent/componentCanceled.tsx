import { DivContact } from './styled';

export function ComponentCanceled(dataLog: any) {

  function items() {
    return dataLog.items.map((aux: any, index: any) => {
      return (
        <DivContact key={index}>
          <div>
            <p>{index + 1}</p>
          </div>
          <div>
            <p>{`nome: ${aux.name}`}</p>
            <p>{`quantidade: ${aux.quantity}`}</p>
            <p>{`valor unitario: ${aux.unitPrice !== 0 ? aux.unitPrice : aux.optionsPrice}`}</p>
            <p>{`Valor Total: ${aux.totalPrice}`}</p>
          </div>
        </DivContact>
      )
    })
  }
  
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
        {dataLog && items()}
      </div>
    </>
  )
}
