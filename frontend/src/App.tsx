import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import { Login } from "./Pages/Login/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import SignUp from "./Pages/SignUp/signUp";
import Testimonial from "./Pages/Testimonials/testimonial";
import Pricing from "./Pages/Pricing/pricing";
import ProductDetails from "./Pages/ProductDetails/productDetails";
import BlogList from "./Pages/Blog/blog";
import Header from "./Pages/Header/header";

export const App = () => (
  <ChakraProvider theme={theme}>
    {/* <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box> */}
    <Router>
      <Header />
      {/* <Box p={5}> */}
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/sigin" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/productDetails" element={<ProductDetails />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="*" element={<Navigate to="/sigin" replace />} />
      </Routes>
      {/* </Box> */}
    </Router>
  </ChakraProvider>
);
