import React, { useState, useEffect } from "react";
import {
  Box,
  Text,
  VStack,
  NumberInput,
  NumberInputField,
  Button,
  Image,
  Flex,
  Divider,
} from "@chakra-ui/react";
import SummaryCard from "./summaryCard";
import { useNavigate } from "react-router-dom";

const cartItems = [
  {
    name: "Product 1",
    quantity: 2,
    price: 20,
    inStock: true,
    imageUrl: "https://via.placeholder.com/100",
  },
  {
    name: "Product 2",
    quantity: 1,
    price: 30,
    inStock: false,
    imageUrl: "https://via.placeholder.com/100",
  },
];

const CartPage: React.FC = () => {
    const navigate = useNavigate();
  const [quantities, setQuantities] = useState(
    cartItems.map((item) => item.quantity)
  );
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let newTotal = 0;
    cartItems.forEach((item, index) => {
      newTotal += item.price * quantities[index];
    });
    setTotal(newTotal);
  }, [quantities]);

  const handleQuantityChange = (
    index: number,
    valueAsString: string,
    valueAsNumber: number
  ) => {
    const newQuantities = [...quantities];
    newQuantities[index] = valueAsNumber;
    setQuantities(newQuantities);
  };

  return (
    <Flex direction={["column", "row"]} gap={5} p={5}>
      <VStack spacing={5} flex="2">
        <Text fontSize="2xl">Shopping Cart</Text>
        {cartItems.map((item, index) => (
          <Box
            key={index}
            p={3}
            border="1px"
            borderColor="gray.200"
            borderRadius="md"
            w="100%"
          >
            <Flex>
              <Image boxSize="100px" src={item.imageUrl} alt={item.name} />
              <VStack ml={5} align="start">
                <Text>{item.name}</Text>
                <Text>{item.inStock ? "In Stock" : "Out of Stock"}</Text>
                <NumberInput
                  min={1}
                  max={10}
                  value={quantities[index]}
                  onChange={(valueAsString, valueAsNumber) =>
                    handleQuantityChange(index, valueAsString, valueAsNumber)
                  }
                >
                  <NumberInputField />
                </NumberInput>
                <Text>Price: {item.price}</Text>
              </VStack>
            </Flex>
          </Box>
        ))}
        <Button colorScheme="teal" onClick={() =>navigate("/checkout")}>Proceed to Checkout</Button>
      </VStack>
        <SummaryCard price={0} items={0} discount={0} delivery={0} />
    </Flex>
  );
};

export default CartPage;
