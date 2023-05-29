import React, { useEffect, useState } from "react";
// import ProductList from "../components/ProductList";
// import BookmarkList from "../components/BookmarkList";
// import LocalStorage from "../LocalStorage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../components/Toast";
import Modal from "../components/Modal";
import ProductList from "../components/ProductList";
import { styled } from "styled-components";
import Category from "../components/Category";
import Productpagelist from "../components/ProductPagelist"

function ProductPage() {
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

  const getProducts = () => {
    fetch(`http://cozshopping.codestates-seb.link/api/v1/products?`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setItems(data.map((item) => ({ ...item, bookmark: false })));
        setProduct(data.map((item) => ({ ...item, bookmark: false })));
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    // console.log('index 가 바뀔 때 마다');
    setProduct(
      items.filter((item) => {
        console.log(titles[index - 1]);
        return index > 0 ? item.type === titles[index - 1] : item;
      })
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
  const ItemListContainer = styled.ul`
  display: flex;
  /* justify-content: flex-start; */
  width: 100%;
  flex-wrap: wrap;
`;
  return (
    <>
      <Category setIndex={setIndex} />
      <Productpagelist
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
export default ProductPage;
