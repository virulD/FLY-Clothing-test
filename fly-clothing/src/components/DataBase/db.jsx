// import { AiFillStar } from "react-icons/ai";
const data = [
  {
    img: "https://supplement.lk/wp-content/uploads/2021/08/iso-100.jpg",
    title: "Dymatize ISO 100",
    reviews: "(123 reviews)",
    prevPrice: "රු36,500",
    newPrice: "රු33,500",
    company: "Dymatize",
    category: "Proteins",
  },
  {
    img: "https://supplement.lk/wp-content/uploads/2021/08/carnivor-isolate-4lbs.jpg",
    title: "Carnivor Isolate",
    reviews: "(123 reviews)",
    prevPrice: "රු25,500",
    newPrice: "රු24,000",
    company: "Nike",
    category: "Proteins",
  },

  {
    img: "https://supplement.lk/wp-content/uploads/2021/08/nitrotech-4lbs-1.jpg",
    title: "NitroTech Ripped",
     
    reviews: "(123 reviews)",
    prevPrice: "රු28,500",
    newPrice: "රු27,000",
    company: "Muscletech",
    category: "Proteins",
  },
  {
    img: "https://supplement.lk/wp-content/uploads/2021/08/nitrotech-power-4lbs.jpg",
    title: "Muscletech Nitro",
     
    reviews: "(123 reviews)",
    prevPrice: "රු16,500",
    newPrice: "රු14,500",
    company: "Muscletech",
    category: "Proteins",
  },
  // {
  //   img: "https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg",
  //   title: "Flat Slip On Pumps",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "200",
  //   company: "Vans",
  //   color: "green",
  //   category: "flats",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg",
  //   title: "Knit Ballet Flat",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "50",
  //   company: "Adidas",
  //   color: "black",
  //   category: "flats",
  // },

  // {
  //   img: "https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg",
  //   title: "Loafer Flats",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "50",
  //   company: "Vans",
  //   color: "white",
  //   category: "flats",
  // },

  // {
  //   img: "https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg",
  //   title: "Nike Zoom Freak",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "200",
  //   company: "Nike",
  //   color: "green",
  //   category: "sneakers",
  // },

  // {
  //   img: "https://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg",
  //   title: "Nike Men's Sneaker",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "200",
  //   company: "Adidas",
  //   color: "blue",
  //   category: "sneakers",
  // },

  // {
  //   img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
  //   title: "PUMA BLACK-OCE",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "150",
  //   company: "Puma",
  //   color: "green",
  //   category: "sneakers",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/71E75yRwCDL._AC_UY575_.jpg",
  //   title: "Pacer Future Sneaker",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "150",
  //   company: "Puma",
  //   color: "red",
  //   category: "sneakers",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/71jeoX0rMBL._AC_UX575_.jpg",
  //   title: "Unisex-Adult Super",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "150",
  //   company: "Puma",
  //   color: "black",
  //   category: "sneakers",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg",
  //   title: "Roma Basic Sneaker",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "150",
  //   company: "Puma",
  //   color: "white",
  //   category: "sneakers",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/7128-af7joL._AC_UY575_.jpg",
  //   title: "Pacer Future Doubleknit",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "150",
  //   company: "Puma",
  //   color: "black",
  //   category: "sneakers",
  // },

  // {
  //   img: "https://m.media-amazon.com/images/I/81xXDjojYKS._AC_UX575_.jpg",
  //   title: "Fusion Evo Golf Shoe",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "100",
  //   company: "Puma",
  //   color: "green",
  //   category: "sneakers",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg",
  //   title: "Rainbow Chex Skate",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "100",
  //   company: "Vans",
  //   color: "red",
  //   category: "flats",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg",
  //   title: "Low-Top Trainers",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "100",
  //   company: "Vans",
  //   color: "white",
  //   category: "sandals",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg",
  //   title: "Vans Unisex Low-Top",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "100",
  //   company: "Vans",
  //   color: "blue",
  //   category: "sandals",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg",
  //   title: "Classic Bandana Sneakers",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "50",
  //   company: "Nike",
  //   color: "black",
  //   category: "sandals",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/61bncQ44yML._AC_UX695_.jpg",
  //   title: "Chunky High Heel",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "50",
  //   company: "Vans",
  //   color: "black",
  //   category: "heels",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/71czu7WgGuL._AC_UY695_.jpg",
  //   title: "Slip On Stiletto High Heel",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "100",
  //   company: "puma",
  //   color: "black",
  //   category: "heels",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/61men05KRxL._AC_UY625_.jpg",
  //   title: "DREAM PAIRS Court Shoes",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "150",
  //   company: "Nike",
  //   color: "red",
  //   category: "heels",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg",
  //   title: "Nike Air Vapormax Plus",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "200",
  //   company: "Nike",
  //   color: "red",
  //   category: "sneakers",
  // },

  // {
  //   img: "https://m.media-amazon.com/images/I/51PGWTXgf-L._AC_UY625_.jpg",
  //   title: "Low Mid Block Heels",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "200",
  //   company: "Nike",
  //   color: "black",
  //   category: "heels",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg",
  //   title: "Chunky High Heel",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "50",
  //   company: "Adidas",
  //   color: "black",
  //   category: "heels",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg",
  //   title: "Amore Fashion Stilettos",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "150",
  //   company: "Adidas",
  //   color: "white",
  //   category: "heels",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg",
  //   title: "Bridal Sandals Glitter",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "50",
  //   company: "Adidas",
  //   color: "black",
  //   category: "heels",
  // },
  // {
  //   img: "https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg",
  //   title: "Wedding Prom Bridal",
  //    
  //   reviews: "(123 reviews)",
  //   prevPrice: "$140,00",
  //   newPrice: "50",
  //   company: "Adidas",
  //   color: "black",
  //   category: "flats",
  // },

  {
    img: "https://supplement.lk/wp-content/uploads/2021/11/gat-l-carnitine.jpg",
    title: "L-Carnitine",
     
    reviews: "(123 reviews)",
    prevPrice: "Rs.10,000",
    newPrice: "Rs.9,500",
    company: "Vans",
    category: "Fat Burners",
  },
  {
    img: "https://supplement.lk/wp-content/uploads/2021/08/c4-original.jpg",
    title: "C4 30 Servings",
     
    reviews: "(123 reviews)",
    prevPrice: "Rs.10,500",
    newPrice: "Rs.9,500",
    company: "Adidas",
    category: "Pre-Workouts",
  },

  {
    img: "https://cdn.shopify.com/s/files/1/0315/3415/3773/products/CARNIVOR-MASS-10LB-BAG-904433_3000x.png?v=1681778906",
    title: "Carnivor Mass",
     
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "50",
    company: "Vans",
    category: "Proteins",
  },

  {
    img: "https://supplement.lk/wp-content/uploads/2021/08/muscletech-caffeine-tablet.jpg",
    title: "MuscleTech PreWorkout",
     
    reviews: "(123 reviews)",
    prevPrice: "Rs.9,000",
    newPrice: "Rs.8,500",
    company: "Muscletech",
    category: "Pre-Workouts",
  },

  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJSDLyHwS-H-LWMcNRvxPj6EHbQWOruswzSQ&s",
    title: "Curse Ripper",
     
    reviews: "(123 reviews)",
    prevPrice: "Rs.8,500",
    newPrice: "Rs.7,500",
    company: "Adidas",
    category: "Pre-Workouts",
  },

  {
    img: "https://supplement.lk/wp-content/uploads/2021/08/curse-pre.jpg",
    title: "Curse Pre-Workout",
     
    reviews: "(123 reviews)",
    prevPrice: "Rs.10,500",
    newPrice: "Rs.8,500",
    company: "Puma",
    category: "Pre-Workouts",
  },
  {
    img: "https://supplement.lk/wp-content/uploads/2021/08/xtend-bcaa-30.jpg",
    title: "XTEND Original BCAA",
     
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    category: "BCAA",
  },
  {
    img: "https://supplement.lk/wp-content/uploads/2023/01/ZMA-bodytech.jpg",
    title: "BodyTech ZMA",
     
    reviews: "(123 reviews)",
    prevPrice: "$140,00",
    newPrice: "150",
    company: "Puma",
    category: "BCAA",
  },
  {
    img: "https://supplement.lk/wp-content/uploads/2023/01/muscletech-alpha-test-boost.jpg",
    title: "MuscleTech AlphaTest",
     
    reviews: "(123 reviews)",
    prevPrice: "රු10,500",
    newPrice: "රු10,500",
    company: "Muscletech",
    category: "Test Boosters",
  },
  {
    img: "https://supplement.lk/wp-content/uploads/2022/04/weider-prime-testbooster.jpg",
    title: "Pacer Future Doubleknit",
     
    reviews: "(123 reviews)",
    prevPrice: "රු.10,000",
    newPrice: "රු.9,000",
    company: "Puma",
    category: "Test Boosters",
  },

  {
    img: "https://supplementfactory.lk/wp-content/uploads/2023/07/Muscletech-Masstech-Extreme-2000-6-lbs-400x400.jpg",
    title: "Mass-Tech Extreme",
     
    reviews: "(123 reviews)",
    prevPrice: "රු.23,000",
    newPrice: "රු.20,000",
    company: "Muscletech",
    category: "Mass Gainer",
  },
  {
    img: "https://supplementfactory.lk/wp-content/uploads/2019/04/Nutrex-Mass-Infusion-12-lbs-1.jpg",
    title: "MASS INFUSION 12 LBS",
     
    reviews: "(123 reviews)",
    prevPrice: "රු.25,500",
    newPrice: "රු.18,500",
    company: "Vans",
    category: "Mass Gainer",
  },
  {
    img: "https://supplementfactory.lk/wp-content/uploads/2014/12/Inner-Armour-Anabolic-Peak-12-lbs-new-1.jpg",
    title: "INNER ARMOUR",
     
    reviews: "(123 reviews)",
    prevPrice: "රු 34,000",
    newPrice: "රු 30,000",
    company: "Vans",
    category: "Mass Gainer",
  },
  {
    img: "https://supplementfactory.lk/wp-content/uploads/2021/01/Optimum-Serious-Mass-12-lbs.jpg",
    title: "SERIOUS MASS",
     
    reviews: "(123 reviews)",
    prevPrice: "රු 21,000.",
    newPrice: "රු 20,000.",
    company: "Vans",
    category: "Mass Gainer",
  },
  {
    img: "https://supplementfactory.lk/wp-content/uploads/2014/12/Inner-Armour-Hard-Mass-12-lbs.jpg",
    title: "HARD MASS GAINER",
     
    reviews: "(123 reviews)",
    prevPrice: "රු 22,500",
    newPrice: "රු 19,500",
    company: "Nike",
    category: "Mass Gainer",
  },
  {
    img: "https://supplementfactory.lk/wp-content/uploads/2015/01/Rc-King-Mass-15-lbs-2.jpg",
    title: "KING MASS XL",
     
    reviews: "(123 reviews)",
    prevPrice: "රු 32,500",
    newPrice: "රු 29,500",
    company: "RC",
    category: "Mass Gainer",
  },
  {
    img: "https://supplementfactory.lk/wp-content/uploads/2017/10/Dymatize-Elite-whey-5-lbs.jpg",
    title: "DYMATIZE ELITE",
     
    reviews: "(123 reviews)",
    prevPrice: "රු 32,000",
    newPrice: "රු 29,000.00",
    company: "Dymatize",
    category: "Proteins",
  },
  {
    img: "https://supplementfactory.lk/wp-content/uploads/2019/08/MuscleMeds-Carnivor-Shred-4-lbs.jpg",
    title: "CARNIVOR SHRED",
     
    reviews: "(123 reviews)",
    prevPrice: "රු 25,000",
    newPrice: "රු 19,000",
    company: "Nike",
    category: "Mass Gainer",
  },
  {
    img: "https://supplementfactory.lk/wp-content/uploads/2017/08/MusclePharm-Combat-Powder-4-lbs.jpg",
    title: "MUSCLEPHARM COMBAT",
     
    reviews: "(123 reviews)",
    prevPrice: "රු 28,000",
    newPrice: "රු 25,000",
    company: "MP",
    category: "Proteins",
  },

  {
    img: "https://supplementfactory.lk/wp-content/uploads/2018/03/MuscleMeds-Carnivor-Beef-Amino.jpg",
    title: "CARNIVOR BEEF AMINOS",
     
    reviews: "(123 reviews)",
    prevPrice: "රු 9,500",
    newPrice: " රු 8,500",
    company: "Nike",
    category: "Proteins",
  },
  {
    img: "https://supplementfactory.lk/wp-content/uploads/2023/10/Kevin-Levrone-Gold-Creatine-300g-510x492.jpg",
    title: "LEVRONE GOLD",
     
    reviews: "(123 reviews)",
    prevPrice: "රු 9,500",
    newPrice: " රු 7,500",
    company: "Adidas",
    category: "CREATINE",
  },
  {
    img: "https://supplementfactory.lk/wp-content/uploads/2022/09/Skull-Labs-Creatine-300g.jpg",
    title: "SKULL LABS® CREATINE",
     
    reviews: "(123 reviews)",
    prevPrice: "රු 9,500",
    newPrice: "රු 7,500",
    company: "Adidas",
    category: "CREATINE",
  },
  {
    img: "https://supplementfactory.lk/wp-content/uploads/2024/05/Ultimate-Creatine-300g.jpg",
    title: "ULTIMATE CREATINE",
     
    reviews: "(123 reviews)",
    prevPrice: "රු 9,500",
    newPrice: " රු 6,999",
    company: "Adidas",
    category: "CREATINE",
  },
  {
    img: "https://supplementfactory.lk/wp-content/uploads/2024/02/Qumtrax-Creatine-500g.jpg",
    title: "QUAMTRAX CREATINE",
     
    reviews: "(123 reviews)",
    prevPrice: "රු 14,000",
    newPrice: " රු 11,000",
    company: "Adidas",
    category: "CREATINE",
  },
];

export default data;
