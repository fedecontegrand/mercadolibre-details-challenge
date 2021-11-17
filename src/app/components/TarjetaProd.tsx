import React from "react";
import {Box, Flex, Stack, StackDivider, Text} from "@chakra-ui/layout";
import {Image} from "@chakra-ui/image";
import {Button} from "@chakra-ui/button";

import {Product} from "../../product/types";

interface Props {
  condition: Product["condition"];
  price: Product["price"];
  sold_quantity: Product["sold_quantity"];
  title: Product["title"];
}

function TarjetaProd({condition, price, sold_quantity, title}: Props) {
  return (
    <Box border="1px solid" borderColor="gray.200" borderRadius="lg" padding="1rem" width="40%">
      <Stack direction="row" divider={<StackDivider borderColor="gainsboro" />}>
        <Text color="gray" fontSize="sm" fontWeight="light">
          {condition === "new" ? "Nuevo" : "Usado"}
        </Text>
        <Text color="gray" fontSize="sm" fontWeight="light">
          {sold_quantity} vendidos
        </Text>
      </Stack>
      <Flex justifyContent="space-between" spacing="4rem">
        <h1 style={{fontSize: "22px", display: "flex", justifyContent: "left", fontWeight: "bold"}}>
          {title}
        </h1>
        <Image
          borderColor="blue"
          height="1.5rem"
          src="https://cdn-icons-png.flaticon.com/512/833/833300.png"
          width="1.5rem"
        />
      </Flex>
      <Text fontSize="3xl" fontWeight="light">
        $ {price}
      </Text>
      <Box display="flex" flexDirection="column">
        <Button backgroundColor="blue.300" marginBottom="1rem">
          Comprar ahora
        </Button>
        <Button backgroundColor="blue.50">Agregar al carrito</Button>
      </Box>
    </Box>
  );
}

export default TarjetaProd;
