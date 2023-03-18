import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy = [
  { id: "p1", price: 6, title: "My First Book", description: "My BOOk" },
  { id: "p2", price: 16, title: "My 2 First Book", description: "My 2 BOOk" },
  { id: "p3", price: 26, title: "My 3 First Book", description: "My 3 BOOk" },
  { id: "p4", price: 36, title: "My 4 First Book", description: "My 4 BOOk" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
