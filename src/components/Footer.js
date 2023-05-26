import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  height: 35px;
  position: fixed;
  bottom: 0;
  left: 0;
`;

const FooterText = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: solid 1px rgb(212, 212, 212);
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        개인정보 처리방침 | 이용 약관 All rights reserved@Codestates
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;