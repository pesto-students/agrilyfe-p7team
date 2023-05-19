import { Button, ButtonGroup, VisuallyHidden } from "@chakra-ui/react";
import { GoogleIcon } from "./ProviderIcons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const providers = { name: "Google", icon: <GoogleIcon boxSize="5" /> };

export const OAuthButtonGroup = () => {
  const location = useLocation();
  const [sign, setSign] = useState("");

  useEffect(() => {
    setSign(location.pathname.includes("sigin") ? "Sign in" : "Sign up");
  }, [location]);
  return (
    <ButtonGroup variant="outline" spacing="4" width="full">
      <Button key={providers.name} width="full">
        <VisuallyHidden>Sign in with {providers.name}</VisuallyHidden>
        {providers.icon} &nbsp; {sign} with {providers.name}
      </Button>
    </ButtonGroup>
  );
};
