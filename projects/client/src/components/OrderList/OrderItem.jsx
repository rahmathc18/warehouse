import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Product from "./Product";
import { AiOutlineCamera } from "react-icons/ai";

const OrderItem = ({ data }) => {
  const [isSmallScreen] = useMediaQuery("(max-width: 666px)");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState(null);
  console.log(file);
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
        <Text>{data.order_status.status}</Text>
      </Flex>
      <Flex flexDir={"column"}>
        {data.transaction_items.map((item, i) => (
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
        <Button colorScheme="green" onClick={onOpen}>
          Upload bukti pembayaran
        </Button>
        <Button colorScheme="red">Batalkan Pesanan</Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload bukti pembayaran</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <label htmlFor="upload">
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                fontSize={"3xl"}
                cursor={"pointer"}
                border={"dashed"}
                p={"5"}
              >
                <input
                  type="file"
                  // value={file}
                  onChange={(e) => setFile(e.currentTarget.files[0])}
                  hidden
                  id="upload"
                />
                {file ? <Text>{file.name}</Text> : <AiOutlineCamera />}
              </Flex>
            </label>
          </ModalBody>

          <ModalFooter display={"flex"} justifyContent={"center"} w={"full"}>
            <Button colorScheme="blue" mr={3} onClick={() => {}}>
              Upload
            </Button>
            <Button variant="solid" colorScheme="red" onClick={onClose}>
              Batal
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};

export default OrderItem;
