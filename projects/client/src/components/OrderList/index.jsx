import { Box, useMediaQuery } from "@chakra-ui/react";
import React, { useState } from "react";
import OrderItem from "./OrderItem";

const OrderList = () => {
  const [isSmallScreen] = useMediaQuery("(max-width: 666px)");
  const [orders, setOrders] = useState([
    {
      id: 250,
      status: "Menunggu Pembayaran",
      products: [
        {
          img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
          name: "Jam Tangan Warna Putih",
          qty: 2,
          price: 200000,
          total: 400000,
        },
        {
          img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
          name: "Jam Tangan Warna Putih",
          qty: 2,
          price: 200000,
          total: 400000,
        },
      ],
      total_price: 418000,
      shipping: 18000,
    },
  ]);
  const [filter, setFilter] = useState("");

  return (
    <Box display={"flex"} flexDirection={"column"}>
      {orders.map((item, i) => (
        <OrderItem key={i} data={item} />
      ))}
    </Box>
  );
};

export default OrderList;
