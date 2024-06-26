//GROCERY APP (switch case)

import { useState } from "react";

const Product = ({ index, product }) => {
   
    const { onVote, name, votes } = product
  
    const plus = () => {
      onVote("plus", index);
    };
    const minus = () => {
      onVote("minus", index);
    };
    return (
      <li>
        <span>{name}</span> - <span>votes: {votes}</span>
        <button onClick={plus}>+</button>{" "}
        <button onClick={minus}>-</button>
      </li>
    );
  };
  
  const GroceryApp = ({ products }) => {
    let [products, setProducts] = useState(products);
    const onVote = (dir, index) => {
      switch(dir){
        case "plus":
          const newProductPlus = {
            ...products[index],
            votes: products[index].votes + 1
          };
          newProducts[index] = newProductPlus;
          setProducts(newProducts);
          break;
        case "minus":
          const newProductMinus = {
            ...products[index],
            votes: products[index].votes - 1
          };
          newProducts[index] = newProductMinus;
          return setProducts(newProducts);
        default:
          throw new Error("error");
  
      }
       
    };
    
    return (
      <ul>
        {
        products.map((product, index) => {
          product = {onVote, ...product};
          return <Product product={product} index={index} key={index}/>
        })
        }
      </ul>
    );
  }
  

  root.render(<GroceryApp
    products={[
      { name: "Oranges", votes: 0 },
      { name: "Bananas", votes: 0 }
    ]}
  />);
  