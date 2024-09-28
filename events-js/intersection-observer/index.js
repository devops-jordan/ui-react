const options = {
  // root: document.getElementById('body'),
  rootMargin: "0px",
  threshold: 0.5
}
const trigger = (entries, observer) => {
  entries.forEach(element => {
    console.log(element.time)

    if (element.isIntersecting) {
      if (element.target.id === "inter") {
        element.target.classList.add('loaded')
      }
      if (element.target.id === "inter2") {
        element.target.classList.add('fade-in')
      }
      if (element.target.id === "inter3") {
        element.target.classList.add('animated')
      }

      //TODO: restart for everyone
      // observer.unobserve(element.target)
    } else {
      if (element.target.id === "inter") {
        element.target.classList.remove('loaded')
      }
      if (element.target.id === "inter2") {
        element.target.classList.remove('fade-in')
      }
      if (element.target.id === "inter3") {
        element.target.classList.remove('animated')
      }

    }
  });
}

const observer = new IntersectionObserver(trigger, options)
observer.observe(document.getElementById('inter'))
observer.observe(document.getElementById('inter2'))
observer.observe(document.getElementById('inter3'))
observer.observe(document.getElementById('inter4'))
observer.observe(document.getElementById('inter5'))
