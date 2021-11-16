import React from "react";
import PropTypes from "prop-types";
import {Box, Divider, Link, Stack, StackDivider, Text} from "@chakra-ui/layout";
import {ChevronRightIcon} from "@chakra-ui/icons";

const intereses = ["muñeca", "casa de barbie", "burbujero", "juguetes ninos", "lego"];

function SubNav() {
  return (
    <Box padding={"1rem 0"} width="100%">
      <Box>
        <Text display="flex" fontSize="14px" fontWeight="bolder">
          Tambien puede interesarte:<pre> </pre>
          <Text fontWeight="light">
            {intereses.map((int) => (
              <span key={int}> {`${int} -`}</span>
            ))}
          </Text>
        </Text>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        fontSize="14px"
        justifyContent="space-between"
        paddingTop="1rem"
      >
        <Box alignItems="center" display="flex">
          <Text paddingRight="1rem">Volver al listado</Text>
          <Divider colorScheme="red" orientation="vertical" />
          <Link to="/">Juegos y Juguetes</Link>
          <ChevronRightIcon />
          <Link to="/">Peluches</Link>
          <ChevronRightIcon />
          <Link to="/">Stich</Link>
        </Box>
        <Box display="flex">
          <Stack direction="row" divider={<StackDivider borderColor="gainsboro" />}>
            <Link to="/">Compartir</Link>
            <Link to="/">Vender uno igual</Link>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

SubNav.propTypes = {};

export default SubNav;
