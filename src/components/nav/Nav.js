import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import SearchBox from "./components/searchBox/SearchBox";
import LoginModal from "./components/loginModal/LoginModal";
import { useToggle } from "../../hooks/useHandleStatus";

const Nav = () => {
  const navigate = useNavigate();
  const [isModal, handleModal] = useToggle();
  const [loginToken, setLoginToken] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hoverdMenu, setHoverdMenu] = useState(false);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  useEffect(() => {
    setLoginToken(localStorage.getItem("token"));
    window.addEventListener("scroll", updateScroll);
  }, []);

  const goToList = cate => {
    navigate(`/list?region=${cate}`);
  };

  return (
    <RealNav>
      <NavBar primary={scrollPosition}>
        <NavWrapper>
          <Logo>
            <LogoLink primary={scrollPosition} to="/">
              나는어때
            </LogoLink>
          </Logo>
          <SearchWrapper>
            <SearchBox />
          </SearchWrapper>
          <NavList>
            <ListItemMenu>
              <ListLink primary={scrollPosition} to="/list">
                내주변
              </ListLink>
            </ListItemMenu>
            <ListItemMenu>
              <ListLocal
                onMouseEnter={() => setHoverdMenu(true)}
                onMouseLeave={() => setHoverdMenu(false)}
                primary={scrollPosition}
                to="/detail"
              >
                지역별
                <CitiesGroup hovered={hoverdMenu}>
                  {CITY_NAME.map(citys => (
                    <CityName
                      key={citys.id}
                      onClick={() => {
                        goToList(citys.city);
                      }}
                    >
                      {citys.city}
                    </CityName>
                  ))}
                </CitiesGroup>
              </ListLocal>
            </ListItemMenu>
            <ListItemMenu>
              <ListLink primary={scrollPosition} to="/more">
                더보기
              </ListLink>
            </ListItemMenu>
            <ListItemMenu>
              <ItemMenuButton
                primary={scrollPosition}
                onClick={loginToken ? logout : handleModal}
              >
                {loginToken ? "로그아웃" : "로그인"}
              </ItemMenuButton>
            </ListItemMenu>
          </NavList>
        </NavWrapper>
      </NavBar>
      {isModal && <LoginModal handleModal={handleModal} />}
    </RealNav>
  );
};
const RealNav = styled.div`
  padding-top: 72px;
  @font-face {
    font-family: "yg-jalnan";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_four@1.2/JalnanOTF00.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "yg-jalnan";
`;

const NavBar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  ${({ theme: { variables } }) => variables.area(``, `72px`)}
  padding: 0 10%;
  background-color: ${({ primary, theme: { style } }) =>
    primary < 10 ? style.colors.red : style.colors.white};
  box-shadow: 0px 2px 3px 0px rgb(0 0 0 / 10%);
  z-index: 3;
`;

const Logo = styled.span`
  font-size: ${({ theme: { style } }) => style.fontSizes.xxl};
  font-weight: ${({ theme: { style } }) => style.fontWeights.extraBold};
`;

const SearchWrapper = styled.div`
  font-size: ${({ theme: { style } }) => {
    return style.fontSizes.xl;
  }};
`;

const NavWrapper = styled.div`
  ${({ theme: { variables } }) => {
    return variables.flexSet(``, `space-between`, `center`);
  }}
  ${({ theme: { variables } }) => variables.area(``, `100%`)}
`;

const NavList = styled.ul`
  ${({ theme: { variables } }) => variables.flexSet(``, `flex-end`, `center`)}
  font-size: ${({ theme: { style } }) => style.fontSizes.lg};
`;

const ListItemMenu = styled.li`
  color: ${({ theme: { style } }) => style.colors.white};
  cursor: pointer;
`;

const LogoLink = styled(NavLink)`
  padding: 20px 20px;
  color: ${({ primary, theme: { style } }) =>
    primary < 10 ? style.colors.white : style.colors.red};

  &:hover {
    color: ${({ primary, theme: { style } }) =>
      primary < 10 ? style.colors.white : style.colors.red};
  }
`;

const ListLink = styled(LogoLink)`
  position: relative;
  top: 3px;
  display: inline-block;
  color: ${({ primary, theme: { style } }) =>
    primary < 10 ? style.colors.white : style.colors.black};

  &:link {
    transition: 0.5s;
  }

  &::after {
    position: relative;
    top: 3px;
    display: block;
    border-bottom: solid 5px ${({ theme: { style } }) => style.colors.white};
    content: "";
    color: ${({ theme: { style } }) => style.colors.black};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

const ListLocal = styled.span`
  position: relative;
  top: 3px;
  display: inline-block;
  padding: 20px;
  color: ${({ primary, theme: { style } }) =>
    primary < 10 ? style.colors.white : style.colors.black};
  transition: 0.5s;

  &:link {
    transition: 0.5s;
  }

  &::after {
    position: relative;
    top: 3px;
    display: block;
    border-bottom: solid 5px ${({ theme: { style } }) => style.colors.white};
    content: "";
    color: ${({ theme: { style } }) => style.colors.black};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active::after {
    transform: scaleX(1);
  }
`;

const CitiesGroup = styled.div`
  position: absolute;
  top: 63px;
  left: -6px;
  display: ${({ hovered }) => (hovered ? "block" : "none")};
  ${({ theme: { variables } }) => variables.area(`100px`, ``)}
  padding: 20px 0;
  border-radius: ${({ theme: { style } }) => style.radius.thin};
  background-color: ${({ theme: { style } }) => style.colors.white};
  box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 20%);
`;

const CityName = styled.div`
  ${({ theme: { variables } }) => variables.flexSet()}
  ${({ theme: { variables } }) => variables.area(`100%`, ``)}
  padding: 10px;
  color: ${({ theme: { style } }) => style.colors.black};

  &:hover {
    color: ${({ theme: { style } }) => style.colors.red};
  }
`;

const ItemMenuButton = styled.a`
  position: relative;
  top: 3px;
  display: inline-block;
  padding: 20px 20px;
  transition: 0.5s;
  color: ${({ primary, theme: { style } }) =>
    primary < 10 ? style.colors.white : style.colors.black};

  &:hover {
    color: ${({ primary, theme: { style } }) =>
      primary < 10 ? style.colors.white : style.colors.red};
  }

  &::after {
    position: relative;
    top: 3px;
    display: block;
    border-bottom: solid 5px ${({ theme: { style } }) => style.colors.white};
    content: "";
    color: ${({ theme: { style } }) => style.colors.black};
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export default Nav;

const CITY_NAME = [
  {
    id: 1,
    city: "서울",
  },
  {
    id: 2,
    city: "경기",
  },
  {
    id: 3,
    city: "인천",
  },
  {
    id: 4,
    city: "강원",
  },
  {
    id: 5,
    city: "제주",
  },
  {
    id: 6,
    city: "부산",
  },
  {
    id: 7,
    city: "경남",
  },
  {
    id: 8,
    city: "대구",
  },
  {
    id: 9,
    city: "경북",
  },
  {
    id: 10,
    city: "울산",
  },
  {
    id: 11,
    city: "대전",
  },
  {
    id: 12,
    city: "충남",
  },
  {
    id: 13,
    city: "충북",
  },
  {
    id: 14,
    city: "광주",
  },
  {
    id: 15,
    city: "전남",
  },
  {
    id: 16,
    city: "전북",
  },
];
