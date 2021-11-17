import React, {useEffect, useState} from "react";
import {Box} from "@chakra-ui/layout";

import mock from "../../product/mock";

import Imagenes from "./Imagenes";
import TarjetaProd from "./TarjetaProd";

function ProductContainer() {
  const all = mock.getproduct();

  return (
    <Box
      backgroundColor="white"
      direction="row"
      display="flex"
      justifyContent="space-between"
      padding="1rem"
    >
      <Imagenes pictures={all.pictures} />
      <TarjetaProd
        condition={all.condition}
        price={all.price}
        sold_quantity={all.sold_quantity}
        title={all.title}
      />
    </Box>
  );
}

export default ProductContainer;
