import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import React from "react";
import { Box, Button, VStack } from "@chakra-ui/react";
import Styles from "./Admin.module.css";
import {
  BsSpeedometer2,
  BsShop,
  BsBoxSeam,
  BsFillPeopleFill,
} from "react-icons/bs";
import { HamburgerIcon } from "@chakra-ui/icons";
import { ImLocation } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserShield } from "react-icons/fa";
import Shops from "./Shops";
import Categories from "./Categories";
import Products from "./Products";
import Users from "./Users";
import AdminList from "./AdminList";
import Location from "./Location";

const Admin = () => {
  const [dashboard, setDashboard] = React.useState(true);
  const [shops, setShops] = React.useState(false);
  const [products, setProducts] = React.useState(false);
  const [categories, setCategories] = React.useState(false);
  const [location, setLoaction] = React.useState(false);
  const [Customers, setCustomers] = React.useState(false);
  const [users, setUsers] = React.useState(false);
  const [adminPage, setAdmin] = React.useState(false);
                                  //  function   to manage the show difrent addmin sections
  function handleDashboard() {
    setDashboard(true);
    setShops(false);
    setProducts(false);
    setCategories(false);
    setAdmin(false);
    setCustomers(false);
    setLoaction(false);
    setUsers(false);
  }

  function handleShops() {
    setDashboard(false);
    setShops(true);
    setProducts(false);
    setCategories(false);
    setAdmin(false);
    setCustomers(false);
    setLoaction(false);
    setUsers(false);
  }
  function handleProducts() {
    setDashboard(false);
    setShops(false);
    setProducts(true);
    setCategories(false);
    setAdmin(false);
    setCustomers(false);
    setLoaction(false);
    setUsers(false);
  }

  function handleCategories() {
    setDashboard(false);
    setShops(false);
    setProducts(false);
    setCategories(true);
    setAdmin(false);
    setCustomers(false);
    setLoaction(false);
    setUsers(false);
  }

  function handleAdmin() {
    setDashboard(false);
    setShops(false);
    setProducts(false);
    setCategories(false);
    setAdmin(true);
    setCustomers(false);
    setLoaction(false);
    setUsers(false);
  }

  function handleCustomers() {
    setDashboard(false);
    setShops(false);
    setProducts(false);
    setCategories(false);
    setAdmin(false);
    setCustomers(true);
    setLoaction(false);
    setUsers(false);
  }

  function handleLocation() {
    setDashboard(false);
    setShops(false);
    setProducts(false);
    setCategories(false);
    setAdmin(false);
    setCustomers(false);
    setLoaction(true);
    setUsers(false);
  }

  function handleUsers() {
    setDashboard(false);
    setShops(false);
    setProducts(false);
    setCategories(false);
    setAdmin(false);
    setCustomers(false);
    setLoaction(false);
    setUsers(true);
  }
  return (
    <div>
      <Navbar />

                                     {/* Admin Dash bord with Side bar */}
      <div className={Styles.Sidebar}>
        <Box mt={6} h="700px" bgColor="white">
          <VStack spacing={10}>
            <Button
              bgColor="white"
              fontFamily="Cambria"
              w="100%"
              size={"md"}
              _hover={{ bgColor: "#2e3192", color: "white" }}
              onClick={handleDashboard}
              leftIcon={<BsSpeedometer2 />}
            >
              Dashboard
            </Button>
          
            <Button
              bgColor="white"
              fontFamily="Cambria"
              w="100%"
              size={"md"}
              _hover={{ bgColor: "#2e3192", color: "white" }}
              onClick={handleProducts}
              leftIcon={<BsBoxSeam />}
            >
              Products
            </Button>

            <Button
              textAlign="initial"
              bgColor="white"
              fontFamily="Cambria"
              w="100%"
              size={"md"}
              _hover={{ bgColor: "#2e3192", color: "white" }}
              onClick={handleShops}
              leftIcon={<BsShop />}
            >
              Shops
            </Button>

            <Button
              bgColor="white"
              fontFamily="Cambria"
              w="100%"
              size={"md"}
              _hover={{ bgColor: "#2e3192", color: "white" }}
              onClick={handleCategories}
              leftIcon={<HamburgerIcon />}
            >
              Categories
            </Button>

            <Button
              bgColor="white"
              fontFamily="Cambria"
              w="100%"
              size={"md"}
              _hover={{ bgColor: "#2e3192", color: "white" }}
              onClick={handleLocation}
              leftIcon={<ImLocation />}
            >
              Location
            </Button>
            <Button
              bgColor="white"
              fontFamily="Cambria"
              w="100%"
              size={"md"}
              _hover={{ bgColor: "#2e3192", color: "white" }}
              onClick={handleUsers}
              leftIcon={<FaUserShield />}
            >
              Users List
            </Button>

            <Button
              bgColor="white"
              fontFamily="Cambria"
              w="100%"
              size={"md"}
              _hover={{ bgColor: "#2e3192", color: "white" }}
              onClick={handleAdmin}
              leftIcon={<MdAdminPanelSettings />}
            >
              Admin List
            </Button>
          </VStack>
        </Box>
      </div>

      {dashboard && <Dashboard />}
      {shops && <Shops />}
      {categories && <Categories />}
      {products && <Products />}
      {users && <Users />}
      {adminPage && <AdminList />}
      {location && <Location />}
    </div>
  );
};

export default Admin;
