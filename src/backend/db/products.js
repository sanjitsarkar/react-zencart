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
    name: "Audio-Technica Ath-M20X Wired Over Ear Headphones Without Mic (Black)",
    desc: "Advanced build quality and engineering. Tuned for enhanced low-frequency performance ; The headphones are designed for studio tracking and mixing",
    images: [IMAGES.Audio_Technica_Ath_M20X],
    categoryName: "Headphone",
    brand: "AudioTechnica",
    rating: 4.3,
    price: 8500,
    discount: 50,
    badge: "",
    inStock: true,
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
    name: "Yamaha YH-L700A Wireless Noise-Cancelling Headphones with 3D Sound - Black",
    desc: "Yamaha Headphone 3D Sound Field with head tracking: experience movies and videos on your mobile device with cinema-like sound that immerses you in the action, at home or on the go Listening Optimizer: optimizes the sound in real time, adapting to you and your environment",
    images: [IMAGES.Yamaha_YH_L700A],
    categoryName: "Headphone",
    brand: "Yamaha",
    rating: 3.5,
    price: 32990,
    discount: 5,
    badge: "",
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Sony MDR-7506 On-Ear Professional Headphones (Black)",
    desc: "Comes complete with protective carry pouch and gold-plated Unimatch 3.5mm/6.3mm adaptor",
    images: [IMAGES.Sony_MDR_7506],
    categoryName: "Headphone",
    brand: "Sony",
    rating: 4.5,
    price: 7800,
    discount: 5,
    badge: "",
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Sennheiser HD 206 507364 Headphones (Black)",
    desc: "Powerful sound reproduction; Rich and crisp bass response",
    images: [IMAGES.Sennheiser_HD_206],
    categoryName: "Headphone",
    brand: "Sennheiser",
    rating: 4.6,
    price: 4500,
    discount: 0,
    badge: "Best Selling",
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Beyerdynamic DT 900 PRO X Studio Headphones for Critical Listening, Mixing & Mastering (Open-Back)",
    desc: "Open studio headphones for listening, mixing and mastering with a detailed, spatial and transparent sound.",
    images: [IMAGES.Beyerdynamic_DT_900],
    categoryName: "Headphone",
    brand: "Beyerdynamic",
    rating: 4.1,
    price: 27000,
    discount: 10,
    badge: "",
    inStock: true,
  },

  {
    _id: uuid(),
    name: "YAMAHA PSR-E373 61-Keys Portable Keyboard",
    desc: "Yamaha Headphone 3D Sound Field with head tracking: experience movies and videos on your mobile device with cinema-like sound that immerses you in the action, at home or on the go",
    images: [IMAGES.YAMAHA_PSR_E373],
    categoryName: "Keyboard",
    brand: "Yamaha",
    rating: 4,
    price: 14190,
    discount: 10,
    badge: "",
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Yamaha PSR-I400 61-Key Portable Keyboard, Metallic Dark Grey",
    desc: "The 61-keys ideal keyboard for Indian music lovers, vast collection of voices like Harmonium, Sitar, Dhol, Tabla, Sitar, Veena and auto accompaniment functions fom every corner of India",
    images: [IMAGES.YAMAHA_PSR_I400],
    categoryName: "Keyboard",
    brand: "Yamaha",
    rating: 3.8,
    price: 18450,
    discount: 5,
    badge: "",
    inStock: true,
  },
  {
    _id: uuid(),
    name: "YAMAHA PSR-I500 PORTABLE KEYBOARD WITH ADAPTOR",
    desc: "The 61-keys ideal keyboard for Indian music lovers, vast collection of voices like Harmonium, Sitar, Dhol, Tabla, Sitar, Veena and auto accompaniment functions fom every corner of India",
    images: [IMAGES.YAMAHA_PSR_I500],
    categoryName: "Keyboard",
    brand: "Yamaha",
    rating: 5,
    price: 25290,
    discount: 9,
    badge: "Most Rated",
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Yamaha Hs5 45W Wired Xlr Woofer - Black",
    desc: `5inch cone woofer and 1inch dome tweeter
54Hz - 30kHz frequency response
45W LF plus 25W HF bi-amp system 70watts total
ROOM CONTROL and HIGH TRIM response controls
XLR and TRS phone jack inputs
Others: Others LEVEL control, PHASE switch : NORM./REV., HIGH CUT control (80-120Hz, center click), LOW CUT control (80-120Hz, center click), LOW CUT switch (ON/OFF)
Country of Origin: Malaysia`,
    images: [IMAGES.Yamaha_Hs5],
    categoryName: "Speaker",
    brand: "Yamaha",
    rating: 3.7,
    price: 20000,
    discount: 3,
    badge: "",
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Casio CTX700 61-Key Touch Sensitive Portable Keyboard",
    desc: "CT-X700 is an ideal keyboard for Learners who are looking to give Musical Grade Exams",
    images: [IMAGES.Casio_CTX700],
    categoryName: "Keyboard",
    brand: "Casio",
    rating: 4.3,
    price: 12950,
    discount: 15,
    badge: "",
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Yamaha NS-P41 Black 5.1 Speaker Package (8 Inch Active Subwoofer)",
    desc: "Wall mountable (front, centre and surround) || Speaker System Impedance 6 ohms (without subwoofer).",
    images: [IMAGES.Yamaha_NS_P41],
    categoryName: "Speaker",
    brand: "Yamaha",
    rating: 4,
    price: 21950,
    discount: 10,
    badge: "",
    inStock: true,
  },
  {
    _id: uuid(),
    name: "Casio CTK-2550 61-Key Portable Keyboard, Black, Casio CTK2500 keyboard",
    desc: `A Beginner’s Keyboard with 61 Piano Style Keys for those who’re looking to learn a musical instrument
Incredibly easy to use with its big and clear LCD Display and an easy user interface. 30 User Song Banks & 60 Song Bank Tunes. Tuning Control : A4 = 415.5 to 465.9 Hz (Initial Default: 440.0 Hz)
Compatible with Casio’s Mobile Application “Chordana Play” which helps you learn all your favourite songs. Just download and import the MIDI file into the app & connect your phone to the Keyboard with an Aux Cable
Equipped with 400 Tones & 100 Rhythms, the CTK-2550 is extremely versatile
Contains 13 Authentic Indian Tones & 12 Indian Rhythms
Jam & Create your own musical composition by using the Dance Music Mode. Further add build-up effects to boost your performance
CTK-2550 comes with a free adaptor (LAD-6). It can be operated using batteries as well and requires 6 AA Batteries
2W+2W speakers gives an ample amount of sound output for practicing
For any warranty/service related issue, please reach out to Casio customer care at 18002022746`,
    images: [IMAGES.CASIO_CTK_25050],
    categoryName: "Keyboard",
    brand: "Casio",
    rating: 4.3,
    price: 10500,
    discount: 5,
    badge: "",
    inStock: false,
  },
  {
    _id: uuid(),
    name: "Sennheiser XS-1 Dynamic Cardioid Microphone for Solo Vocals & Karaoke Singing, Speech and Choir miking",
    desc: `Upfront vocal presence in the mix. Nominal impedance : 300 Ω (at 1 kHz)
Silent mute switch for flexibility and control
Rugged all-metal housing
Great feedback rejection
Country of Origin: China`,
    images: [IMAGES.SENHEISER_XS],
    categoryName: "Studio Mic",
    brand: "Sennheiser",
    rating: 3.2,
    price: 3500,
    discount: 5,
    badge: "",
    inStock: false,
  },
];
