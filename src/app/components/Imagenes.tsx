import React, {useState} from "react";
import {Box, Stack} from "@chakra-ui/layout";
import {Image} from "@chakra-ui/image";

import {Product, ProductPicture} from "../../product/types";

interface Props {
  pictures: Product["pictures"];
}

function Imagenes({pictures}: Props) {
  const [state, setState] = useState<ProductPicture>(pictures[0]);

  const handleClick = (p: ProductPicture) => {
    setState(p);
  };

  return (
    <Box display="flex" flex="1/8 7/8" width="6xl">
      <Stack direction="column" spacing="1rem" width="4rem">
        {pictures.map((p) => (
          <Image
            key={p.id}
            border="2px solid"
            borderColor={state.id === p.id ? "blue.400" : "gainsboro"}
            borderRadius="5px"
            cursor="pointer"
            height="3rem"
            src={p.url}
            width="3rem"
            onClick={() => handleClick(p)}
          />
        ))}
      </Stack>
      <Image maxHeight="600px" objectFit="contain" src={state.url} width="900px" />
    </Box>
  );
}

export default Imagenes;
