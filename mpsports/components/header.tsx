import React from "react";
import { ChakraProvider, Box, Input, InputGroup, InputLeftElement, Icon, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, } from "@chakra-ui/react";
import { HamburgerIcon,} from "@chakra-ui/icons";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { Text, Link } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Image from "next/image";
import Img from '../images/logo.png'



const SubMenu = ({ category }) => {
  const categoryOptions = [
    { label: "Futebol", link: "/futebol" },
    { label: "Basquete", link: "/basquete" },
    { label: "Corrida", link: "/corrida" },
  ];

  return (
    <MenuList>
      {categoryOptions.map((option, index) => (
        <MenuItem key={index}>
          <Link href={option.link}>{option.label}</Link>
        </MenuItem>
      ))}
    </MenuList>
  );
};
function Header() {
  const [activeCategory, setActiveCategory] = useState(null);
  const menuOptions = [
    { label: "Home", link: "/" },
    { label: "Lançamento", link: "/Lançamentos", category: "feminino" },
    { label: "Ofertas", link: "/masculino", category: "masculino" },
    { label: "Feminino", link: "/equipamentos", category: "equipamentos" },
    { label: "Masculino", link: "/calcados", category: "calcados" },
    { label: "Infantil", link: "/acessorios", category: "acessorios" },
    { label: "Sobre", link: "/marcas", category: "marcas" },
  ];

  const handleClickCart = () => {
    console.log("Ícone de carrinho clicado");
  };

  const handleClickFav = () => {
    console.log("Ícone de Favoritos clicado");
  };
  return (
    <ChakraProvider>
      <Box h={"2rem"} display={{base: "none", md: "flex"}} justifyContent={"center"} bgColor={"black"} w={"100%"}>
        <Text color={"white"} fontWeight={"bold"}>
        "Desconto de 10% na sua primeira compra!"
        </Text>
        <a href="#" style={{color: 'blue'}}>Saiba Mais</a>
      </Box>
      <Box h={{ base: "4rem", md: "6.5rem"}} width={"100%"} display={"flex"} bgColor={"#00008B"}>
        <Box display={{ base: "block", md: "none" }} alignItems={"center"} justifyContent={"center"} w={{}}>
        <Image src={Img} style={{  width: "100%", height: "100%" }} alt='Dan Abramov' />
        </Box>
        <Box display={{ base: "none", md: "flex" }} alignItems={"center"} justifyContent={"center"} w={"25%"}>
        <Image src={Img} style={{ objectFit: "cover", width: "35%", height: "100%" }} alt='Dan Abramov' />
        </Box>
        <Box ml={{base: "15px", md:"0" }} h={"100%"} width={{base:"55", md:"50%"}} display={"flex"} alignItems={"center"} justifyContent={{base: "inititial", md: "center"}}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaSearch} color="gray.300" />}
            />
            <Input placeholder=' Pesquise...'  _placeholder={{ color: 'gray' }} bgColor={"white"} color={"black"} borderRadius={"20px"}/>
          </InputGroup  >
        </Box>
        <Box h={"100%"} width={"25%"} display={ {base: "none", md: "flex"}} alignItems={"center"} justifyContent={"end"}>
          <Link w={"7rem"} display={{base: "none", md: "flex"}} mr={"10px"} justifyContent={"center"} borderRadius={"5px"} padding={"6px"} bgColor={"white"} href="https://www.example.com" isExternal>
              Entrar
          </Link>
          <Icon as={FaHeart} boxSize={6} color="white" margin="0 1rem" cursor="pointer" onClick={handleClickFav} />
          <Icon as={FaShoppingCart} boxSize={6} color="white" margin="0 1rem" cursor="pointer" onClick={handleClickCart} />
          
        </Box>
        <Box display={ {base: "flex", md: "none"}} w={"20%"} justifyContent={"center"} alignItems={"center"}>
        <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              color={"white"}
            />
            <MenuList>
              <MenuItem display={{base: "flex", md: "none"}}>
              <Link w={"7rem"} display={{base: "flex", md: "none"}} color={"white"}  justifyContent={"center"} borderRadius={"5px"} padding={"6px"} bgColor={"black"} href="https://www.example.com" isExternal>
                Entrar
              </Link>
              </MenuItem>
              <MenuItem>
              <a href="/">Home</a>
              </MenuItem>
              <MenuItem>
              <a href="">Lançamentos</a>
              </MenuItem>
              <MenuItem>
              <a href="">Ofertas</a>
              </MenuItem>
              <MenuItem>
              <a href="">Feminino</a>
              </MenuItem>
              <MenuItem>
              <a href="">Masculino</a>
              </MenuItem>
              <MenuItem>
              <a href="">Infantil</a>
              </MenuItem>
              <MenuItem>
              <a href="">Sobre</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Box>
      <Box bgColor="#1E90FF" p={4} display={{ base: "none", md: "block" }}>
        <Flex align="center" justify="space-between" w={"100%"} h={"100%"}>
          {menuOptions.map((option, index) => (
            <Menu key={index}>
              <MenuButton
                as={Text}
                fontSize="md"
                fontWeight="bold"
                color="white"
                cursor="pointer"
                _hover={{bgColor: "#87CEFA"}}
                onClick={() => setActiveCategory(option.category)}
              >
                {option.label}
                {option.category && <ChevronDownIcon />}
              </MenuButton>
              {option.category && activeCategory === option.category && <SubMenu category={option.category} />}
            </Menu>
          ))}
        </Flex>
      </Box>
      <Box w={"100%"} h={"40px"} bgColor={"#00008B"} display={{base: "flex", md: "none"}}>
        <Box h={"100%"} width={"25%"} display={ {base: "flex", md: "none"}} alignItems={"center"} justifyContent={"center"}>

        </Box>
        <Box h={"100%"} width={"50%"} display={ {base: "flex", md: "none"}} alignItems={"center"} justifyContent={"center"}>

        </Box>
          <Box h={"100%"} width={"25%"} display={ {base: "flex", md: "none"}} alignItems={"center"} justifyContent={"center"}>
          <Icon as={FaShoppingCart} boxSize={6} color="white" margin="0 1rem" cursor="pointer" onClick={handleClickCart} />
          </Box>
          
      </Box>

    </ChakraProvider>
  );
}
export default Header;
