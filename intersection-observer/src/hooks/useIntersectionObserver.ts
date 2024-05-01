import { useState, MutableRefObject, useEffect } from "react"

// export interface CustomProps {
//   element: MutableRefObject<null>
// }

const useInterObserverHook = (element: MutableRefObject<Element>) => {
  const [componentVisibility, setComponentVisibility] = useState(false)
    useEffect(()=>{
      let observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        setComponentVisibility(entry.isIntersecting)
        console.log('entry', entry)
      }, {})
      observer.observe(element.current)
    },[])
  return { componentVisibility }
}

export default useInterObserverHook