import React from "react";
import styled from "styled-components";
import classes from "./ProductList.module.css";
import bookmarkOff from "../assets/bookmark_off.png";
import bookmarkOn from "../assets/bookmark_on.png";
const ItemListContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 10px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 260px;
  height: 150px;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 10px;
`;

const BookmarkIcon = styled.img`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #dcdcdc;
  cursor: pointer;
`;

const ProductLine = styled.span`
  display: flex;
`;

const Title = styled.span`
  font-weight: 800;
`;

const Percent = styled.span`
  color: #452cdd;
  font-weight: 800;
  margin-left: auto;
`;

const Price = styled.span`
  margin-left: auto;
`;

const CategoryTitle = styled.span`
  font-weight: 800;
  text-align: start;
  margin-left: 10px;
`;

const CategorySubtitle = styled.span`
  font-weight: 500;
  text-align: start;
  margin-left: 10px;
`;

const CustomNumber = styled.span`
  font-weight: 700;
  margin-left: auto;
`;

const Follower = styled.span`
  font-weight: 500;
  margin-left: auto;
`;

function ItemList({ product, onBookmarkClick, handleImageClick }) {
  return (
    <ItemListContainer>
      {product.map((item) => {
        switch (item.type) {
          case "Product":
            return (
              <Item key={item.id}>
                <ImageBox>
                  <div onClick={() => handleImageClick(item.image_url)}>
                    <Image
                      className={classes.img}
                      src={item.image_url}
                      alt={item.title}
                    />
                  </div>
                  <BookmarkIcon
                    className={classes.bookmark}
                    src={bookmarkOff}
                    alt="bookmark"
                    onClick={() => onBookmarkClick(item)}
                  />
                </ImageBox>
                <ProductLine>
                  <Title>{item.title}</Title>
                  <Percent>{item.discountPercentage}%</Percent>
                </ProductLine>
                <Price>
                  {item.price
                    .toString()
                    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}
                  원
                </Price>
              </Item>
            );
          case "Category":
            return (
              <Item key={item.id}>
                <ImageBox>
                  <div onClick={() => handleImageClick(item.image_url)}>
                    <Image
                      className={classes.img}
                      src={item.image_url}
                      alt={item.title}
                    />
                  </div>
                  <BookmarkIcon
                    className={classes.bookmark}
                    src={bookmarkOff}
                    alt="bookmark"
                    onClick={() => onBookmarkClick(item)}
                  />
                </ImageBox>
                <CategoryTitle>#{item.title}</CategoryTitle>
              </Item>
            );
          case "Exhibition":
            return (
              <Item key={item.id}>
                <ImageBox>
                  <div onClick={() => handleImageClick(item.image_url)}>
                    <Image
                      className={classes.img}
                      src={item.image_url}
                      alt={item.title}
                    />
                  </div>
                  <BookmarkIcon
                    className={classes.bookmark}
                    src={bookmarkOff}
                    alt="bookmark"
                    onClick={() => onBookmarkClick(item)}
                  />
                </ImageBox>
                <CategoryTitle>#{item.title}</CategoryTitle>
                <CategorySubtitle>#{item.sub_title}</CategorySubtitle>
              </Item>
            );
          case "Brand":
            return (
              <Item key={item.id}>
                <ImageBox>
                  <div onClick={() => handleImageClick(item.brand_image_url)}>
                    <Image
                      className={classes.img}
                      src={item.brand_image_url}
                      alt={item.brand_name}
                    />
                  </div>
                  <BookmarkIcon
                    className={classes.bookmark}
                    src={bookmarkOff}
                    alt="bookmark"
                    onClick={() => onBookmarkClick(item)}
                  />
                </ImageBox>
                <ProductLine>
                  <Title>{item.brand_name}</Title>
                  <CustomNumber>관심고객수</CustomNumber>
                </ProductLine>
                <Follower>{item.follower}</Follower>
              </Item>
            );
          default:
            return null;
        }
      })}
    </ItemListContainer>
  );
}

export default ItemList;
