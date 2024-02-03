import React from "react";
import { ChakraProvider, Box, Input, InputGroup, InputLeftElement, Icon, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, } from "@chakra-ui/react";
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon, } from "@chakra-ui/icons";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Text, Link } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { Button } from "@chakra-ui/react";
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

  const handleClickUser = () => {
    console.log("Ícone de usuário clicado");
  };
  return (
    <ChakraProvider>
      <Box h={"2rem"} display={{base: "none", md: "flex"}} justifyContent={"center"} bgColor={"orange.300"} w={"100%"}>
        <Text>
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
        <Box h={"100%"} width={"50%"} display={"flex"} alignItems={"center"} justifyContent={{base: "inititial", md: "center"}}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaSearch} color="gray.300" />}
            />
            <Input placeholder=' Pesquise...'  _placeholder={{ color: 'gray' }} bgColor={"white"} color={"black"} borderRadius={"20px"}/>
          </InputGroup  >
        </Box>
        <Box h={"100%"} width={"25%"} display={ {base: "none", md: "flex"}} alignItems={"center"} justifyContent={"end"}>
          <Icon as={FaShoppingCart} boxSize={6} color="white" margin="0 1rem" cursor="pointer" onClick={handleClickCart} />
          <Button w={"7rem"} display={{base: "none", md: "flex"}} mr={"20px"}><a href="/login"></a>Entrar</Button>
        </Box>
        <Box display={ {base: "flex", md: "none"}} w={"25%"}>

        </Box>
      </Box>
      <Box bgColor="#1E90FF" p={4} display={{ base: "none", md: "block" }}>
        <Flex align="center" justify="space-between">
          {menuOptions.map((option, index) => (
            <Menu key={index}>
              <MenuButton
                as={Text}
                fontSize="md"
                fontWeight="bold"
                color="white"
                cursor="pointer"
                _hover={{ textDecoration: "underline" }}
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
              <Button bgColor={"black"} color={"white"} borderRadius={""}><a href="/login">Entrar</a></Button>
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
          <Box h={"100%"} width={"72%"} display={ {base: "flex", md: "none"}} alignItems={"center"} justifyContent={"center"}>

          </Box>


          <Box h={"100%"} width={"18%"} display={ {base: "flex", md: "none"}} alignItems={"center"} justifyContent={"center"}>
            <Icon as={FaShoppingCart} boxSize={6} color="white" margin="0 1rem" cursor="pointer" onClick={handleClickCart} />
          </Box>

      </Box>
    </ChakraProvider>
  );
}
export default Header;
