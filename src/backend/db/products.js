import { v4 as uuid } from "uuid";
import IMAGES from "../../assets/images/index";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "Beyerdynamic - DT 770 PRO",
    desc: "Reference Headphone for control and monitoring purpose – 32, 80 & 250 ohms (closed)",
    images: [IMAGES.HEADPHONE],
    categoryName: "Headphone",
    brand: "Beyerdynamic",
    rating: 4.3,
    price: 8999,
    discount: 3,
    badge: "Trending",
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Beyerdynamic - DT 770 PRO",
    desc: "Reference Headphone for control and monitoring purpose – 32, 80 & 250 ohms (closed)",
    images: [IMAGES.HEADPHONE],
    categoryName: "Headphone",
    brand: "Beyerdynamic",
    rating: 4.3,
    price: 1200,
    discount: 3,
    badge: "",
    inStock: false,
  },
  {
    _id: uuid(),
    name: "Pioneer DJ Kit",
    desc: "Reference Headphone for control and monitoring purpose – 32, 80 & 250 ohms (closed)",
    images: [IMAGES.DJ_KIT],
    categoryName: "DJ Kit",
    brand: "Pioneer",
    rating: 4.3,
    price: 9999,
    discount: 3,
    badge: "",

    inStock: true,
  },
  {
    _id: uuid(),
    name: "Beyerdynamic - DT 770 PRO",
    desc: "Reference Headphone for control and monitoring purpose – 32, 80 & 250 ohms (closed)",
    images: [IMAGES.HEADPHONE],
    categoryName: "Headphone",
    brand: "Beyerdynamic",
    rating: 5,
    price: 8999,
    discount: 3,
    badge: "Top Rated",
    inStock: true,
  },
];
