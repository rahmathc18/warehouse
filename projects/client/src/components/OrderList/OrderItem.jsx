import { Box, Button, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Product from "./Product";

const OrderItem = ({ data }) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 666px)");

  return (
    <Flex
      flexDirection={"column"}
      mx="2"
      mt="5"
      border={"2px"}
      rounded={"xl"}
      borderColor={"gray.400"}
    >
      <Flex
        justifyContent={"space-between"}
        alignItems={"center"}
        p={"2"}
        borderBottom={"2px"}
        borderColor={"gray.200"}
      >
        <Text>#{data.id}</Text>
        <Text>{data.status}</Text>
      </Flex>
      <Flex flexDir={"column"}>
        {data.products.map((item, i) => (
          <Product data={item} key={i} />
        ))}
      </Flex>
      <Flex
        p={"2"}
        flexDirection={isSmallScreen ? "column" : "row"}
        gap={"2"}
        justifyContent={"space-between"}
        borderTop={"2px"}
        borderColor={"gray.200"}
      >
        <Button colorScheme="green">Upload bukti pembayaran</Button>
        <Button colorScheme="red">Batalkan Pesanan</Button>
      </Flex>
    </Flex>
  );
};

export default OrderItem;
