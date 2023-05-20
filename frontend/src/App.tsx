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
import Navbar from "./Components/Navbar/navbar";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import VerifyEmail from "./Pages/VerifyEmail";
import UserProfile from "./Pages/userProfile";
import ContactUs from "./Pages/ContactUs";
import Footer from "./Components/Footer";
import Success from "./Components/Success";
import Failed from "./Components/Failed";
import CheckoutPage from "./Pages/CheckOut";
import CartPage from "./Pages/ShoppingCart";
import HomePage from "./Pages/Home";

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
      <Navbar />
      <div style={{ marginTop: "60px", minHeight: "100vh" }}>
        <Routes>
          <Route path="" element={<Login />} />
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/verifyEmail" element={<VerifyEmail />} />
          <Route path="/contactUs" element={<ContactUs />} />

          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/success" element={<Success />} />
          <Route path="/failed" element={<Failed />} />
          <Route path="*" element={<Navigate to="/sigin" replace />} />
        </Routes>
      </div>
      <div style={{ bottom: 0, width: "100%" }}>
        <Footer />
      </div>
    </Router>
  </ChakraProvider>
);
