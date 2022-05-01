import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Footer from "./Footer";
import Login from "./Login";
import Orders from "./Orders";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51Kg7hKSGgx5uJzRcOz7jxYENGEXZEgFiDMoHeWBwWv9ilqJTgnWsDyXjNElvn8jMbiFZ67LHIko1JZFgC3x0QR1j00USAoq2Cb");

function App() {
  const [{},dispatch]=useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('THE USER IS >>>',authUser);

      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser,
        })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
        });

      }
    })

  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/orders" element={[<Header />,<Orders />]} />
          <Route path="/login" element={<Login/>} />
          <Route path="/checkout" element={[<Header />,<Checkout />]} />
          <Route path="/payment" element={[<Header />,<Elements stripe={promise}><Payment/></Elements>]} />
          <Route path="/" element={[<Header />,<Home />,<hr></hr>,<Footer/>]} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

//https://clone-ac334.web.app/
//5:55
