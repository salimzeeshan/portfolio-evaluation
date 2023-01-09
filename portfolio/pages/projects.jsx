import React from "react";
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
  Grid,
  GridItem,
} from "@chakra-ui/react";
import Projects from "./components/projects";
import projects from "../projects";
import { BiGitRepoForked } from "react-icons/bi";
import { CiStar } from "react-icons/ci";
import Link from "next/link";

function Page() {
  return (
    <Box
      color={"white"}
      w={"full"}
      textAlign={"center"}
      borderRadius={4}
      p={6}
      bgColor={"gray.700"}
    >
      <Heading mb={6}>Projects</Heading>
      <Grid templateColumns={"repeat(2, 1fr)"} textAlign={"left"} gap={3}>
        {projects.map((ele) => {
            return (
              <Link target={"_blank"} href={ele.html_url}>
                <GridItem borderRadius={4} bgColor={"gray.600"}>
                  <Flex p={4} flexDirection={"column"}>
                    <Flex mb={2} alignItems={"center"}>
                      <Image
                        mr={2}
                        w={"28px"}
                        src="https://media.discordapp.net/attachments/897156357810159709/1049277011413172254/open-folder-black-and-white-variant.png"
                      />
                      <Text>{ele.name}</Text>
                    </Flex>
                    <Text color={"gray.400"} fontSize={"sm"}>
                      {ele.id}
                    </Text>
                    <Flex
                      alignItems={"center"}
                      mt={3}
                      justifyContent={"space-between"}
                    >
                      <Flex>
                        <Flex mr={"4"}>
                          <CiStar size={"25px"} color={"white"} />
                          <Text>{ele.stargazers_count}</Text>
                        </Flex>
                        <Flex>
                          <BiGitRepoForked size={"23px"} color="white" />
                          <Text>{ele.forks_count}</Text>
                        </Flex>
                      </Flex>
                      <Text>{ele.language ? ele.language : "JavaScript"}</Text>
                    </Flex>
                  </Flex>
                </GridItem>
              </Link>
            )
        })}
      </Grid>
    </Box>
  );
}

// export async function getServerSideProps() {

//   let projects = await fetch(
//     `https://api.github.com/search/repositories?q=user:salimzeeshan+fork:true&sort=updated&per_page=10&type=Repositories`
//   );
//   projects = await projects.json();

//   return {
//     props: {
//       projects: projects.items,
//     },
//   };
// }

export default Page;
