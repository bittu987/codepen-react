import React from 'react'
import { createContext ,useState} from 'react'

 export const DataContext =  createContext();

function DataProvider({children}) {
     const [HTML,setHTML] = useState('');
     const [CSS,setCSS] = useState('');
     const [JS,setJS] = useState('');


  return (
     <DataContext.Provider value={{
          HTML,
          setHTML,
          CSS,
          setCSS,
          JS,
          setJS
     }}>
        {children}
     </DataContext.Provider>
  )
}

export default DataProvider