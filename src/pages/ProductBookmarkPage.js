import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";
import BookmarkList from "../components/BookmarkList";
// import LocalStorage from "../LocalStorage";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../components/Toast";
import Modal from "../components/Modal";

function ProductBookmarkPage() {
  const [product, setProduct] = useState([]);
  // const [product, setProduct] = LocalStorage("bookmarkLists", []);
  // const [index, setIndex] = useState(0);
  // const [bookmarkItems, setBookmarkItems] =  LocalStorage("bookmarkLists", []);
  const [bookmarkList, setBookmarkList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    axios
      .get("http://cozshopping.codestates-seb.link/api/v1/products?", {
        params: {
          count: 4,
        },
      })
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
      <h2 id="item-list-title">상품 리스트</h2>
      <ProductList
        product={product}
        setProduct={setProduct}
        onBookmarkClick={handleBookmarkClick}
        handleImageClick={handleImageClick}
      />
      <h2 id="item-list-title">북마크 리스트</h2>
      <BookmarkList
        product={bookmarkList}
        setBookmarkList={setBookmarkList}
        onBookmarkClick={handleBookmarkClick}
        handleImageClick={handleImageClick}
      />
      <Toast />
      {showModal && (
        <Modal image={selectedImage} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}
export default ProductBookmarkPage;
