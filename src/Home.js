import React from "react";
import "./Home.css";
import Product from "./Product";
export default function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Gateway/CEPC/Hero/Pendrives/July/D50024250_IN_PC-Pendrive-hero-July22-Creatives_3000x1200._CB634170599_.jpg"
          alt="hello"
        />

        <div className="home_row">
          <Product
            id="10"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
            price="300.00"
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={4}
          />
          <Product
            id="11"
            title="USHA MG-2853 500W Mixer Grinder with 3 Jars, White"
            price="2416.00"
            image="https://m.media-amazon.com/images/I/413kvjRf93L._SX425_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="12"
            title="boAt Rockerz 510 Wireless Bluetooth On Ear Headphones with Mic (Raging Red)"
            price="999.00"
            image="https://m.media-amazon.com/images/I/61YvHa6o94L._SY355_.jpg"
            rating={5}
          />
          <Product
            id="13"
            title="SKECHITE Boys Printed Cotton Blend T Shirt - Hooded"
            price="350.00"
            image="https://m.media-amazon.com/images/I/91b2XxHIXCL._UX569_.jpg"
            rating={3}
          />
          <Product
            id="14"
            title="YONEX Smash Badminton Racquet (G4, 73 Grams, 28 lbs Tension)"
            price="1800.00"
            image="https://m.media-amazon.com/images/I/91P8o5zXbgL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="15"
            title="Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (4th Generation)"
            price="64000.00"
            image="https://m.media-amazon.com/images/I/719UcXKzXHL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
        <img className="header_add" src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"/>

        <div className="home_row">
          <Product
            id="16"
            title=" Furny Stolino Fabric 8 Seater Fabric RHS L Shape Sofa Set with Centre Table & 2 Puffy (Blue-Light Grey)"
            price="30089.00"
            image="https://m.media-amazon.com/images/I/71YKggdUxdS._SX425_.jpg"
            rating={4}
          />
          <Product
            id="17"
            title="AmazonBasics 81cm (32 inch) HD Ready Smart LED Fire TV AB32E10SS (Black) (2020 Model)"
            price="15550.00"
            image="https://m.media-amazon.com/images/I/61zpVaJStWL._SL1254_.jpg"
            rating={4}
          />
          <Product
            id="18"
            title="Echo Dot (3rd Gen) - #1 smart speaker brand in India with Alexa (Black)"
            price="2699.00"
            image="https://i.guim.co.uk/img/media/f183d9937a705b78a19c48d286edd2031e262242/149_311_5091_3054/master/5091.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=cee7450b2ced33e9398947c4b834dff7"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
