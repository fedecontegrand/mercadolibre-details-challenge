import React from "react";
import {Flex} from "@chakra-ui/layout";

import {Product} from "../types";
import mock from "../mock";
import SubNav from "../../app/components/SubNav";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({product = mock.product}) => {
  return (
    <Flex backgroundColor="#ededed" minHeight="100vh" padding="0 10rem" width="100%">
      <SubNav />
    </Flex>
  );
};

export default DetailsScreen;
