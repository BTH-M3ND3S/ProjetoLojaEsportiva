import React from 'react';
import Header from '../components/header';
import Carrossel from '../components/carrossel';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import Produtos1 from '../components/produtos1';


function home(){
    return(
        <ChakraProvider>
        <CSSReset />
        <Header />
        <Carrossel/>
        <Produtos1/>
      </ChakraProvider>
    )
}
export default home;