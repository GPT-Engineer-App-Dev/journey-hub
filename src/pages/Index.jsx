import { Container, VStack, Heading, Text, Button, Box, Image, HStack } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center">
          Explore the World with Us
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Book flights, hotels, and car rentals at the best prices.
        </Text>
        <HStack spacing={4}>
          <Button leftIcon={<FaPlane />} colorScheme="teal" size="lg">
            Book Flights
          </Button>
          <Button leftIcon={<FaHotel />} colorScheme="teal" size="lg">
            Book Hotels
          </Button>
          <Button leftIcon={<FaCar />} colorScheme="teal" size="lg">
            Rent Cars
          </Button>
        </HStack>
        <Box boxSize="lg">
          <Image src="/images/travel.jpg" alt="Travel" objectFit="cover" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;