const oneProduct = {
    id:'01',
    name:'remera', 
    description:"Lorem ipsum dolor sit amet", 
    price:1250, 
    img:'https://picsum.photos/200', 
    stock:5
  };
  
  const getOneProduct = new Promise((resolve) => {
    setTimeout(() => {
      resolve(oneProduct);
    }, 2000);
  });
  
  export default getOneProduct;