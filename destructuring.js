//ARRAY DESTRUCTURING
const products=[
    ["Laptop",10000],
    ["Phone",5000],
    ["Tablet",2500]
];
const [,[secondProductName, secondProductPrice]]=products;
console.log(`Second Product: ${secondProductName}`);
console.log(`Second Product Price: ${secondProductPrice}`);//Second Product: Phone  Second Product Price: 5000


//OBJECT DESTRUCTURING
const movie={
    title :"The Fast and The Furious",
    discribtion:"The Fast and the Furious is American action film",
    release: "2001"
};
const {title,release}=movie;
console.log(`${title} is a ${release} American action film `);//The Fast and The Furious is a 2001 American action film 