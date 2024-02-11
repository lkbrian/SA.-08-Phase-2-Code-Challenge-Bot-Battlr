import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import PropTypes from 'prop-types'
function BotCollection({botData,isLoading,onEnlist}) {
 


  return (
    <>  
      <Heading size="2xl" textAlign={'center'}>BotCollection</Heading>
    <SimpleGrid
      as="div"
      spacing={4}
      minChildWidth="400px"
      p={"20px"}
      height="minmax(100vh, auto)"
    >

      {isLoading ? (
        <Flex
          justify={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"10px"}
          h={"80vh"}
        >
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
          />
          <Text fontWeight={'bold'}>Please wait, Loading data..</Text>
        </Flex>
      ) : (
        botData.map((data, index) => {
          return (
            <Card
              boxShadow="2xl"
              borderTop="4px solid #3182CE"
              p="6"
              rounded="md"
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={index}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%",md:"40%", sm: "200px" }}
                src={data.avatar_url}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody >
                  <Heading textTransform={"uppercase"} size="md">Name: {data.name}</Heading>
                  <Heading textTransform={"lowercase"} py="2" size="sm">Bot class: {data.bot_class}</Heading>              
                  <Text>Identification: {data.id} </Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue"
                  onClick={()=> onEnlist(data.id)}
                  >
                    Enlist bot
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
          );
        })
      )}
    </SimpleGrid>
    </>
  );
}

BotCollection.propTypes = {
  botData: PropTypes.array,
  isLoading: PropTypes.bool,
  onEnlist: PropTypes.func,
};
export default BotCollection;

