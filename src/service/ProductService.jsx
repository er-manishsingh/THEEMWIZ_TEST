import DesignerImg from "../assets/images/portfolio/card/Designerimg.png";
import ReactdevImg from "../assets/images/portfolio/card/Reactdevimg.png";
import IllustratorImg from "../assets/images/portfolio/card/Illustrateimg.png";
import ProductDesignerImg from "../assets/images/portfolio/card/Productdesinimg.png";

export const ProductService = {
  getProductsData() {
    return [
      {
        id: "1000",
        name: "Azah Anyeni",
        description: "Designer",
        image: DesignerImg,
      },
      {
        id: "1001",
        name: "Roelof Bekkenenks",
        description: "React Developer",
        image: ReactdevImg,
      },
      {
        id: "1002",
        name: "Leonardo Oliveira",
        description: "Illustrator",
        image: IllustratorImg,
      },
      {
        id: "1003",
        name: "Izabella Tabakova",
        description: "Product Designer",
        image: ProductDesignerImg,
      },
    ];
  },

  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  },
};
