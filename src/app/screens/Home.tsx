import React from "react";
import {Text} from "@chakra-ui/react";
import {Link} from "react-router-dom";

const HomeScreen: React.FC = () => {
  return (
    <div>
      <Text>{`<HomeScreen />`}</Text>
      <br />
      <Link to="/productId">Ver página de detalle de producto</Link>
    </div>
  );
};

export default HomeScreen;
