import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const fonts = {
  body: "Tahoma"
}
const theme = extendTheme(fonts)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App  fontFamily={theme.fonts}/>
    </ChakraProvider>
  </React.StrictMode>,
)
