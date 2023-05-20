import React, { useState } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Image,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Fruitsimage from "../../assets/images/fruit.jpg";
import Vegetablesimage from "../../assets/images/veget.jpg";
import Dallsimage from "../../assets/images/dalls.jpg";
import Appleimage from "../../assets/images/apple.jpg";
import Bananaimage from "../../assets/images/banana.jpg";
import Mangoimage from "../../assets/images/mango.jpg";
import Guavaimage from "../../assets/images/goa.jpg";
import { Link } from "react-router-dom";

const products = [
  // dummy data
  {
    id: 1,
    name: "Fresh Apples",
    image: Appleimage,
    price: "4.99",
    description: "Juicy and fresh apples.",
  },
  {
    id: 2,
    name: "Organic Bananas",
    image: Bananaimage,
    price: "3.99",
    description: "High quality bananas.",
  },
  {
    id: 3,
    name: "Organic Mango's",
    image: Mangoimage,
    price: "3.99",
    description: "High quality bananas.",
  },
  {
    id: 4,
    name: "Organic Guava",
    image: Guavaimage,
    price: "3.99",
    description: "High quality bananas.",
  },
  {
    id: 5,
    name: "Fresh Apples",
    image: Appleimage,
    price: "4.99",
    description: "Juicy and fresh apples.",
  },
  {
    id: 6,
    name: "Organic Bananas",
    image: Bananaimage,
    price: "3.99",
    description: "High quality bananas.",
  },
  {
    id: 7,
    name: "Organic Mango's",
    image: Mangoimage,
    price: "3.99",
    description: "High quality bananas.",
  },
  {
    id: 8,
    name: "Organic Guava",
    image: Guavaimage,
    price: "3.99",
    description: "High quality bananas.",
  },
];

const carouselImages = [
  { image: Fruitsimage, name: " Fresh Fruits" },
  { image: Vegetablesimage, name: "Organic Vegetables" },
  { image: Dallsimage, name: "Organic Dalls" },
];

const HomePage = () => {
  const [quantity, setQuantity] = useState<number | null>(1);

  return (
    <Box>
      <Flex justify="center" p="6">
        <Heading>Welcome to Our Farm - Support Farmers</Heading>
      </Flex>
      <Text textAlign="center" my="6">
        We offer the freshest and highest quality produce!
      </Text>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        {carouselImages.map((image, index) => (
          <Box
            key={index}
            position="relative"
            maxHeight="50vh"
            overflow="hidden"
          >
            <img
              src={image.image}
              alt={`Slide ${index + 1}`}
              style={{ maxHeight: "100%", width: "100%", objectFit: "cover" }}
            />
            <Box
              position="absolute"
              right={0}
              bottom={0}
              bg="rgba(0,0,0,0.5)"
              color="white"
              p={3}
            >
              <Heading size="lg">{image.name}</Heading>
            </Box>
          </Box>
        ))}
      </Carousel>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing="6" p="6">
        {products.map((product) => (
          <Box key={product.id} p="5" shadow="md" borderWidth="1px">
            <Link to={`/productDetails/${product.id}`}>
            <Image
              borderRadius="md"
              src={product.image}
              alt={product.name}
              objectFit="cover"
              boxSize="200px"
            /></Link>
            <Flex justify="space-between">
              <Box mt="5">
                <Heading fontSize="xl">{product.name}</Heading>
                <Text mt="2">{product.description}</Text>
                <Text mt="3">Support Farmers</Text>
              </Box>
              <Box mt="4">
                <Heading fontSize="xl">
                  Price: &nbsp; &#8377;{product.price}
                </Heading>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="xl" mr="2">
                    Quantity
                  </Text>
                  <NumberInput
                    min={1}
                    max={10}
                    value={Number(quantity)}
                    onChange={(valueString, valueNumber) =>
                      setQuantity(valueNumber)
                    }
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
                <Button colorScheme="yellow" mt="2" mr="2">
                  Add to cart
                </Button>
                <Button colorScheme="green" mt="2">
                  Buy Now
                </Button>
              </Box>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default HomePage;
