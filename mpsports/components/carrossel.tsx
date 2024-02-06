import React, { useState } from "react";
import { ChakraProvider, Flex, Button, Image } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
const images = [
  "https://scontent-gru2-2.xx.fbcdn.net/v/t39.30808-6/425853169_3612003439047448_3329244649174627748_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeGjEX7M5N-PG8xvTXVVIgNlRx1X12vOIYRHHVfXa84hhOIvSdiBzzIpXJAosrQKYheIqAbryj9uROBI7gaISpID&_nc_ohc=pulnODm98c4AX978OTT&_nc_ht=scontent-gru2-2.xx&oh=00_AfDLQ13LbBSXgdhEIcvwgeM41GuNikciuH0_d_nWXxdE-A&oe=65C63400",
  "https://cdn.pixabay.com/photo/2015/11/10/08/31/banner-1036483_640.jpg",
  "https://cdn.pixabay.com/photo/2016/09/04/20/14/sunset-1645103_640.jpg",
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
        height={{base: "6.2rem", md: "20rem"}}
        w="100%"
        maxW="100vw"
        overflow="hidden"
        position="relative"
        align="center"
        justify="center"
        bgColor={"orange.200"}
      >
        <Image src={images[currentImage]} alt={`Slide ${currentImage + 1}`} w="100%" />
        <Button
          position="absolute"
          left="0"
          top="50%"
          transform="translateY(-50%)"
          ml={4}
          onClick={handlePrev}
          variant="ghost"
          color={"white"}
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
          color={"white"}
        >
          <ChevronRightIcon w={8} h={8} />
        </Button>
      </Flex>
    </ChakraProvider>
  );
};

export default Carousel;
