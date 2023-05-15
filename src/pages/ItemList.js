import React from "react";
import initialState from "../reducers/initialState";

function ItemList({ generalProducts }) {
  return (
    <article id="item-list-container">
      <main id="item-list-body">
        <header id="item-list-title">상품 리스트</header>
        <header id="item-list-title">북마크 리스트</header>
      </main>
    </article>
  );
}
export default ItemList;
