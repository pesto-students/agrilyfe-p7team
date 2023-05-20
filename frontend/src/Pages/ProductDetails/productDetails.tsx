import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  HStack,
  Tag,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import apple from "../../assets/images/apple.jpg";
import { useState } from "react";

const product = {
  id: 1,
  name: "Apple",
  description: "A fresh apple from the best orchards",
  price: 31.5,
  imageUrl: apple,
  benefits:
    "Apples are an incredibly nutritious fruit that offers multiple health benefits. They're rich in fiber and antioxidants. Eating them is linked to a lower risk of many chronic conditions, including diabetes, heart disease, and cancer. Apples may also promote weight loss and improve gut and brain health.",
  Product_Info: {
    EAN_Code: "100000740",
    Sourced_Marketed_by: "Farmer",
    Country: "India",
    harvested: "Best before 3 days from delivery date",
    Queries: "Call +91-1860 123 1000",
    Address: "Nagulavaram Village, Bogole, Nellore, Andhra Pradesh, India",
    pinCode: "560016",
    Email: "customerservice@agrilyfe.com",
  },
  reviews: [
    { userName: "John", rating: 4, text: "Great taste!" },
    { userName: "Emma", rating: 5, text: "My kids loved this apple!" },
  ],
};

export default function ProductDetails() {
  const [quantity, setQuantity] = useState<number | null>(1);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.imageUrl}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.name} &nbsp; &#8377; &nbsp;{product.price}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue("gray.500", "gray.400")}
                fontSize={"2xl"}
                fontWeight={"300"}
              >
                {product.description}
              </Text>
              <Text fontSize={"xl"}>Benefits</Text>
              <Text fontSize={"lg"}>{product.benefits}</Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    EAN Code:
                  </Text>{" "}
                  {product.Product_Info.EAN_Code}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Sourced:
                  </Text>{" "}
                  {product.Product_Info.Sourced_Marketed_by}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Country:
                  </Text>{" "}
                  {product.Product_Info.Country}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Harvested:
                  </Text>{" "}
                  {product.Product_Info.harvested}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Queries:
                  </Text>{" "}
                  {product.Product_Info.Queries}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Address:
                  </Text>{" "}
                  {product.Product_Info.Address}
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Pin Code:
                  </Text>{" "}
                  {product.Product_Info.pinCode}
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Box display="flex" alignItems="center">
            <Text fontSize="xl" mr="2">
              Quantity
            </Text>
            <NumberInput
              min={1}
              max={10}
              value={Number(quantity)}
              onChange={(valueString, valueNumber) => setQuantity(valueNumber)}
              size="sm"
              w="60px"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </Box>
          <HStack spacing={4}>
            <Button colorScheme="yellow">Add to cart</Button>
            <Button colorScheme="green">Buy Now</Button>
          </HStack>
          <Stack direction="row" alignItems="left" justifyContent={"left"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
      <VStack align="start" spacing={5}>
        <Text fontSize="xl">Reviews</Text>
        {product.reviews.map((review, index) => (
          <Box key={index} p="5" shadow="md" borderWidth="1px">
            <HStack justifyContent="space-between">
              <Text>{review.userName}</Text>
              <HStack>
                {Array(5)
                  .fill("")
                  .map((_, i) => (
                    <Tag
                      size="lg"
                      key={i}
                      variant="solid"
                      colorScheme={i < review.rating ? "teal" : "gray"}
                    >
                      ★
                    </Tag>
                  ))}
              </HStack>
            </HStack>
            <Text mt={2}>{review.text}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
}
