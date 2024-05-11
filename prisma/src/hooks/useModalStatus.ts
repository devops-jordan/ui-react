import { useState } from "react"

const useModalHook = () => {
  const [active, setState] = useState<boolean>(false)

  const closeModal = () => {
    setState(false)
  }
  const openModal = () => {
    setState(true)
  }

  return { active, closeModal, openModal }
}

export default useModalHook