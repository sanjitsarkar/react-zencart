import { v4 as uuid } from "uuid";
import IMAGES from "../../assets/images/index";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    name: "BEYERDYNAMIC - DT 770 PRO",
    desc: "Reference headphones for control and monitoring purpose – 32, 80 & 250 ohms (closed)",
    images: [IMAGES.HEADPHONE],
    categoryName: "Headphones",
    brand: "BEYERDYNAMIC",
    ratings: 4.3,
    price: 8999,
    discount: 3,
    badge: "Trending",
    inStock: true,
  },
  {
    _id: uuid(),
    name: "BEYERDYNAMIC - DT 770 PRO",
    desc: "Reference headphones for control and monitoring purpose – 32, 80 & 250 ohms (closed)",
    images: [IMAGES.HEADPHONE],
    categoryName: "Headphones",
    brand: "BEYERDYNAMIC",
    ratings: 4.3,
    price: 8999,
    discount: 3,
    badge: "",
    inStock: true,
  },
  {
    _id: uuid(),
    name: "BEYERDYNAMIC - DT 770 PRO",
    desc: "Reference headphones for control and monitoring purpose – 32, 80 & 250 ohms (closed)",
    images: [IMAGES.HEADPHONE],
    categoryName: "Headphones",
    brand: "BEYERDYNAMIC",
    ratings: 4.3,
    price: 8999,
    discount: 3,
    badge: "",

    inStock: true,
  },
  {
    _id: uuid(),
    name: "BEYERDYNAMIC - DT 770 PRO",
    desc: "Reference headphones for control and monitoring purpose – 32, 80 & 250 ohms (closed)",
    images: [IMAGES.HEADPHONE],
    categoryName: "Headphones",
    brand: "BEYERDYNAMIC",
    ratings: 5,
    price: 8999,
    discount: 3,
    badge: "Top Rated",
    inStock: true,
  },
];
