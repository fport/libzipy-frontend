import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react"
import Router from './app/Router'
import customTheme from "./app/theme/";


ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <Router />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
