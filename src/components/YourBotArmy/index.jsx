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
import PropTypes from "prop-types";

function YourBotArmy({ yourBotArmy,onRelease,onDischarge }) {

  const handleDischargeBot = (botId) => {
    fetch(`http://localhost:3000/bots/${botId}`,{
      method: "DELETE"
    })
    .then((response)=>response.json )
    .then(()=>onDischarge(botId))

  };
  return (
    <>
      <Heading size="2xl" textAlign={'center'}>YourBotArmy</Heading>
      <SimpleGrid
        as="div"
        spacing={4}
        minChildWidth="400px"
        p={"20px"}
        height="minmax(100vh, auto)"
      >
        {yourBotArmy.map((data, index) => {
          return (
            <Card
              boxShadow="2xl"
              rounded="md"
              bg="blue.500"
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              key={index}
              color={'white'}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={data.avatar_url}
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading textTransform={"uppercase"} size="md">
                    Name: {data.name}
                  </Heading>
                  <Heading textTransform={"lowercase"} size="sm" py="2">
                    Bot class: {data.bot_class}
                  </Heading>
                  <Text py="2">
                    Created
                    <br />
                    {data.created_at}{" "}
                  </Text>
                  <Text py="2">
                    Updated
                    <br />
                    {data.updated_at}{" "}
                  </Text>
                </CardBody>


                  <CardFooter display={'flex'} gap={'4px'} flexDirection={{ base: "column", sm: "row" }}>
                    <Button variant="solid" color="black" bg="white" onClick={()=>onRelease(data.id)}>
                      Release
                    </Button>
                    <Button variant="solid" colorScheme="red" onClick={()=>handleDischargeBot(data.id)}>
                      Discharge
                    </Button>
                  </CardFooter>
              </Stack>
            </Card>
          );
        })}
      </SimpleGrid>
    </>
  );
}

export default YourBotArmy;

YourBotArmy.propTypes = {
  yourBotArmy: PropTypes.array,
  onRelease: PropTypes.func,
  onDischarge: PropTypes.func,
};
