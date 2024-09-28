const main = document.querySelectorAll('#main')
let currentDiv = 0
let quantity = main.length;

const initial = () => {
  main[currentDiv].scrollIntoView({ behavior: "smooth" })
  startScrolling(0, currentDiv)
}
let currencyClienY;

let handlerScroll = (e) => {
  if (currencyClienY <= 0) {
    if (e.clientY >= 450 && e.clientY <= 500) {
      window.removeEventListener('mousemove', handlerScroll)
      currentDiv++;
      main[currentDiv].scrollIntoView({ behavior: "smooth" })
      startScrolling(e.clientY, currentDiv)
    }
  }
  else {
    if (currencyClienY + 100 < e.clientY) {
      window.removeEventListener('mousemove', handlerScroll)
      currentDiv++;
      main[currentDiv].scrollIntoView({ behavior: "smooth" })
      startScrolling(e.clientY, currentDiv)
    }
    if (currencyClienY - 100 > e.clientY) {
      if (currentDiv === 0) {
        window.removeEventListener('mousemove', handlerScroll);
        startScrolling(e.clientY, 0)
        return 
      }
      window.removeEventListener('mousemove', handlerScroll)
      currentDiv--;
      main[currentDiv].scrollIntoView({ behavior: "smooth" })
      startScrolling(e.clientY, currentDiv)
    }
  }
}

const startScrolling = (clientY, currentDiv) => {
  currencyClienY = clientY;
  if (currentDiv === quantity - 1) {
    return window.removeEventListener('mousemove', handlerScroll);
  } else {
    window.addEventListener('mousemove', handlerScroll)
  }
}


window.addEventListener('load', initial)