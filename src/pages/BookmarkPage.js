import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";
// import BookmarkList from "../components/BookmarkList";
// import LocalStorage from "../LocalStorage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../components/Toast";
import Modal from "../components/Modal";
// import ProductPagelist from "../components/ProductPagelist";
import { styled } from "styled-components";
import Category from "../components/Category";


function Bookmark() {
  const titles = ["Product", "Category", "Exhibition", "Brand"];
  const [items, setItems] = useState([]);
  const [product, setProduct] = useState([]);
  // const [product, setProduct] = LocalStorage("bookmarkLists", []);
  // const [index, setIndex] = useState(0);
  // const [bookmarkItems, setBookmarkItems] =  LocalStorage("bookmarkLists", []);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState();
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data.map((item) => ({ ...item, bookmark: false })));
      });
  };

  useEffect(() => {
    getProducts();
    setProducts(items.filter((item) => item.Bookmark === true));
  }, []);

  useEffect(() => {
    setProducts(
      items
        .filter((item) => {
          console.log(titles[index - 1]);
          return index > 0 ? item.type === titles[index - 1] : item;
        })
        .filter((e) => e.bookmark)
    );
  }, [index]);

  const showToast = (message) => {
    toast(message, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1000,
      hideProgressBar: true,
    });
  };

  const handleBookmarkClick = (item) => {
    const itemIndex = bookmarkList.findIndex(
      (bookmarkItem) => bookmarkItem.id === item.id
    );

    if (itemIndex > -1) {
      const updatedBookmarkList = [...bookmarkList];
      updatedBookmarkList.splice(itemIndex, 1);
      setBookmarkList(updatedBookmarkList);
      showToast("상품이 북마크에서 제거되었습니다.");
    } else {
      setBookmarkList((prevBookmarkList) => prevBookmarkList.concat(item));
      showToast("상품이 북마크에서 추가되었습니다.");
    }
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  return (
    <>
      <Category setIndex={setIndex} />
      <ProductList
        product={product}
        setProduct={setProduct}
        onBookmarkClick={handleBookmarkClick}
        handleImageClick={handleImageClick}
        index={index}
      />
      <Toast />
      {showModal && (
        <Modal image={selectedImage} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
export default Bookmark;
