import React, { useState } from 'react'
import { fechtOrderEventPolling } from '../../services/FetchFood/merchantOrder'

let intervalVerifyStatus = null

const IntervalVerify = (selectOrderId) => {
  const [active, setActive] = useState(true)

  async function polling() {
    const resultPolling = await fechtOrderEventPolling()
    const array = []

    if (resultPolling.status === 200) {
      resultPolling.data.data.forEach((data: { code: string, orderId: string }) => {
        if (data.code === 'CFM' && data.orderId === selectOrderId) {
          setActive(false)
          array.push(data)
        }
      })
    }
  }
  function intervalConfirmed() {
    if (active) {
      polling()
      let count = 0
      intervalVerifyStatus = setInterval(() => {
        if (count === 29) {
          polling()
          count = 0
          return
        }
        count += 1
      }, 1000)
    } else {
      clearInterval(intervalVerifyStatus)
    }
  }
  return (
    <>
      {intervalConfirmed()}
    </>
  )
}

export default IntervalVerify
