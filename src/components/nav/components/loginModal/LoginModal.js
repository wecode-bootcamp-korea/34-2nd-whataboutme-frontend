import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { KAKAO_AUTH_URL } from "../../../../OAuth";

const LoginModal = ({ handleModal }) => {
  const redirectKaKao = () => window.open(KAKAO_AUTH_URL, "_self");

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  return (
    <AreaWrapper>
      <BlankWrapper onClick={handleModal} />
      <Modal>
        <CloseButton onClick={handleModal}>X</CloseButton>

        <Logo>
          <LogoLink to="/">나는어때</LogoLink>
        </Logo>

        <KaKaoButton onClick={redirectKaKao}>
          <img src="/images/kakao_login_medium_wide.png" alt="kakao_image" />
        </KaKaoButton>
      </Modal>
    </AreaWrapper>
  );
};

const AreaWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  ${({ theme: { variables } }) => variables.area(`100%`, `100%`)}
  z-index: 398;
`;

const BlankWrapper = styled.div`
  ${({ theme: { variables } }) => variables.area(`100%`, `100%`)}
  background-color: ${({ theme: { style } }) => style.colors.black};
  opacity: 0.5;
  z-index: 402;
`;

const Modal = styled.div`
  position: relative;
  ${({ theme: { variables } }) => variables.blockCenter}
  ${({ theme: { variables } }) =>
    variables.flexSet("column", "center", "center")}
  ${({ theme: { variables } }) => variables.area("400px", "200px")}
  gap: 20px;
  border: 0;
  border-radius: ${({ theme: { style } }) => style.radius.regular};
  background-color: ${({ theme: { style } }) => style.colors.white};
  z-index: 400;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px 12px;
  border: 0;
  border-radius: 50%;
`;

const Logo = styled.span`
  min-width: 100px;
  font-size: 30px;
  font-weight: ${({ theme: { style } }) => style.fontWeights.extraBold};
`;

const LogoLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme: { style } }) => style.colors.red};
`;

const KaKaoButton = styled.button`
  display: block;
  border: 0;
  background-color: ${({ theme: { style } }) => style.colors.white};
`;

export default LoginModal;
