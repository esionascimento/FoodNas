import { Dispatch } from 'redux'
import { fechtMerchantStatus } from '../../services/FetchFood/merchantMerchant'
import { ACStatusLoja } from '../../store/merchantOrder/merchantOrderAction'

let intervalVerifyStatus = null

const Interval2 = (statusLoja: string, dispatch: Dispatch<{ type: string, payload: string}>) => {
  let isOn = true

  function fetchStatus() {
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
      clearInterval(intervalVerifyStatus)
    }
  }

  onVerifyStatus()
}

export default Interval2
