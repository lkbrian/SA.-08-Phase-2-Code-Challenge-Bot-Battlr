import { Flex, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      width={"100%"}
      bg={"blue.500"}
      color={"white"}
      h={"70px"}
      justify={"space-between"}
      alignItems={'center'}
      px={'40px'}
      mb={'20px'}
    >
        <Heading>BOTBATTLR</Heading>
        <Flex fontSize={'lg'} fontWeight={'bold'}gap={"20px"}>
        <NavLink to={'/'}>Botcollection </NavLink>
      <NavLink to={'/YourBotArmy'}>YourBotarmy </NavLink>
        </Flex>
    </Flex>
  );
}

export default Navbar;
