import React, { useState, useEffect } from "react";
import { Carousel } from "primereact/carousel";
import { ProductService } from "../../service/ProductService";

export default function CircularDemo() {
  const [products, setProducts] = useState([]);
  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 4,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  useEffect(() => {
    ProductService.getProductsSmall().then((data) =>
      setProducts(data.slice(0, 9))
    );
  }, []);

  const productTemplate = (product) => {
    return (
      <div
        className="
      bg-[#28293E] border border-[#3A3C56] rounded-lg overflow-hidden flex flex-col 
      w-[250px] h-[350px] 
      xl:w-[280px] xl:h-[350px] 
      lg:w-[220px] lg:h-[330px] 
      md:w-[250px] md:h-[320px] 
      sm:w-[90%] sm:h-auto 
      max-sm:w-full max-sm:h-auto
    "
      >
        {/* Image */}
        <img
          src={product.image}
          alt={product.name}
          className="
          w-full h-[250px] 
          xl:h-[250px] 
          lg:h-[200px] 
          md:h-[180px] 
          sm:h-[160px] 
          max-sm:h-[200px]
          object-contain p-4
        "
        />
        {/* Text */}
        <div className="flex flex-col justify-center flex-1 px-4 py-2">
          <h4 className="text-white text-lg font-bold truncate">
            {product.name}
          </h4>
          <h6 className="text-white/65 text-sm truncate">
            {product.description}
          </h6>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-[#28293E]  rounded-xl pb-10">
      <Carousel
        value={products}
        numVisible={4}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        className="custom-carousel"
        circular
        itemTemplate={productTemplate}
      />
    </div>
  );
}
