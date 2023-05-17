import React from "react";
import classes from "./ProductList.module.css";

function ItemList({ product, onBookmarkClick }) {
  return (
    <ul className={classes.itemList}>
      {product.map((item) => {
        switch (item.type) {
          case "Product":
            return (
              <li className={classes.item} key={item.id}>
                <span className={classes.imgBox}>
                  <img
                    className={classes.img}
                    src={item.image_url}
                    alt={item.title}
                  />
                  <img
                    className={classes.bookmark}
                    src="bookmark_off.png"
                    alt="bookmark"
                    onClick={() => onBookmarkClick(item)}
                  />
                </span>
                <span className={classes.productLine}>
                  <span className={classes.title}>{item.title}</span>
                  <span className={classes.percent}>
                    {item.discountPercentage}%
                  </span>
                </span>
                <span className={classes.price}>
                  {item.price
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </span>
              </li>
            );
          case "Category":
            return (
              <li className={classes.item} key={item.id}>
                <span className={classes.imgBox}>
                  <img
                    className={classes.img}
                    src={item.image_url}
                    alt={item.title}
                  />
                  <img
                    className={classes.bookmark}
                    src="bookmark_off.png"
                    alt="bookmark"
                    onClick={() => onBookmarkClick(item)}
                  />
                </span>
                <span className={classes.CategoryTitle}>#{item.title}</span>
              </li>
            );
          case "Exhibition":
            return (
              <li className={classes.item} key={item.id}>
                <span className={classes.imgBox}>
                  <img
                    className={classes.img}
                    src={item.image_url}
                    alt={item.title}
                  />
                  <img
                    className={classes.bookmark}
                    src="bookmark_off.png"
                    alt="bookmark"
                    onClick={() => onBookmarkClick(item)}
                  />
                </span>
                <span className={classes.CategoryTitle}>#{item.title}</span>
                <span className={classes.CategorySubtitle}>
                  #{item.sub_title}
                </span>
              </li>
            );
          case "Brand":
            return (
              <li className={classes.item} key={item.id}>
                <span className={classes.imgBox}>
                  <img
                    className={classes.img}
                    src={item.brand_image_url}
                    alt={item.brand_name}
                  />
                  <img
                    className={classes.bookmark}
                    src="bookmark_off.png"
                    alt="bookmark"
                    onClick={() => onBookmarkClick(item)}
                  />
                </span>
                <span className={classes.productLine}>
                  <span className={classes.title}>{item.brand_name}</span>
                  <span className={classes.cusNum}>관심고객수</span>
                </span>
                <span className={classes.follower}>{item.follower}</span>
              </li>
            );
          default:
            return null;
        }
      })}
    </ul>
  );
}
export default ItemList;
