import "./App.css";
import Navbar from "./component/Navbar";
import Allroutes from "./component/Allroutes";
import Footer from "./component/Footer";
import ProductDetails from "./component/ProductDetails";
import SearchPageDetails from "./component/SearchPageDetails";

function App() {
  return (
    <div>
      {/* <Navbar/>
      <Allroutes/>
      <Footer/> */}
      <SearchPageDetails />
      {/* <ProductDetails /> */}
    </div>
  );
}

export default App;
