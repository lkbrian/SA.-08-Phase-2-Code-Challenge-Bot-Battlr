import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

function BotCollection() {
  const [botData, setBotData] = useState(null);
  //
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = `http://localhost:3000/bots`;
  useEffect(() => {
    const fetchBotData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok)
          throw new Error(`HTTP Error ! Status:${response.status}`);
        const data = await response.json();
        console.log("in use effect", data);
        setBotData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchBotData();
  }, [API_URL]);

  return (
    <SimpleGrid as="div" spacing={4} minChildWidth="400px" p={"20px"}>
      {isLoading ? (
        <Text>loading</Text>
      ) : (
        botData.map((data, index) => {
          return (
            <Card
              boxShadow="md"
              p="6"
              rounded="md"
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={index}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={data.avatar_url}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">{data.name}</Heading>

                  <Text py="2">{data.created_at} </Text>
                  <Text py="2">{data.updated_at} </Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue">
                    Enlist
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          );
        })
      )}
    </SimpleGrid>
  );
}

export default BotCollection;
