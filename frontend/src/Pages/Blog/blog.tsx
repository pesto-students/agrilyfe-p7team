import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
} from "@chakra-ui/react";

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface BlogAuthorProps {
  date: Date;
  name: string;
}

export const BlogAuthor: React.FC<BlogAuthorProps> = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const BlogList = () => {
  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Stories by AgriLyfe:</Heading>
      <Box
        marginTop={{ base: "1", sm: "5" }}
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              <Image
                borderRadius="lg"
                src={
                  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: "3", sm: "0" }}
        >
          <BlogTags
            tags={["Agriculture", "Farmer", "Engineering", "Product"]}
          />
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
              Revolutionizing the Agriculture Industry through E-Commerce
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue("gray.700", "gray.200")}
            fontSize="lg"
          >
            AgriLyfe, the next-generation agriculture e-commerce platform, is
            ready to revolutionize the way the world perceives and interacts
            with the agriculture industry. It aims to bridge the gap between
            farmers, suppliers, and buyers, by offering an all-inclusive online
            marketplace that is user-friendly, feature-rich, and highly
            efficient.
          </Text>
          <BlogAuthor
            name="Vamsi krishna"
            date={new Date("2023-05-20T16:49:27Z")}
          />
        </Box>
      </Box>
      <Heading as="h2" marginTop="5">
        Latest articles
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="30px" marginTop="5">
        <WrapItem width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}>
          <Box w="100%">
            <Box borderRadius="lg" overflow="hidden">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                <Image
                  transform="scale(1.0)"
                  src={
                    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
                  }
                  alt="some text"
                  objectFit="contain"
                  width="100%"
                  transition="0.3s ease-in-out"
                  _hover={{
                    transform: "scale(1.05)",
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={["Engineering", "Product"]} marginTop="3" />
            <Heading fontSize="xl" marginTop="2">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Digitally Transforming Agriculture
              </Link>
            </Heading>
            <Text as="p" fontSize="md" marginTop="2">
              AgriLyfe is a next-generation agriculture e-commerce platform,
              transforming the traditional landscape of farming with its
              innovative online marketplace. By seamlessly connecting farmers,
              suppliers, and buyers, it enhances efficiency and transparency in
              the agricultural sector. The platform's extensive range of
              offerings includes agricultural products, services, and valuable
              industry information.
            </Text>
            <BlogAuthor
              name="Vamsi krishna"
              date={new Date("2023-05-20T19:01:27Z")}
            />
          </Box>
        </WrapItem>
      </Wrap>
      <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Heading as="h2">What we write about</Heading>
        <Text as="p" fontSize="lg">
          <strong> 1.Industry News and Trends:</strong> Regular updates on the
          latest happenings, technologies, and trends in the agriculture
          industry worldwide.
        </Text>
        <Text as="p" fontSize="lg">
          <strong>2.Product Information:</strong>Detailed descriptions and usage
          instructions for products available on the platform. This could
          include seeds, fertilizers, machinery, and more.
        </Text>
        <Text as="p" fontSize="lg">
          <strong>3.Farming Techniques:</strong> Guides and articles on various
          farming methods, such as organic farming, vertical farming,
          hydroponics, and more.
        </Text>
        <Text as="p" fontSize="lg">
          <strong>4.Sustainability in Agriculture:</strong> Discussions and
          insights into practices that promote sustainable and environmentally
          friendly farming.
        </Text>
        <Text as="p" fontSize="lg">
          <strong>5.Market Analysis:</strong> Information about pricing trends,
          demand-supply dynamics, and other factors affecting the agricultural
          marketplace.
        </Text>
        <Text as="p" fontSize="lg">
          <strong>6.Expert Advice: </strong>Articles, Q&As, and interviews
          featuring experienced farmers, agricultural scientists, and industry
          leaders sharing their expertise and advice.
        </Text>
        <Text as="p" fontSize="lg">
          <strong>7.Policy and Regulations:</strong>Updates and interpretations
          of agriculture-related laws and regulations.
        </Text>
        <Text as="p" fontSize="lg">
          <strong>8.Success Stories:</strong>Case studies and success stories of
          farmers and businesses who have thrived using the AgriLyfe platform.
        </Text>
        <Text as="p" fontSize="lg">
          <strong> 9.Farm-to-Table Movement:</strong> Information and insights
          into the growing trend of locally sourced food and its impact on the
          agriculture industry.
        </Text>
        <Text as="p" fontSize="lg">
          <strong>10.Agricultural Technology: </strong>The latest advancements
          in agri-tech like smart farming, precision agriculture, drone
          technology, and more.
        </Text>
      </VStack>
    </Container>
  );
};

export default BlogList;
