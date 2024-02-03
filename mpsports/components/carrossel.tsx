import React, { useState } from "react";
import { ChakraProvider, Flex, Button, Image } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const images = [
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROem_CMc6xfoeYvzc9UCEBB03wFO47qwhTXg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGzRvxIxFg_rCu_nJhAsevjUDDrN3P_9SJD_R1MDjCfGXtxgvK6onUlRWL_fsr0-Xs6w&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN6ppv-MawhKKiG-beOevvuqdtynSHBaM3nQ&usqp=CAU",
];

const Carousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <ChakraProvider>
      <Flex
      height="20rem"
        w="100%"
        maxW="100vw"
        overflow="hidden"
        position="relative"
        align="center"
        justify="center"
      >
        <Image src={images[currentImage]} alt={`Slide ${currentImage + 1}`} maxW="100%" />
        <Button
          position="absolute"
          left="0"
          top="50%"
          transform="translateY(-50%)"
          ml={4}
          onClick={handlePrev}
          variant="ghost"
        >
          <ChevronLeftIcon w={8} h={8} />
        </Button>
        <Button
          position="absolute"
          right="0"
          top="50%"
          transform="translateY(-50%)"
          mr={4}
          onClick={handleNext}
          variant="ghost"
        >
          <ChevronRightIcon w={8} h={8} />
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default Carousel;