// import all fruits image
import apple from "../assets/img/product_img/apple.jpg";
import avocado from "../assets/img/product_img/avocado.jpg";
import banana from "../assets/img/product_img/banana.jpg";
import coconut from "../assets/img/product_img/coconut.jpg";
import grapes from "../assets/img/product_img/grapes.jpg";
import orange from "../assets/img/product_img/orange.jpg";
import pineapple from "../assets/img/product_img/pineapple.jpg";
import strawberry from "../assets/img/product_img/strawberry.jpg";

const productData = [
  {
    id: "#1",
    imgSrc: apple,
    name: "apple",
    description: "keep clam and eat an apple",
    price: 5,
    isAddedToCart: false,
  },
  {
    id: "#2",
    imgSrc: avocado,
    name: "avocado",
    description: "let`s avo party",
    price: 25,
    isAddedToCart: false,
  },
  {
    id: "#3",
    imgSrc: banana,
    name: "banana",
    description: "goals are like bananas, they come in bunches",
    price: 4,
    isAddedToCart: false,
  },
  {
    id: "#4",
    imgSrc: coconut,
    name: "coconut",
    description: "all you need is love and coconuts",
    price: 10,
    isAddedToCart: false,
  },
  {
    id: "#5",
    imgSrc: grapes,
    name: "grapes",
    description: "a hangover is the wrath of grapes",
    price: 30,
    isAddedToCart: false,
  },
  {
    id: "#6",
    imgSrc: orange,
    name: "orange",
    description:
      "breakfast without orange juice is like a day without sunshine",
    price: 8,
    isAddedToCart: false,
  },
  {
    id: "#7",
    imgSrc: pineapple,
    name: "pineapple",
    description: "when life gives you lemons, sell them and buy a pineapple",
    price: 15,
    isAddedToCart: false,
  },
  {
    id: "#8",
    imgSrc: strawberry,
    name: "strawberry",
    description: "strawberries are what make life taste wonderful",
    price: 8,
    isAddedToCart: false,
  },
];

export const getProduct = () => productData;
