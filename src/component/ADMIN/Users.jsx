import React from "react";
import {
  Box,
  Flex,
  Grid,
  Text,
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import { GetAllUseres, DeleteUser } from "../../redux/Authentication/auth.action";
import { useSelector, useDispatch } from "react-redux";

const Users = () => {
  const { userlist } = useSelector((state) => state.auth);
   const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(GetAllUseres());
  }, []);

  function handleDelete(id) {
    dispatch(DeleteUser(id));
    dispatch(GetAllUseres());
  }
  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="700px" p={10} bgColor="#f7f7f7 ">
        <Text textStyle="DashboardHead">Users List</Text>

        <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
          <Text color={"red"}>User Details</Text>
        </Box>

        <Box mt="40px">
          <Grid
            templateColumns={{
              sm: "repeat(1,1fr)",
              md: "repeat(2,1fr)",
              lg: "repeat(3,1fr)",
            }}
            gap={5}
          >
            {userlist.map((el) => (
              <Card key={el.id}>
                <CardBody>
                  <Flex>
                    <Text textStyle="userHead">User Id -</Text>
                    <Text>{el.id}</Text>
                  </Flex>

                  <Flex>
                    <Text textStyle="userHead">Name -</Text>
                    <Text>
                      {el.firstname} {el.laststname}
                    </Text>
                  </Flex>

                  <Flex>
                    <Text textStyle="userHead">Email -</Text>
                    <Text>{el.email}</Text>
                  </Flex>
                </CardBody>
                <CardFooter>
                  <Button
                    onClick={() => handleDelete(el.id)}
                    bgColor="#19a598"
                    color="white"
                    _hover={{ backgroundColor: "#2e3192" }}
                  >
                    Delete User
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Users;
