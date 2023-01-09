import React, {useState} from 'react'
import {
  Box,
  Text,
  Flex,
  Image,
  Button,
  Tag,
  Card,
  CardHeader,
  Heading,
  CardBody,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import Link from "next/link"

const data = {
  login: "salimzeeshan",
  id: 69579714,
  node_id: "MDQ6VXNlcjY5NTc5NzE0",
  avatar_url: "https://avatars.githubusercontent.com/u/69579714?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/salimzeeshan",
  html_url: "https://github.com/salimzeeshan",
  followers_url: "https://api.github.com/users/salimzeeshan/followers",
  following_url:
    "https://api.github.com/users/salimzeeshan/following{/other_user}",
  gists_url: "https://api.github.com/users/salimzeeshan/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/salimzeeshan/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/salimzeeshan/subscriptions",
  organizations_url: "https://api.github.com/users/salimzeeshan/orgs",
  repos_url: "https://api.github.com/users/salimzeeshan/repos",
  events_url: "https://api.github.com/users/salimzeeshan/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/salimzeeshan/received_events",
  type: "User",
  site_admin: false,
  name: "Mohammad Zeeshan Salim",
  company: null,
  blog: "https://salimzeeshan.github.io/portfolio/",
  location: "New Delhi",
  email: null,
  hireable: null,
  bio: "I am a full stack web developer and i can build beautiful and seamless web apps with technologies like react, node.js, html & css.",
  twitter_username: "zeeshansalim_",
  public_repos: 8,
  public_gists: 0,
  followers: 10,
  following: 10,
  created_at: "2020-08-12T09:42:29Z",
  updated_at: "2022-11-28T15:37:37Z",
};

function Intro() {
  const [profile, setProfile] = useState(data)

  return (
    <Box>
      <Flex
        mb={2}
        textAlign={"center"}
        borderRadius={4}
        p={6}
        bgColor={"gray.700"}
        flexDirection={"column"}
        alignItems={"center"}
        w={"full"}
      >
        <Image
          mb={2}
          w={"100px"}
          borderRadius={"50%"}
          src={"https://avatars.githubusercontent.com/u/69579714?v=4"}
        />
        <Text fontSize={"xl"} as={"b"}>
          {profile.name}
        </Text>
        <Text mb={4} fontSize={"sm"} color={"gray"}>
          @{profile.login}
        </Text>
        <Text fontSize={"md"} color={"white.300"}>
          {profile.bio}
        </Text>
        <Flex gap={2} mt={6} justifyContent={"space-between"} w={{base: "40%", lg: "90%", xs: "100%"}}>
          <Link
            href={
              "https://drive.google.com/uc?export=download&id=13RMS0TwUEnhKzNZ5w0O8lWK8NElLq4PS"
            }
          >
            <Button color={"black"}>Resume</Button>
          </Link>
          <Link target={"_blank"} href={"https://github.com/salimzeeshan"}>
            <Button color={"black"}>Follow</Button>
          </Link>
        </Flex>
      </Flex>
      <Flex
        mb={2}
        borderRadius={4}
        p={6}
        bgColor={"gray.700"}
        w={"ful"}
        flexWrap="wrap"
      >
        <Tag mr={2} mb={2} fontSize={"xs"} bgColor={"gray.600"} color={"white"}>
          TYPESCRIPT
        </Tag>
        <Tag mr={2} mb={2} fontSize={"xs"} bgColor={"gray.600"} color={"white"}>
          NODE.JS
        </Tag>
        <Tag mr={2} mb={2} fontSize={"xs"} bgColor={"gray.600"} color={"white"}>
          NEXT.JS
        </Tag>
        <Tag mr={2} mb={2} fontSize={"xs"} bgColor={"gray.600"} color={"white"}>
          REACT.JS
        </Tag>
        <Tag mr={2} mb={2} fontSize={"xs"} bgColor={"gray.600"} color={"white"}>
          MONGODB
        </Tag>
        <Tag mr={2} mb={2} fontSize={"xs"} bgColor={"gray.600"} color={"white"}>
          GIT
        </Tag>
        <Tag mr={2} mb={2} fontSize={"xs"} bgColor={"gray.600"} color={"white"}>
          REDUX
        </Tag>
        <Tag mr={2} mb={2} fontSize={"xs"} bgColor={"gray.600"} color={"white"}>
          CHAKRA-UI
        </Tag>
        <Tag mr={2} mb={2} fontSize={"xs"} bgColor={"gray.600"} color={"white"}>
          TAILWIND
        </Tag>
      </Flex>
      <Flex
        borderRadius={4}
        p={6}
        bgColor={"gray.700"}
        w={"ful"}
        flexWrap="wrap"
      >
        <Card color={"white"} variant="unstyled">
          <CardHeader>
            <Heading mb={6} size="md">
              EDUCATION
            </Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  FULL STACK WEB DEVELOPMENT
                </Heading>
                <Text pt="2" fontSize="sm">
                  Masai School | May 2022 - Present
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  BACHELOR'S IN COMPUTER APPLICATION
                </Heading>
                <Text pt="2" fontSize="sm">
                  Guru Gobind Singh Indraprastha University | Aug 2018 - Aug
                  2021
                </Text>
              </Box>
              <Box>
                <Heading size="xs" textTransform="uppercase">
                  SENIOR SECONDARY - HUMANITIES
                </Heading>
                <Text pt="2" fontSize="sm">
                  Kendriya Vidyalaya Andrews Ganj | Year of completion - 2018
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>
      </Flex>
    </Box>
  );
}

export default Intro