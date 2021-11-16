import React from "react";
import {Stack, Box} from "@chakra-ui/react";

import Routes from "./routes";
import NavBar from "./components/NavBar";

const App: React.FC = () => {
  return (
    <Box display="flex" flexDirection="column" gap="0">
      <NavBar />
      <Box>
        <Routes />
      </Box>
    </Box>
  );
};

export default App;
