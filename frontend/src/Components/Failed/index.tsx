import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function Failed() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
    >
      <Box textAlign="center" py={10} px={6}>
        <Box
          width="40px"
          height="40px"
          borderRadius="50%"
          backgroundColor="red.500"
          color="white"
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginRight="auto"
          marginLeft="auto"
        >
          <CloseIcon />
        </Box>
        <Heading as="h2" size="xl" mt={6} mb={2}>
        Payment is Failed and Order is not Placed
        </Heading>
        <Text color={"gray.500"}>
          Please Re-Order Again
          In Case Money Dedicted will be Credited back to you Account
        </Text>
      </Box>
    </Box>
  );
}
