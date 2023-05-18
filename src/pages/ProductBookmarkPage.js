import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import axios from "axios";
import BookmarkList from "../components/BookmarkList";
// import LocalStorage from "../LocalStorage";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Toast from "../components/Toast"

function ProductBookmarkPage() {
  const [product, setProduct] = useState([]);
  // const [product, setProduct] = LocalStorage("bookmarkLists", []);
  // const [index, setIndex] = useState(0);
  // const [bookmarkItems, setBookmarkItems] =  LocalStorage("bookmarkLists", []);
  const [bookmarkList, setBookmarkList] = useState([]);

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
  
  const showToast = (image                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       ) => {
    toast.info(<Toast image={image}/>, {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1000, 
      hideProgressBar: true,
      className: 'custom-toast',
      bodyClassName: 'custom-toast-body',
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
      showToast("Toast_off.png");
    } else {
      setBookmarkList((prevBookmarkList) => prevBookmarkList.concat(item));
      showToast("Toast_on.png");
    }
  };

  return (
    <>
      <h2 id="item-list-title">상품 리스트</h2>
      <ProductList
        product={product}
        setProduct={setProduct}
        onBookmarkClick={handleBookmarkClick}
      />
      <h2 id="item-list-title">북마크 리스트</h2>
      <BookmarkList
        product={bookmarkList}
        setBookmarkList={setBookmarkList}
        onBookmarkClick={handleBookmarkClick}
      />
      <ToastContainer />
    </>
  );
}
export default ProductBookmarkPage;
