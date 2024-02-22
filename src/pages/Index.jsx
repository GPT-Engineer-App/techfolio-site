import { Box, Container, Flex, Heading, Text, Link, Stack, Image, SimpleGrid, Icon, Input, Textarea, VStack, HStack, useColorModeValue, Button } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaReact, FaNodeJs, FaDatabase, FaPython, FaPlug } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.100", "gray.900");
  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <Box bg={bgColor} color={textColor}>
      <Container maxW="container.xl">
        {/* Header: Name and Navigation */}
        <Flex as="header" py={6} justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="xl">
            Jane Doe
          </Heading>
          <Stack as="nav" direction="row" spacing={4}>
            <Link href="#about" fontWeight="bold">
              About
            </Link>
            <Link href="#projects" fontWeight="bold">
              Projects
            </Link>
            <Link href="#skills" fontWeight="bold">
              Skills
            </Link>
            <Link href="#contact" fontWeight="bold">
              Contact
            </Link>
          </Stack>
        </Flex>

        {/* Main Content */}
        <Stack spacing={8} py={10}>
          {/* About Section */}
          <Box as="section" id="about">
            <Heading as="h2" size="lg" mb={4}>
              About Me
            </Heading>
            <Text fontSize="lg">I'm a passionate programmer with a love for creating innovative solutions. With a focus on clean, maintainable code, I specialize in building responsive web applications that provide intuitive user experiences.</Text>
            <Image src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwYXQlMjB3b3JrfGVufDB8fHx8MTcwODYyMDUxMnww&ixlib=rb-4.0.3&q=80&w=1080" mt={4} borderRadius="md" />
          </Box>

          {/* Projects Section */}
          <Box as="section" id="projects">
            <Heading as="h2" size="lg" mb={4}>
              Projects
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {/* Project 1 */}
              <Flex direction="column" bg="white" p={5} borderRadius="md" boxShadow="md">
                <Image src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RlJTIwZWRpdG9yfGVufDB8fHx8MTcwODYyMDUxMnww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
                <Heading as="h3" size="md" mt={4}>
                  Project Name
                </Heading>
                <Text mt={2}>A brief description of the project goes here. Highlighting its features and the technologies used.</Text>
                <Button as="a" href="https://github.com" leftIcon={<FaGithub />} mt={3}>
                  View Code
                </Button>
              </Flex>
              {/* Project 2 */}
              <Flex direction="column" bg="white" p={5} borderRadius="md" boxShadow="md">
                <Image src="https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzA4NjIwNTEyfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
                <Heading as="h3" size="md" mt={4}>
                  Another Project
                </Heading>
                <Text mt={2}>An explanation about this project, its purpose, and the impact it has.</Text>
                <Button as="a" href="https://github.com" leftIcon={<FaGithub />} mt={3}>
                  View Code
                </Button>
              </Flex>
            </SimpleGrid>
          </Box>

          {/* Skills Section */}
          <Box as="section" id="skills">
            <Heading as="h2" size="lg" mb={4}>
              Skills
            </Heading>
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={5}>
              <VStack>
                <Icon as={FaReact} w={10} h={10} />
                <Text>React</Text>
              </VStack>
              <VStack>
                <Icon as={FaNodeJs} w={10} h={10} />
                <Text>Node.js</Text>
              </VStack>
              <VStack>
                <Icon as={FaDatabase} w={10} h={10} />
                <Text>Python & Kodi Addons</Text>
              </VStack>
              {/* Add more skills as needed */}
              <VStack>
                <Icon as={FaPython} w={10} h={10} />
                <Text>Python</Text>
              </VStack>
              <VStack>
                <Icon as={FaPlug} w={10} h={10} />
                <Text>Kodi Addons</Text>
              </VStack>
            </SimpleGrid>
          </Box>

          {/* Contact Section */}
          <Box as="section" id="contact" bg="white" p={6} borderRadius="md" boxShadow="md">
            <Heading as="h2" size="lg" mb={4}>
              Contact Me
            </Heading>
            <VStack spacing={4}>
              <Input placeholder="Your Name" />
              <Input placeholder="Your Email" />
              <Textarea placeholder="Your Message" />
              <Button colorScheme="blue" px={10}>
                Send Message
              </Button>
            </VStack>
          </Box>
        </Stack>

        {/* Footer */}
        <Flex as="footer" py={6} justifyContent="center">
          <HStack spacing={4}>
            <Link href="https://github.com" isExternal>
              <Icon as={FaGithub} w={6} h={6} />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon as={FaLinkedin} w={6} h={6} />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <Icon as={FaTwitter} w={6} h={6} />
            </Link>
            <Link href="mailto:example@example.com" isExternal>
              <Icon as={FaEnvelope} w={6} h={6} />
            </Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Index;
