import { Button, Flex, Heading, Stack, Text, Divider } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CheckoutSummary = (props) => {
  const { cartQty, totalPrice, shipmentCost } = props;
  return (
    <Stack
      spacing="5"
      rounded="lg"
      padding="8"
      width="full"
      backgroundColor={"#DEE2E6"}
    >
      <Heading size="md">Order Summary</Heading>
      <Divider orientation="horizontal" />
      <Stack spacing="6">
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Shipment Cost
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            Rp
            {Intl.NumberFormat("id-ID").format(shipmentCost)}
          </Text>
        </Flex>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            Rp
            {Intl.NumberFormat("id-ID").format(+totalPrice + +shipmentCost)}
          </Text>
        </Flex>
      </Stack>
      <Button
        colorScheme="blue"
        size="lg"
        fontSize="md"
        rightIcon={<FaArrowRight />}
        as={Link}
        to={"/checkout"}
      >
        Choose Payment Method
      </Button>
    </Stack>
  );
};
