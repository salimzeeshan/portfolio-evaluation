import React from 'react'
import { Flex, Text, Image, Box } from "@chakra-ui/react"
import Link from "next/link"

function Navbar() {
    return (
        <Flex color={"white"} bgColor={"gray.900"} alignItems={"center"} justifyContent={"space-between"} px={4} py={3}>
            <Flex>
                <Link href="/">
                    <Text mr={8}>Mohammad Zeeshan Salim</Text>
                </Link>
                <Link href="/projects">
                    <Text mr={8}>Projects</Text>
                </Link>
            </Flex>
            <Box mb={1} bgColor={"yellow.400"} borderRadius={"50%"} overflow={"hidden"}>
                <Image
                    // ml={1}
                    w={8}
                    src={
                        "https://media.discordapp.net/attachments/897156357810159709/1044733960162398349/profile_transparent.png"
                    }
                />
            </Box>
        </Flex>
    );
}

export default Navbar