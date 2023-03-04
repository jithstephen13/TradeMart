import React from "react";
import { Box, Image, Text, Grid } from "@chakra-ui/react";


                // ---------------------------This is A Static Page to show the Services available pacesss-------------------

const Location = () => {
  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="700px" p={10} bgColor="#f7f7f7 ">
        <Text textStyle="DashboardHead">LOCATION</Text>
        <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
          <Text color={"red"}>Location</Text>
        </Box>

        <Grid templateColumns="repeat(5,1fr)" mt="30px">
          <Box textAlign="center" w="35%">
            <Image
              src="http://localhost:3000/static/media/city1.7c34926ca5ce6caedeb5.jpg"
              alt=""
            />
            <Text>Delhi</Text>
          </Box>

          <Box textAlign="center" w="35%">
            <Image
              src="http://localhost:3000/static/media/city2.8bd704a941a67a7ab710.jpg"
              alt=""
            />
            <Text>Bengaluru</Text>
          </Box>

          <Box textAlign="center" w="35%">
            <Image
              src="http://localhost:3000/static/media/city3.36eb723e6fd7532b438f.jpg"
              alt=""
            />
            <Text>Chennai</Text>
          </Box>

          <Box textAlign="center" w="35%">
            <Image
              src="http://localhost:3000/static/media/city4.eaaaa8749b071f08e8ef.jpg"
              alt=""
            />
            <Text>Mumbai</Text>
          </Box>

          <Box textAlign="center" w="35%">
            <Image
              src="http://localhost:3000/static/media/city5.b6393f12ea896624a069.jpg"
              alt=""
            />
            <Text>Ahmedabad</Text>
          </Box>
        </Grid>

        <Grid templateColumns="repeat(5,1fr)" mt="30px">
          <Box textAlign="center" w="35%">
            <Image
              src="http://localhost:3000/static/media/city6.a41532d880d21ff0c9f7.jpg"
              alt=""
            />
            <Text>Kolkata</Text>
          </Box>

          <Box textAlign="center" w="35%">
            <Image
              src="http://localhost:3000/static/media/city7.cd8f395ccf4ed7ca5cc5.jpg"
              alt=""
            />
            <Text>Pune</Text>
          </Box>

          <Box textAlign="center" w="35%">
            <Image
              src="http://localhost:3000/static/media/city8.2aa3ff6b164af0253fe1.jpg"
              alt=""
            />
            <Text>Surat</Text>
          </Box>

          <Box textAlign="center" w="35%">
            <Image
              src="http://localhost:3000/static/media/city9.7316b5f98006434eb63f.jpg"
              alt=""
            />
            <Text>Jaipur</Text>
          </Box>

          <Box textAlign="center" w="35%">
            <Image
              src="http://localhost:3000/static/media/city10.fbec82c034a1ab86fabd.jpg"
              alt=""
            />
            <Text>Hyderabad</Text>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default Location;
