import { Heading, Stack, VStack, Text, Button } from "@chakra-ui/react";
import React, { useState } from "react";

const Videos = () => {
  const videosArr = [
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882",
      description: "This is the description for video 1.",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf",
      description: "This is the description for video 2.",
    },
    {
      url: "https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174",
      description: "This is the description for video 3.",
    },
    {
      url: "https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174",
      description: "This is the description for video 4.",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78",
      description: "This is the description for video 5.",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281",
      description: "This is the description for video 6.",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614",
      description: "This is the description for video 7.",
    },
  ];

  const [videoIndex, setVideoIndex] = useState(0);
  const [videoSrc, setVideoSrc] = useState(videosArr[0].url);
  const [description, setDescription] = useState(videosArr[0].description);

  const handleVideoChange = (index) => {
    setVideoIndex(index);
    setVideoSrc(videosArr[index].url);
    setDescription(videosArr[index].description);
  };

  return (
    <Stack direction={["column", "row"]} h={"100vh"}>
      <VStack w={"full"}>
        <video
          controls
          controlsList="nodownload"
          src={videoSrc}
          style={{
            width: "100%",
          }}
        ></video>
        <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowY={"auto"}>
          <Heading>Sample Video {videoIndex + 1}</Heading>
          <Text>{description}</Text>
        </VStack>
      </VStack>
      <VStack
        w={["full", "xl"]}
        alignItems={"stretch"}
        p={"8"}
        spacing={"8"}
        overflowY={"auto"}
      >
        {videosArr.map((item, index) => (
          <Button
            variant={"ghost"}
            colorScheme="purple"
            onClick={() => handleVideoChange(index)}
            key={index}
          >
            Lecture {index + 1}
          </Button>
        ))}
      </VStack>
    </Stack>
  );
};

export default Videos;
