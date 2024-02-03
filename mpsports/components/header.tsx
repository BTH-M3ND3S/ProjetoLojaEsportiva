import React from "react";
import { ChakraProvider, Box, Input, InputGroup, InputLeftElement, Icon, Flex } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Image } from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, } from "@chakra-ui/react";
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon, } from "@chakra-ui/icons";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { Text, Link } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

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
    { label: "Feminino", link: "/feminino", category: "feminino" },
    { label: "Masculino", link: "/masculino", category: "masculino" },
    { label: "Equipamentos", link: "/equipamentos", category: "equipamentos" },
    { label: "Calçados", link: "/calcados", category: "calcados" },
    { label: "Acessórios", link: "/acessorios", category: "acessorios" },
    { label: "Marcas", link: "/marcas", category: "marcas" },
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
      <Box h={"7.5rem"} width={"100%"} display={"flex"} bgColor={"#00008B"}>
        <Box display={{ base: "none", md: "flex" }} alignItems={"center"} justifyContent={"center"} w={"25%"}>
          <Image boxSize='100px' objectFit='cover' src='data:image/jpeg;base64,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' alt='Dan Abramov' />
        </Box>
        <Box h={"100%"} w={"25%"} display={{ base: "flex", md: "none" }} alignItems={"center"} justifyContent={"center"}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} command="⌘T">
                
              </MenuItem>
              <MenuItem>
                <a href="">Home</a>
              </MenuItem>
              <MenuItem>
              <a href="">Home</a>
              </MenuItem>
              <MenuItem>
              <a href="">Home</a>
              </MenuItem>
              <MenuItem>
              <a href="">Home</a>
              </MenuItem>
              <MenuItem>
              <a href="">Home</a>
              </MenuItem>
              <MenuItem>
              <a href="">Home</a>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box h={"100%"} width={"50%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<Icon as={FaSearch} color="gray.300" />}
            />
            <Input placeholder=' Pesquise...'  _placeholder={{ color: 'white' }} color={"white"}/>
          </InputGroup>
        </Box>
        <Box h={"100%"} width={"25%"} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Icon as={FaShoppingCart} boxSize={6} color="white" margin="0 1rem" cursor="pointer" onClick={handleClickCart} />
          <Icon as={FaUser} boxSize={6} color="white" cursor="pointer" onClick={handleClickUser} />
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
    </ChakraProvider>
  );
}
export default Header;
