import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useBreakpointValue,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import CartPage from "../ShoppingCart";

type FormData = {
  name: string;
  email: string;
  city: string;
  pinCode: number;
  house: string;
  landmark: string;
  state: string;
  country: string;
};

const CheckoutPage: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit: SubmitHandler<FormData> = (data: any) => console.log(data);

  const formWidth = useBreakpointValue({ base: "90%", md: "60%", lg: "40%" });

  return (
    <>
      <Grid
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
        gap={6}
      >
        <GridItem>
          <VStack spacing={5} width={formWidth} mx="auto">
            <Text fontSize="2xl" fontWeight="bold">
              Add Address
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                templateColumns={{
                  base: "repeat(1, 1fr)",
                  md: "repeat(2, 1fr)",
                }}
                gap={6}
              >
                <GridItem>
                  <FormControl id="name" isRequired>
                    <FormLabel>Name</FormLabel>
                    <Input {...register("name", { required: true })} />
                  </FormControl>
                  <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type="email"
                      {...register("email", { required: true })}
                    />
                  </FormControl>
                  <FormControl id="city" isRequired>
                    <FormLabel>City</FormLabel>
                    <Input {...register("city", { required: true })} />
                  </FormControl>
                  <FormControl id="pinCode" isRequired>
                    <FormLabel>PinCode</FormLabel>
                    <Input {...register("pinCode", { required: true })} />
                  </FormControl>
                </GridItem>
                <GridItem>
                  <FormControl id="House Name/No" isRequired>
                    <FormLabel>House Address/No</FormLabel>
                    <Input {...register("house", { required: true })} />
                  </FormControl>
                  <FormControl id="landmark" isRequired>
                    <FormLabel>Landmark</FormLabel>
                    <Input {...register("landmark", { required: true })} />
                  </FormControl>
                  <FormControl id="state" isRequired>
                    <FormLabel>State</FormLabel>
                    <Input {...register("state", { required: true })} />
                  </FormControl>
                  <FormControl id="country" isRequired>
                    <FormLabel>Country</FormLabel>
                    <Input {...register("country", { required: true })} />
                  </FormControl>
                </GridItem>
              </Grid>
              <Button mt={4} colorScheme="teal" type="submit">
                Checkout
              </Button>
            </form>
          </VStack>
        </GridItem>
        <GridItem>
          {/* <SummaryCard price={0} items={0} discount={0} delivery={0} /> */}
          <CartPage />
        </GridItem>
      </Grid>
    </>
  );
};

export default CheckoutPage;
