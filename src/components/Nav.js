import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import 로고 from "../assets/로고.png";
import 아이콘 from "../assets/아이콘.png";

const NavContainer = styled.nav`
  background-color: white;
  width: 100%;
  height: 4rem;
  position: sticky;
  top: 0;
  border-bottom: solid 1px rgb(212, 212, 212);
  display: grid;
  place-items: left;
`;

const NavTitle = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
`;

const Logo = styled.img`
  margin-right: 20px;
  margin-top: 10px;
  margin-left: 50px;
`;

const LogoName = styled.span`
  font-size: xx-large;
  margin-right: auto;
  font-weight: 900;
  text-decoration: none;
  color: #000000;
`;

const Container = styled.div`
  position: relative;
  margin-left: auto;
  img:hover {
    cursor: pointer;
  }
`;

const DropdownContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  top: 100%;
  background-color: #f9f9f9;
  padding-right: 1px;
  border: 1px solid #ccc;
  width: 150px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;
const MenuLink = styled(Link)``;

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavContainer>
      <NavTitle>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo src={로고} alt="로고" />
          <LogoName>COZ Shopping</LogoName>
        </Link>
        <Container>
          <img
            src={아이콘}
            id="Dropdown"
            onClick={toggleDropdown}
            alt="드롭다운 토글 버튼"
          />
          <DropdownContent isOpen={isOpen}>
            <MenuLink
              className="menu"
              to="/"
              style={{ color: "black", textDecoration: "none" }}
            >
              전수빈님, 안녕하세요!
            </MenuLink>
            <MenuLink
              className="menu"
              to="/product/list"
              style={{ color: "black", textDecoration: "none" }}
            >
              상품리스트 페이지
            </MenuLink>
            <MenuLink
              className="menu"
              to="/bookmark"
              style={{ color: "black", textDecoration: "none" }}
            >
              북마크 페이지
            </MenuLink>
          </DropdownContent>
        </Container>
      </NavTitle>
    </NavContainer>
  );
};

export default Nav;
