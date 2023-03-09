import React from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { Get_medicines_item } from "../../redux/medicines/medicines.action";
import { Get_projector_item } from "../../redux/projector/projector.action";
import { Get_solarpanel_item } from "../../redux/solarpanel/solarpanel.action";



                                    //  This is Acomponet that we are created to show case the product Cout and  we are creating graphs with that

const Products = () => {
  const { medicines } = useSelector((state) => state.medicines);
  const { projector } = useSelector((state) => state.projector);
  const { solarpanel } = useSelector((state) => state.solarpanel);

  const dispatch = useDispatch();

 

  const data = [
    {
      name: "Drugs",
      count:medicines.medins ?medicines.medins.length:0,
      color: "blue",
    },
    {
      name: "Projector",
      count: projector.projector ? projector.projector.length:0,
      color: "green",
    },
    {
      name: "Solar Panels",
      count: solarpanel.solarpanel ?solarpanel.solarpanel.length:0,
      color: "red",
    },
  ];

  React.useEffect(() => {
    dispatch(Get_medicines_item("asc",[]));
    dispatch(Get_projector_item("asc",[]));
    dispatch(Get_solarpanel_item("asc",[]));
  }, []);
  return (
    <div>
      <Box w="84%" ml="16%" mt="50px" h="auto" p={10} bgColor="#f7f7f7 ">
        <Text textStyle="DashboardHead">Products</Text>

        <Box w="100%" bgColor="#e8ecef" mt={6} p={3}>
          <Text color={"red"}>Products Charts</Text>
        </Box>

        <Box w="50%" margin="auto" p={5}>
          <BarChart
            width={400}
            height={500}
            data={data}
            margin={{ top: 1, right: 1, left: 1, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#2e3192" />
          </BarChart>
        </Box>

        {/* Medicines */}

        <Box margin="auto" mt="40px">
          <Box w="100%" bgColor="#e8ecef" mt={6} mb={6} p={3}>
            <Text color={"red"}>Drugs And Pharmaceutical</Text>
          </Box>
          <LineChart
            width={1000}
            height={400}
            data={medicines.medins}
            margin={{ top: 1, right: 1, left: 1, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="30 30" />
            <XAxis dataKey="id" />
            <YAxis type="number" domain={[0, 400]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2e3192"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Box>

        {/* projector */}
        <Box margin="auto" mt="40px">
          <Box w="100%" bgColor="#e8ecef" mt={6} mb={6} p={3}>
            <Text color={"red"}>Electronics : Projectors</Text>
          </Box>
          <LineChart
            width={1200}
            height={600}
            data={projector.projector}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="45 45" />
            <XAxis dataKey="id" />
            <YAxis type="number" domain={[1000, 60000]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#2e3192"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Box>

        {/* solarpanel */}
        <Box margin="auto" mt="40px">
          <Box w="100%" bgColor="#e8ecef" mt={6} mb={6} p={3}>
            <Text color={"red"}>Electronics : Solar Panels</Text>
          </Box>
          <LineChart
            width={1200}
            height={500}
            data={solarpanel.solarpanel}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="50 50" />
            <XAxis dataKey="id" />
            <YAxis type="string" domain={[0, 1000]} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </Box>
      </Box>
    </div>
  );
};

export default Products;
