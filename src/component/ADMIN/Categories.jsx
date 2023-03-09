
                                              //  Admin categery page 
                                              //  and we are showing the difrent categery of brands that we are using for the products
import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Get_medicines_item } from "../../redux/medicines/medicines.action";
import { Get_projector_item } from "../../redux/projector/projector.action";
import { Get_solarpanel_item } from "../../redux/solarpanel/solarpanel.action";
import { useDispatch, useSelector } from "react-redux";

const Categories = () => {
  const { medicines } = useSelector((state) => state.medicines);
  const { projector } = useSelector((state) => state.projector);
  const { solarpanel } = useSelector((state) => state.solarpanel);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(Get_medicines_item("",[]));
    dispatch(Get_projector_item("",[]));
    dispatch(Get_solarpanel_item("",[]));
  }, []);

  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="auto" p={10} bgColor="#f7f7f7 ">
        <Flex justifyContent="space-around">
          <Box w="25%" h="auto" bgColor="#2bbbe3" p={6}>
            <Text textStyle="DashboardHead">MEDICINES</Text>
            {medicines.companys&&medicines.companys.map((el) => (
              <Box key={Math.random()} mt="5px" mb={5} bgColor="#2bbbe3">
                <Text textStyle="AdminNav">{el}</Text>
              </Box>
            ))}
          </Box>

          <Box w="25%" h="auto" bgColor="#ff2941" p={6}>
            <Text textStyle="DashboardHead">PROJECTORS</Text>
            {projector.companys&&projector.companys.map((el) => (
              <Box  key={Math.random()} mt="5px" mb={5} bgColor="#ff2941">
                <Text textStyle="AdminNav">{el}</Text>
              </Box>
            ))}
          </Box>

          <Box w="25%" h="auto" bgColor="#59d243" p={6}>
            <Text textStyle="DashboardHead">SOLAR PANEL</Text>
            {solarpanel.companys&&solarpanel.companys.map((el) => (
              <Box key={Math.random()} mt="5px" mb={5} bgColor="#59d243">
                <Text textStyle="AdminNav">{el}</Text>
              </Box>
            ))}
          </Box>
        </Flex>
      </Box>
    </div>
  );
};

export default Categories;
