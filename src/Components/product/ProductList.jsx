import React from "react";
import styles from "../../css/ProductCard.module.css";
import { Link } from "react-router-dom";


import { products } from "../../utils/products"
const ProductCard = ({ title, image, description, tags }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <div className={styles.icons}>
          <i className="fa-solid fa-dollar-sign"></i>
          <i className="fa-solid fa-arrow-up-right-from-square"></i>
        </div>
      </div>
      <div className={styles.content}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.details}>
          <p>{description}</p>
          {tags && (
            <div className={styles.tags}>
              {tags.map((tag, index) => (
                <span key={index} className={styles.tag}>{tag}</span>
              ))}
            </div>
          )}
          <Link to={`/productos/catalogo/${title}`} className={styles.catalogButton}>Catalogo <i className="fa-solid fa-book-open"></i></Link>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {
  return (
    <div className={styles.container}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export { ProductList, products };