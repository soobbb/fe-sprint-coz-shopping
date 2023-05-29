import { useState, useEffect } from "react";

import all from "../assets/productsNav/all.png";
import product from "../assets/productsNav/product.png";
import category from "../assets/productsNav/category.png";
import exhibition from "../assets/productsNav/exhibition.png";
import brand from "../assets/productsNav/brand.png";

import styled from "styled-components";

export const NavContainer = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
`;
export const NavList = styled.li`
  margin: 1rem;
  cursor: pointer;
  > .nav-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > img {
      margin-bottom: 0.3rem;
    }
    > span {
      font-weight: 400;
    }
  }
`;
const ProductsNav = ({ setIndex }) => {
  const [images, setImages] = useState([]);
  const titles = ["전체", "상품", "카테고리", "기획전", "브랜드"];

  useEffect(() => {
    setImages([all, product, category, exhibition, brand]);
  }, []);

  return (
    <NavContainer>
      {images.map((image, idx) => {
        return (
          <NavList key={idx} onClick={() => setIndex(idx)}>
            <div className="nav-box">
              <img src={image} alt={image} />
              <span>{titles[idx]}</span>
            </div>
          </NavList>
        );
      })}
    </NavContainer>
  );
};

export default ProductsNav;
