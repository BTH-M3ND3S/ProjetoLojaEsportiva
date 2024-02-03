import React from 'react';
import Header from '../components/header';
import Carrossel from '../components/carrossel';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";


function home(){
    return(
        <ChakraProvider>
        <CSSReset />
        <Header />
        <Carrossel/>
      </ChakraProvider>
    )
}
export default home;