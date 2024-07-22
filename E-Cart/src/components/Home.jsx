import React from "react";
import toast from "react-hot-toast";

const img1 =
  "https://www.reliancedigital.in/medias/Apple-MGN63HNA-Laptops-491946461-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzczNDJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDVhL2gyZC85NDQzMDgzNTgzNTE4LmpwZ3xhYzRiNWIxZGQ2NjNiNWIyYjI0Y2ZkYTZlZWQ3MTFjZTMxYzVmNDBiNmM5Mzk5OTM2OGVkZmExMjMyYjIxNDQ4";
const img2 =
  "https://www.tatango.com/wp-content/uploads/2016/10/iOS-Link-Previews-SMS-Marketing-1024x693.png";

const Home = () => {
  const productList = [
    { name: "macbook", price: 2000, id: "jwiurd", imgSrc: img1 },
    { name: "iPhone", price: 1200, id: "fnwpppi", imgSrc: img2 },
  ];

  const addToCartHandler = (options) => {
    console.log(options);
    toast.success("Added to card");
  };

  return (
    <div className="Home">
      {productList.map((product) => (
        <ProductCard
          key={product.id}
          name={product.name}
          price={product.price}
          id={product.id}
          imgSrc={product.imgSrc}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ name, id, price, handler, imgSrc }) => {
  return (
    <div className="ProductCard">
      <img src={imgSrc} alt={name} />
      <p>{name}</p>
      <h4>${price}</h4>
      <button onClick={() => handler({ name, price, id, quantity: 1, imgSrc })}>
        Add To Cart
      </button>
    </div>
  );
}; // If u use {} , then return and if u use (), no need to return anything.

export default Home;
