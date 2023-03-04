import React, { useEffect, useState, useRef } from "react";

import {
  Avatar,
  Box,
  Button,
  Card,
  CardFooter,
  CardHeader,
  Flex,
  FormControl,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { AddAdmin, GetAllAdmin } from "../../redux/Authentication/auth.action";
                                              

                                                        // Page fore creating 
                                                        // Admin  And Show the admind 
                                                        // whith there creadencial
const AdminList = () => {
  const [cred, setCred] = useState({});
  const form = useRef();
  const { isLoading, isError, userData, isAuth, userlist, adminlist } =
    useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handlechenge = (e) => {
    const { name, value } = e.target;
    setCred({
      ...cred,
      [name]: value,
    });
  };
  useEffect(() => {
    dispatch(GetAllAdmin());
  }, []);

  const handleClick = async () => {
    dispatch(AddAdmin(cred));
    if (!isLoading && !isError) {
      dispatch(GetAllAdmin());

    }
  };
  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="auto" p={10} bgColor="#f7f7f7 ">
        <Card
          bgColor="#f7f7f7"
          w={"50%"}
          margin="auto"
          p={6}
          border="1px solid #2e3192 "
          borderRadius={8}
        >
          <FormControl ref={form} textAlign="center">
            <VStack spacing={5}>
              <Text textStyle="DashboardHead">Admin Registration form</Text>
              <Input
                placeholder="First name"
                mt={4}
                name="name"
                onChange={handlechenge}
              ></Input>
              <Input
                placeholder="Email"
                name="email"
                mt={4}
                onChange={handlechenge}
              ></Input>
              <Input
                placeholder="Password"
                name="password"
                mt={4}
                type={"password"}
                onChange={handlechenge}
              ></Input>

              <Input
                placeholder="designation"
                type={"string"}
                mt={4}
                name="designation"
                onChange={handlechenge}
              ></Input>

              <Button
                onClick={handleClick}
                bgColor="#19a598"
                color="white"
                _hover={{ backgroundColor: "#2e3192" }}
              >
                Add new Admin
              </Button>
            </VStack>
          </FormControl>
        </Card>

       
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {adminlist.map((user) => {
            return (
              <Flex key={user.id} p="10" gap="2">
                <Card maxW="md" minW={{ base: "40%", sm: "60%" }}>
                  <CardHeader margin="auto">
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <Avatar name={user.name} src={user.name} />

                        <Box>
                          <Heading size="sm">{user.name}</Heading>
                          <Text>{"Email :" + user.email}</Text>
                          <Text>{"designation:" + user.designation}</Text>
                          <Text>{"password:" + user.password}</Text>
                        </Box>
                      </Flex>
                    </Flex>
                  </CardHeader>
                </Card>
              </Flex>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default AdminList;
