import React, { createContext, useMemo, useState } from 'react';

export const NameContext = createContext()
const MyContextProvider = ({children}) => {
    const [name , setName] = useState("?heee")
    const [show ,setShow] = useState(true)
    const [showPopup, setShowPopup] = useState(false)

    const passValue = useMemo(()=>({
        name,setName, show, setShow, showPopup, setShowPopup
    }),[name, setName, show, setShow, showPopup, setShowPopup])
  return (
        <NameContext.Provider value={passValue}>
            {children}
        </NameContext.Provider>
  )
}

export default MyContextProvider