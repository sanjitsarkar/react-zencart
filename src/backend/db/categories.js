import { v4 as uuid } from "uuid";
import IMAGES from "../../assets/images";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Headphones",
    img: [IMAGES.HEADPHONE],
    description:
      "A video game console is an electronic device that outputs a video signal or image to display a video game that can be played with a game controller.",
  },
  {
    _id: uuid(),
    categoryName: "Keyboards",
    img: [IMAGES.KEYBOARD],

    description:
      "A game is a structured form of play, usually undertaken for entertainment or fun.",
  },
  {
    _id: uuid(),
    categoryName: "Speakers",
    img: [IMAGES.SPEAKER],

    description:
      "A video game accessory is a distinct piece of hardware that is required to use a video game console, or one that enriches the video game's play experience.",
  },
  {
    _id: uuid(),
    categoryName: "Studio Mic",
    img: [IMAGES.STUDIO_MIC],
    description:
      "A video game accessory is a distinct piece of hardware that is required to use a video game console, or one that enriches the video game's play experience.",
  },
  {
    _id: uuid(),
    categoryName: "DJ Kits",
    img: [IMAGES.DJ_KIT],
    description:
      "A video game accessory is a distinct piece of hardware that is required to use a video game console, or one that enriches the video game's play experience.",
  },
  {
    _id: uuid(),
    categoryName: "Midi Keyboard",
    img: [IMAGES.MIDI_KEYBOARD],
    description:
      "A video game accessory is a distinct piece of hardware that is required to use a video game console, or one that enriches the video game's play experience.",
  },
  {
    _id: uuid(),
    categoryName: "Guitars",
    img: [IMAGES.GUITAR],
    description:
      "A video game accessory is a distinct piece of hardware that is required to use a video game console, or one that enriches the video game's play experience.",
  },
];
