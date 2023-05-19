import { useState, useRef } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  IconButton,
  InputGroup,
  InputRightElement,
  useDisclosure,
} from "@chakra-ui/react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { OAuthButtonGroup } from "./OAuthButtonGroup";
import { useNavigate } from "react-router-dom";
import { post } from "../../shared/services/apiService";
import { toast } from "react-toastify";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isOpen, onToggle } = useDisclosure();
  const [rememberMe, setRememberMe] = useState(false);

  const inputRef = useRef(null);

  const onClickReveal = () => {
    onToggle();
  };

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  // sign in logic goes here
  const signIn = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    console.log(`Email: ${email}, Password: ${password}`);
    try {
      event.preventDefault();
      if (email && password) {
        const payLoad = {
          email: email,
          password:password
        };
        const response: any = await post("/api/auth/signin", payLoad);
        if (response?.accessToken) {
          navigate("/dashboard");
          toast.success(`Welcome  ${response?.firstName}`, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 5000,
          });
          if (rememberMe) {
            localStorage.setItem("user", JSON.stringify(response));
          } else {
            sessionStorage.setItem("user", JSON.stringify(response));
          }
        } else {
          console.error("Sign in failed:", response);
        }
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  return (
    <Container
      maxW="lg"
      py={{ base: "12", md: "24" }}
      px={{ base: "0", sm: "8" }}
    >
      <form onSubmit={signIn}>
        <Stack spacing="8">
          <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
            <Heading size={{ base: "xs", md: "sm" }}>
              Log in to your account
            </Heading>
            <HStack spacing="1" justify="center">
              <Text color="muted">Don't have an account?</Text>
              <Button variant="link" colorScheme="blue" onClick={() => navigate("/signup")}>
                Sign up
              </Button>
            </HStack>
          </Stack>
          <Box
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            bg={{ base: "transparent", sm: "bg-surface" }}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <FormControl>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup>
                  <InputRightElement>
                    <IconButton
                      variant="link"
                      aria-label={isOpen ? "Mask password" : "Reveal password"}
                      icon={isOpen ? <HiEyeOff /> : <HiEye />}
                      onClick={onClickReveal}
                    />
                  </InputRightElement>
                  <Input
                    id="password"
                    ref={inputRef}
                    name="password"
                    type={isOpen ? "text" : "password"}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </InputGroup>
              </FormControl>
              <HStack justify="space-between">
                <Checkbox defaultChecked onChange={handleSetRememberMe}>Remember me</Checkbox>
                <Button variant="link" colorScheme="blue" size="sm">
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button type="submit" colorScheme="blue">
                  Sign in
                </Button>
                <OAuthButtonGroup />
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </form>
    </Container>
  );
};
