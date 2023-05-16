import React from "react";
import classes from "./ProductBookmarkList.module.css";

function ItemList({ product }) {
  console.log("——————————————————");
  console.log(product);
  console.log("——————————————————");
  return (
    <ul className={classes.itemList}>
      <header id="item-list-title">상품 리스트</header>
      {product &&
        product.map((item) => {
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
                    =-[[]]
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
                  </span>
                  <span className={classes.Categorytitle}>#{item.title}</span>
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
                  </span>
                  <span className={classes.Categorytitle}>#{item.title}</span>
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
                  </span>
                  <span className={classes.productLine}>
                    <span className={classes.title}>{item.brand_name}</span>
                    <span className={classes.cusNum}>
                      관심고객수
                    </span>
                  </span>
                  <span className={classes.follower}>
                    {item.follower}
                  </span>
                </li>
              );
            default:
              return null;
          }
        })}
      <header id="item-list-title">북마크 리스트</header>
    </ul>
  );
}
export default ItemList;
