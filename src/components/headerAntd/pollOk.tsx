const PollOk = (dataProps: { code?: string; fullCode: string, orderId: string }) => {
  function getLocal(fullCode: string) {
    const result = JSON.parse(localStorage.getItem(`order${fullCode}`))
    if (!result) {
      return []
    }
    return [...result.data]
  }

  const placedAr = getLocal(dataProps.fullCode)
  let auxx = true

  for (let i = 0; i < placedAr.length; i++) {
    if (placedAr[i].orderId === dataProps.orderId) {
      auxx = false
    }
  }

  if (auxx) {
    placedAr.push(dataProps)
    localStorage.setItem(`order${dataProps.fullCode}`, JSON.stringify({ data: placedAr }))
    return dataProps
  }
  return false
}

export default PollOk
