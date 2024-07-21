import React from "react";
import { Box, Container, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.png";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  padding: "4",
  size: "4xl",
};

const Home = () => {
  return (
    <Box>
      <MyCaraousel />
      <Container maxW={"container.xl"} minH={"100vh"} p={"16"}>
        <Heading
          textTransform={"uppercase"}
          py="2"
          w={"fit-content"}
          borderBottom={"2px solid"}
          m={"auto"}
        >
          Services
        </Heading>

        <Stack
          h={"full"}
          p={"4"}
          alignItems={"center"}
          direction={["column", "row"]}
        >
          <Image src={img5} h={["40", "400"]} filter={"hue-rotate(-130deg)"} />
          <Text
            letterSpacing={"widset"}
            lineHeight={"190%"}
            p={["4", "16"]}
            textAlign={"center"}
          >
            ViDHuB, a cutting-edge video streaming app, offers an extensive
            array of services that redefine the way audiences consume
            entertainment. Users gain access to an expansive library
            encompassing a wide range of movies, TV shows, documentaries, and
            exclusive original content across diverse genres, ensuring there is
            something for everyone. High-definition streaming coupled with
            adaptive bitrate technology guarantees smooth and uninterrupted
            playback, even when internet speeds fluctuate. Personalized
            recommendations driven by sophisticated algorithms analyze viewing
            history and preferences, delivering tailored content that keeps
            users engaged and coming back for more. In addition to streaming,
            ViDHuB provides features like offline downloads, allowing users to
            watch their favorite shows and movies without an internet
            connection. Multi-device support enables seamless viewing across
            smartphones, tablets, smart TVs, and computers, while user profiles
            ensure individual preferences and watch histories are maintained.
            Live streaming capabilities bring real-time events, concerts, and
            sports directly to viewers, enhancing the app's versatility. Robust
            search functionalities make it easy to find specific titles or
            explore new content, and social media integration allows users to
            share their favorite moments and recommendations with friends and
            followers. Moreover, ViDHuB prioritizes security and user control,
            employing encryption to protect user data and offering parental
            controls to create a safe viewing environment for families. Regular
            updates and continuous improvements ensure that the app remains at
            the forefront of technological advancements, consistently delivering
            a superior and immersive entertainment experience. Overall, ViDHuB
            not only provides a gateway to endless entertainment but also
            enriches the way users interact with and enjoy digital media.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCaraousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={1000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w={"full"} h={"100vh"}>
      <Image src={img1} />
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Watch the future
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img2} />
      <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img3} />
      <Heading bgColor={"whiteAlpha.600"} color={"white"} {...headingOptions}>
        Gaming on Console
      </Heading>
    </Box>
    <Box w={"full"} h={"100vh"}>
      <Image src={img4} />
      <Heading bgColor={"whiteAlpha.600"} color={"white"} {...headingOptions}>
        Night-Life is Cool
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
