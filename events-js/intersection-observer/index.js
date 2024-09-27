const options = {
  // root: document.getElementById('inter'),
  rootMargin: "0px",
  threshold: 0.5
}
const trigger = (entries, observer) => {
  entries.forEach(element => {
    if (element.isIntersecting) {
      if (element.target.id === "inter") {
        element.target.classList.add('loaded')
      }
      if (element.target.id === "inter2") {
        console.log('inter2')
        element.target.classList.add('fade-in')

      }
      if (element.target.id === "inter3") {
        element.target.classList.add('animated')

      }
      if (element.target.id === "inter4") {
        console.log('qeqweqw4')
      }
      if (element.target.id === "inter5") {
        console.log('qeqweqw5')
      }

      //TODO: restart for everyone
      // observer.unobserve(element.target)
    }
  });
}

const observer = new IntersectionObserver(trigger, options)
observer.observe(document.getElementById('inter'))
observer.observe(document.getElementById('inter2'))
observer.observe(document.getElementById('inter3'))
observer.observe(document.getElementById('inter4'))
observer.observe(document.getElementById('inter5'))
