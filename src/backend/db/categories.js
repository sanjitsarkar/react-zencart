import { v4 as uuid } from "uuid";
import IMAGES from "../../assets/images";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Headphone",
    img: [IMAGES.HEADPHONE],
    description:
      "A video game console is an electronic device that outputs a video signal or image to display a video game that can be played with a game controller.",
  },
  {
    _id: uuid(),
    categoryName: "Keyboard",
    img: [IMAGES.KEYBOARD],

    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Speaker",
    img: [IMAGES.SPEAKER],

    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Studio Mic",
    img: [IMAGES.STUDIO_MIC],
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "DJ Kit",
    img: [IMAGES.DJ_KIT],
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Midi Keyboard",
    img: [IMAGES.MIDI_KEYBOARD],
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Guitar",
    img: [IMAGES.GUITAR],
    description: "",
  },
];
