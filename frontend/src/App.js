import { Switch, Route } from "react-router-dom";
import Canceled from "./components/Canceled";
import CartPage from "./components/CartPage";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NotFound from "./components/NotFound";
import Shop from "./components/Shop";
import SingleProduct from "./components/SingleProduct";
import Success from "./components/Success";
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
        <Switch>
        
          <Route exact path='/'>
            <Home /></Route>
          <Route path='/shop'>
            <Shop /></Route>
          <Route path='/cart'>
            <CartPage /></Route>
          <Route path='/checkout'>
            <Checkout /></Route>
          <Route path='/canceled'>
            <Canceled /></Route>
          <Route path='/success'>
            <Success /></Route>
          <Route exact path='/product/:id'>
            <SingleProduct /></Route>
          <Route path='*'>
            <NotFound /></Route>
            
        </Switch>
      <Footer />
    </div>
  );
}

export default App;