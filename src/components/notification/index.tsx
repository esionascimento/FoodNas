
function Notification(prop: boolean) {
  const teste = new Audio()
  let intervalVerifyStatus = null
  teste.src = 'https://www.soundjay.com/phone/sounds/telephone-ring-01a.mp3'

  if (prop) {
    intervalVerifyStatus = setInterval(() => {
      teste.play()
    }, 5000)
  } else {
    teste.pause()
    clearInterval(intervalVerifyStatus)
  }
}

export default Notification
