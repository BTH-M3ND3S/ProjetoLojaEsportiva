import React from 'react';
import Header from '../components/header';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";


function home(){
    return(
        <ChakraProvider>
        <CSSReset />
        <Header />
      </ChakraProvider>
    )
}
export default home;