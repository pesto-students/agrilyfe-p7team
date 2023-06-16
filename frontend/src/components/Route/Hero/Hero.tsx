import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage:
          "url(https://img.freepik.com/premium-vector/male-farmers-working-rice-field-vector_19856-81.jpg)",
      }}
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          style={{ color: "aliceblue" }}
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#3d3a3a] font-[600] capitalize`}
        >
          Best Quality Products
        </h1>
        <p
          className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#000000ba]"
          style={{ color: "white", fontWeight: "bold" }}
        >
          Join The Organic Movement!
          <br /> The customealiceblue customer will be followed by the customer.
          As the land of the land, the mourning nor the corporal of the land,
          the pillow of the lion.
        </p>
        <Link to="/products" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Shop Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
