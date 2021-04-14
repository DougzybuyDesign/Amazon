import React from "react";
import "./Home.css";
import "./Product";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02digital/video/merch2016/Hero/Covid19/Generic/GWBleadingHero_ENG_COVID_XSite_1500x600_PV_en_GB._CB428684220.jpg"
          alt=""
        />
<img src="https://cdn.shopify.com/s/files/1/1061/1924/products/Rocket_Emoji_grande.png?v=1571606064" alt="Download Rocket Emoji Icon | Emoji Island"/>
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            alt=""
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Strand Mixer for Baking, Stylish Kitcher Mixer with K-beater, Dough Hook and Whisk, 5 Litre
          Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
            alt=""
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Strand Mixer for Baking, Stylish Kitcher Mixer with K-beater, Dough Hook and Whisk, 5 Litre
          Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
            alt=""
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood kMix Strand Mixer for Baking, Stylish Kitcher Mixer with K-beater, Dough Hook and Whisk, 5 Litre
          Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
            alt=""
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Strand Mixer for Baking, Stylish Kitcher Mixer with K-beater, Dough Hook and Whisk, 5 Litre
          Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
            alt=""
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Strand Mixer for Baking, Stylish Kitcher Mixer with K-beater, Dough Hook and Whisk, 5 Litre
          Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
            alt=""
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="49538094"
            title="Kenwood kMix Strand Mixer for Baking, Stylish Kitcher Mixer with K-beater, Dough Hook and Whisk, 5 Litre
          Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
            alt=""
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Strand Mixer for Baking, Stylish Kitcher Mixer with K-beater, Dough Hook and Whisk, 5 Litre
          Glass Bowl"
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/810%2BGNdkzKL._AC_SX450_.jpg"
            alt=""
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}
export default Home;
