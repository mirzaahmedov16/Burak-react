
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
import HomePage from "./screens/homePage";
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from "react-router-dom";
import OrdersPage from "./screens/ordersPage";
import UserPage from "./screens/userPage";
import ProductsPage from "./screens/productsPage";
import HomeNavbar from "./components/headers/HomeNavbar";
import OtherNavbar from "./components/headers/OtherNavbar";
import Footer from "./components/footer";
import "../css/app.css";
import "../css/navbar.css";
import "../css/footer.css";
import HelpPage from "./screens/helpPage";

function App() {
  const location = useLocation();

  console.log("location:", location)
  return (
    <>
      {location.pathname === "/" ? <HomeNavbar /> : <OtherNavbar />}


      <Switch>
        <Route path="/products">
          <ProductsPage />
        </Route>
        <Route path="/orders">
          <OrdersPage />
        </Route>
        <Route path="/member-page">
          <UserPage />
        </Route>
        <Route path="/help">
          <HelpPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}




export default App;
