import React, { useEffect, useState, memo } from 'react'
import { Layout, Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { parseCookies, setCookie } from 'nookies'

import { ACVisibleModalPausa, ACIsLoja } from '../../store/dashboard/dashboardAction'
import { ACStatusLoja } from '../../store/merchantOrder/merchantOrderAction'
import ModalPausa from './modalPausa'
import PollOk from './pollOk'
import { ACDataOrderPending, ACDataOrderConfirmed, ACDataOrderDispatch, ACDataOrderConcluded, ACDataOrderCanceled } from '../../store/dataOrder/dataOrderAction'
/* import Notification from '../../components/notification/index' */
import Interval2 from './interval2'

import { fechtOrderEventPolling } from '../../services/FetchFood/merchantOrder'
import { fechtMerchantStatus } from '../../services/FetchFood/merchantMerchant'

import { DivBody, Div, DivMenu } from './styled'
const { Header } = Layout

let intervalInfinit = null
let intervalVerifyStatus = null

function HeaderAntd() {
  interface RootState {
    storeDashboard: {
      theme: string,
      isLoja: string
    },
    merchantOrder: {
      statusLoja: string
    }
  }

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />
  const dispatch = useDispatch()
  const { 'food.isLoja': isLojaCookie } = parseCookies()
  const [tema, setTema] = useState('')
  const [isActive, setIsActive] = useState(true)
  const [sLoja, setSLoja] = useState('')

  let isOn = true
  const theme = useSelector((state: RootState) => state.storeDashboard.theme)
  const isLoja = useSelector((state: RootState) => state.storeDashboard.isLoja)
  const statusLoja = useSelector((state: RootState) => state.merchantOrder.statusLoja)
  console.log('statusLoja :', statusLoja)

  useEffect(() => {
    if (theme === 'light') {
      return setTema('#fff')
    } else {
      setTema('#001529')
    }
  }, [theme])

  useEffect(() => {
    if (isLojaCookie === 'Fechar Loja') {
      dispatch(ACIsLoja('Fechar Loja'))
      setCookie(null, 'food.isLoja', 'Fechar Loja', { maxAge: 86400 * 7, path: '/' })
    } else {
      dispatch(ACIsLoja('Abrir Loja'))
      setCookie(null, 'food.isLoja', 'Abrir Loja', { maxAge: 86400 * 7, path: '/' })
    }
  }, [isLojaCookie, dispatch])

  useEffect(() => {
    setSLoja(statusLoja)
  }, [statusLoja])

  async function fetchStatus() {
    fechtMerchantStatus().then((data) => {
      const { message } = data.data[0]
      if (message.title !== statusLoja) {
        isOn = false
        dispatch(ACStatusLoja(message.title))
        onVerifyStatus()
      }
    })
  }

  async function onVerifyStatus() {
    if (isOn) {
      intervalVerifyStatus = setInterval(() => {
        fetchStatus()
      }, 2000)
    } else {
      isOn = true
      clearInterval(intervalVerifyStatus)
    }
  }

  async function polling() {
    const resultPolling = await fechtOrderEventPolling()
    const placedAr = []
    const confirmedAr = []
    const dispatchedAr = []
    const concludedAr = []
    const canceledAr = []

    if (resultPolling.status === 200) {
      resultPolling.data.data.forEach((data: { code: string; fullCode: string, orderId: string }) => {
        const result = PollOk(data)
        if (data.code === 'PLC') {
          if (result) {
            placedAr.push(result)
            dispatch(ACDataOrderPending(placedAr))
          }
        } else if (data.code === 'CFM') {
          if (result) {
            confirmedAr.push(result)
            dispatch(ACDataOrderConfirmed(confirmedAr))
          }
        } else if (data.code === 'DSP') {
          if (result) {
            dispatchedAr.push(result)
            dispatch(ACDataOrderDispatch(dispatchedAr))
          }
        } else if (data.code === 'CON') {
          if (result) {
            concludedAr.push(result)
            dispatch(ACDataOrderConcluded(concludedAr))
          }
        } else if (data.code === 'CAN' || data.code === 'CAR') {
          if (result) {
            canceledAr.push(result)
            dispatch(ACDataOrderCanceled(canceledAr))
          }
        }
      })
    }
  }

  async function initTimer() {
    if (isLoja === 'Abrir Loja') {
      setSLoja('Loja aberta')
      dispatch(ACIsLoja('Fechar Loja'))
      /* setCookie(null, 'food.isLoja', 'Fechar Loja', { maxAge: 86400 * 7, path: '/' }) */
    } else {
      setSLoja('Loja fechada')
      dispatch(ACIsLoja('Abrir Loja'))
      /* setCookie(null, 'food.isLoja', 'Abrir Loja', { maxAge: 86400 * 7, path: '/' }) */
    }

    if (isActive) {
      polling()
      let count = 0
      intervalInfinit = setInterval(() => {
        if (count === 29) {
          polling()
          count = 0
          return
        }
        count += 1
      }, 1000)
    } else {
      clearInterval(intervalInfinit)
    }
    Interval2(statusLoja, dispatch)
    setIsActive(prev => !prev)
  }

  function onModal() {
    dispatch(ACVisibleModalPausa(true))
  }

  return (
    <Header style={{ width: '100%', margin: '0 auto' }}>
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key={0} >
            A
          </Menu.Item>
          <Menu.Item key={1} >
            B
          </Menu.Item>
          <Menu.Item style={{ width: '180px' }}>
            <span>Esio</span>
            <span>sddd</span>
          </Menu.Item>
          <Space size={0} >
            <div></div>
            <div></div>
          </Space>
        </Menu> */}

      <DivBody isTheme={tema === '#001529'}>
        <Div>
          <DivMenu title="Nome da Loja" >FoodNas</DivMenu>
          <DivMenu title="Quantidade de Pedidos no dia" >0 Pedidos</DivMenu>
        </Div>
        <Div>
          <Div title="Status da Loja. Pode levar até 1 minuto para atualizar">{sLoja !== statusLoja &&
              <Spin style={{ margin: 'auto', color: 'red' }} indicator={antIcon} />
            }
            {statusLoja}
          </Div>
          <DivMenu title="" onClick={() => initTimer()}>{isLoja}</DivMenu>
          <DivMenu onClick={() => onModal()}>Pausar/Fechar</DivMenu>
        </Div>
      </DivBody>
      <ModalPausa />
    </Header>
  )
}

export default memo(HeaderAntd)
