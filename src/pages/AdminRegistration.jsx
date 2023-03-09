
                                            //  componetes for ally for Admin Ragistration
import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Flex,
  FormControl,
  Grid,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddAdmin, AddUser, GetAllAdmin } from "../redux/Auth/auth.action";

const AdminRegistration = () => {
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
      //  window.location.reload()
      form.current.reset();
    }
  };
  return (
    <Stack align={"center"}>
      <Card w={"50%"}>
        <FormControl ref={form} align="center">
          <Heading color={"blueviolet"}>Admin Registration form</Heading>
          <Input
            placeholder="First name..."
            mt={4}
            name="name"
            onChange={handlechenge}
          ></Input>
          <Input
            placeholder="Email..."
            name="email"
            mt={4}
            onChange={handlechenge}
          ></Input>
          <Input
            placeholder="Password..."
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

          <Button onClick={handleClick} colorScheme="blue" mt={4} mr={3}>
            Add new Admin
          </Button>
        </FormControl>
      </Card>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {adminlist.map((user) => {
          return (
            <Flex key={user.id} p="10" gap="2">
              <Card maxW="md" minW={{ base: "40%", sm: "60%" }}>
                <CardHeader margin="auto">
                  <Flex spacing="4">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
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
    </Stack>
  );
};

export default AdminRegistration;
