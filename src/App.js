import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About_us from './Pages/About_us/About_us';
import AddService from './Pages/AddService/AddService';
import AuthProvider from './Pages/Context/AuthProvider';
import useAuth from './Pages/Context/useAuth';
import Footer from './Pages/Footers/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import ManageOrders from './Pages/ManageOrders/ManageOrders';
import MyOrders from './Pages/MyOrders/MyOrders';
import Not_Found from './Pages/Not_Found/Not_Found';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Private_Route from './Pages/Private_Route/Private_Route';
import UpdateStatus from './Pages/UpdateStatus/UpdateStatus';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Private_Route path="/my-orders">
        <MyOrders></MyOrders>
        </Private_Route>
        <Private_Route path="/manage-orders">
          <ManageOrders></ManageOrders>
        </Private_Route>
        <Route path="/add-services">
        <AddService></AddService>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        {/* <Route path="/place-orders">
        <PlaceOrder></PlaceOrder>
        </Route> */}
        <Private_Route path="/place/:placeId">
          <PlaceOrder></PlaceOrder>
        </Private_Route>
        <Route path="/about-us">
          <About_us></About_us>
        </Route>
        <Route path="/update/:updateId">
        <UpdateStatus></UpdateStatus>
        </Route>
        <Route path="*">
         <Not_Found></Not_Found>
        </Route>
      </Switch>
       <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
