import {Input} from "@chakra-ui/input";
import {Box, Stack, Divider} from "@chakra-ui/layout";
import {Checkbox, Button, Image, Text} from "@chakra-ui/react";
import React, {Props, ReactElement} from "react";

import logo from "../../assets/logo.png";
import lupa from "../../assets/lupa.png";
import mapa from "../../assets/mapa.png";
import carrito from "../../assets/carrito.png";

const items = ["Categorias", "Ofertas", "Historial", "Supermecado", "Moda", "Vender", "Ayuda"];

export default function NavBar(): ReactElement {
  return (
    <Box
      backgroundColor={"primary.500"}
      boxShadow="md"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      margin={0}
      padding="0.25rem 10rem 1rem 10rem"
    >
      <Stack
        alignItems="center"
        flexDirection="row"
        height="2.5rem"
        justifyContent="space-between"
        paddingBottom="5px"
        width="100%"
      >
        <Image src={logo} />
        <Box
          backgroundColor="white"
          boxShadow="sm"
          display="flex"
          flexDirection="row"
          margin={"0 1rem"}
          padding="5px 0 0 0"
          width="2xl"
        >
          <Input border="0" placeholder="Busca productos, marcas, y más..." type="text" />
          <Box alignItems="center" display="flex" flexDirection="row">
            <Divider margin="20px 0" orientation="vertical" />
            <Checkbox />
            <Text color="grey" fontSize="sm" marginLeft="5px" width="7rem">
              Solo en peluches
            </Text>
            <Divider orientation="vertical" />
          </Box>
          <Button backgroundColor="transparent">
            <Image height="1rem" src={lupa} width="fit-content" />
          </Button>
        </Box>
        <Image
          height="2.5rem"
          src={"https://http2.mlstatic.com/D_NQ_877425-MLA47306668299_082021-OO.webp"}
        />
      </Stack>
      <Stack
        alignItems="center"
        color="grey"
        flexDirection="row"
        fontSize="smaller"
        fontWeight="light"
        height="2.5rem"
        justifyContent="space-between"
        paddingTop="10px"
        width="100%"
      >
        <Box alignItems="center" display="flex">
          <>
            <Image backgroundColor="transparent" height="2rem" src={mapa} />
          </>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Text color="gray" fontSize="small">
              Enviar a
            </Text>
            <Text color="gray.900">Capital Federal</Text>
          </Box>
        </Box>
        <Stack
          alignItems="center"
          display="flex"
          flexDirection="row"
          gap="10px"
          justifyContent="left"
          width="2xl"
        >
          {items.map((item) => (
            <Text key={item} paddingRight="1rem">
              {item}
            </Text>
          ))}
        </Stack>
        <Stack
          alignItems="center"
          color="black"
          display="flex"
          flexDirection="row-reverse"
          fontSize="me"
          justifyContent="space-between"
          width="25%"
        >
          <Image height="1.25rem" src={carrito} />
          <Text>Mis Compras</Text>
          <Text>Ingresa</Text>
          <Text>Crea tu cuenta</Text>
        </Stack>
      </Stack>
    </Box>
  );
}
