import React from "react";
import {Stack, Box} from "@chakra-ui/react";

import Routes from "./routes";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column">
      <NavBar />
      <Routes />
    </Box>
  );
};

export default App;
