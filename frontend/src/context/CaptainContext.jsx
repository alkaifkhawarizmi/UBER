import React, { createContext, useState } from 'react'

const CaptainContext = createContext()
export const CaptainProvider = ({children}) => {

  const [captain, setCaptain] = useState(null)

  return (
    <CaptainContext.Provider value={{captain, setCaptain}} >
      {children}
      </CaptainContext.Provider>
  )

}

export default CaptainContext