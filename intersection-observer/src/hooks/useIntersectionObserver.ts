import { useState, MutableRefObject, useEffect } from "react"

// export interface CustomProps {
//   element: MutableRefObject<null>
// }

const useInterObserverHook = (elements: MutableRefObject<Element>) => {
  const [status, setStatus] = useState(false)
  useEffect(() => {
    let observer = new IntersectionObserver((entries) => {
     
      const entry = entries[0]
      setStatus(entry.isIntersecting)
      console.log('entry', entry)
    }, {})
    observer.observe(elements.current)
    // elements.forEach(el => observer.observe(el.current))
  }, [])
  return { status }
}

export default useInterObserverHook