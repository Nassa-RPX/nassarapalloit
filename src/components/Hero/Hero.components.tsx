import { Center, Container, Title } from "@mantine/core";
import Image from "next/image";
import { Nassa } from "../Nassa";

export const Hero = () => {
  return (
    <Container
      sx={{
        marginTop: 20,
        position: "relative",
        height: "400px",
        "& svg ": {
          width: "100%",
          height: "100%",
          transform: "translateX(5%)",
        },
      }}
    >
      <Nassa />
      <Center>
        <Title order={1}>Nassa Rapallo</Title>
      </Center>
    </Container>
  );
};
