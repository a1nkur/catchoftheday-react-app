import { v4 as uuidv4 } from "uuid";

const sampleFishArr = [
  {
    id: uuidv4(),
    name: "Pacific Halibut",
    image: "/images/hali.jpg",
    desc: "Everyone’s favorite white fish. We will cut it to the size you need and ship it.",
    price: "17.24",
    status: "available",
  },

  {
    id: uuidv4(),
    name: "Lobster",
    image: "/images/lobster.jpg",
    desc: "These tender, mouth-watering beauties are a fantastic hit at any dinner party.",
    price: "32.00",
    status: "available",
  },

  {
    id: uuidv4(),
    name: "Sea Scallops",
    image: "/images/scallops.jpg",
    desc: "Big, sweet and tender. True dry-pack scallops from the icey waters of Alaska. About 8-10 per pound",
    price: "16.84",
    status: "unavailable",
  },

  {
    id: uuidv4(),
    name: "Mahi Mahi",
    image: "/images/mahi.jpg",
    desc: "Lean flesh with a mild, sweet flavor profile, moderately firm texture and large, moist flakes. ",
    price: "11.29",
    status: "available",
  },

  {
    id: uuidv4(),
    name: "King Crab",
    image: "/images/crab.jpg",
    desc: "Crack these open and enjoy them plain or with one of our cocktail sauces",
    price: "42.34",
    status: "available",
  },

  {
    id: uuidv4(),
    name: "Atlantic Salmon",
    image: "/images/salmon.jpg",
    desc: "This flaky, oily salmon is truly the king of the sea. Bake it, grill it, broil it...as good as it gets!",
    price: "14.53",
    status: "available",
  },

  {
    id: uuidv4(),
    name: "Oysters",
    image: "/images/oysters.jpg",
    desc: "A soft plump oyster with a sweet salty flavor and a clean finish.",
    price: "25.43",
    status: "available",
  },

  {
    id: uuidv4(),
    name: "Mussels",
    image: "/images/mussels.jpg",
    desc: "The best mussels from the Pacific Northwest with a full-flavored and complex taste.",
    price: "4.25",
    status: "available",
  },

  {
    id: uuidv4(),
    name: "Jumbo Prawns",
    image: "/images/prawns.jpg",
    desc: "With 21-25 two bite prawns in each pound, these sweet morsels are perfect for shish-kabobs.",
    price: "22.5",
    status: "available",
  },
];

export default sampleFishArr;
