import React, {useEffect, useState} from "react";
import {Flex} from "@chakra-ui/layout";

import SubNav from "../../app/components/SubNav";
import mock from "../mock";
import {Product} from "../types";
import ProductContainer from "../../app/components/ProductContainer";

const DetailsScreen: React.FC = () => {
  return (
    <Flex
      backgroundColor="#ededed"
      direction="column"
      minHeight="100vh"
      padding="0 10rem"
      width="100%"
    >
      <SubNav />
      <ProductContainer />
    </Flex>
  );
};

export default DetailsScreen;
