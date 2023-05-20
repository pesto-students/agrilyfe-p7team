import React from "react";
import { Box, VStack, Text, Divider, HStack } from "@chakra-ui/react";

interface SummaryProps {
  price: number;
  items: number;
  discount: number;
  delivery: number;
}

const SummaryCard: React.FC<SummaryProps> = ({
  price,
  items,
  discount,
  delivery,
}) => {
  const total = price - discount + delivery;

  return (
    <Box
      p={5}
      boxShadow="md"
      borderWidth={1}
      borderRadius="md"
      bg="white"
      width="300px"
      height="fit-content"
    >
      <VStack align="stretch" spacing={6}>
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Summary
          </Text>
        </Box>
        <Divider />
        <Box>
          <HStack justifyContent="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Price:
            </Text>
            <Text fontSize="lg">{price.toFixed(2)}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Total items:
            </Text>
            <Text fontSize="lg">{items}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Discount:
            </Text>
            <Text fontSize="lg">{discount.toFixed(2)}</Text>
          </HStack>
          <HStack justifyContent="space-between">
            <Text fontSize="lg" fontWeight="semibold">
              Delivery charges:
            </Text>
            <Text fontSize="lg">{delivery.toFixed(2)}</Text>
          </HStack>
        </Box>
        <Divider />
        <Box>
          <HStack justifyContent="space-between">
            <Text fontSize="lg" fontWeight="bold">
              Total amount:
            </Text>
            <Text fontSize="lg" fontWeight="bold">{total.toFixed(2)}</Text>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default SummaryCard;
