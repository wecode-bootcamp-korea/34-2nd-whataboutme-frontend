import React, { useState } from "react";
import styled from "styled-components";
import { useToggle } from "../../../../hooks/useHandleStatus";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const SearchBox = () => {
  const [isDropDown, handleDropDown] = useToggle();

  const [selectCategory, setSelectCategory] = useState("지역");

  const innerSelectorName = event => {
    const { innerText } = event.target;
    setSelectCategory(innerText);
    handleDropDown();
  };

  return (
    <Wrapper>
      <SelectWrapper>
        <Selection onClick={handleDropDown}>
          <SelectionOption>
            <Option>{selectCategory}</Option>
          </SelectionOption>
          {isDropDown ? (
            <FontAwesomeIcon
              icon={faAngleUp}
              style={{
                position: "absolute",
                top: "-2px",
                right: "20px",
                transform: "translate(50%, 50%)",
              }}
            />
          ) : (
            <FontAwesomeIcon
              icon={faAngleUp}
              style={{
                position: "absolute",
                top: "-2px",
                right: "20px",
                transform: "translate(50%, 50%) rotateX(180deg)",
              }}
            />
          )}
        </Selection>
        {isDropDown && (
          <SelectModal>
            <TitleOption onClick={innerSelectorName}>지역</TitleOption>
            <TitleOption onClick={innerSelectorName}>지하철</TitleOption>
            <TitleOption onClick={innerSelectorName}>대학교</TitleOption>
          </SelectModal>
        )}
      </SelectWrapper>

      <SearchWrapper>
        <Search type="text" placeholder={LOCATION_DESC[selectCategory]} />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{
            position: "absolute",
            top: 0,
            right: "20px",
            transform: "translate(50%, 50%)",
          }}
        />
      </SearchWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${({ theme: { variables } }) => variables.flexSet()}
`;

const SelectWrapper = styled.div`
  position: relative;
`;

const Selection = styled.div`
  ${({ theme: { variables } }) => variables.flexSet(``, `space-between`, ``)}
  position: relative;
  padding: 8px;
  background-color: ${({ theme: { style } }) => style.colors.white};
  border: 1px solid ${({ theme: { style } }) => style.colors.black};
  border-radius: ${({ theme: { style } }) => style.radius.thin};
  cursor: pointer;
`;

const SelectionOption = styled.div`
  position: relative;
  top: 0;
  left: 0;
  ${({ theme: { variables } }) => variables.area(`70px`, ``)}
  margin-right: 30px;
`;

const Option = styled.div``;

const SelectModal = styled.div`
  position: absolute;
  background-color: ${({ theme: { style } }) => style.colors.white};
  border: 0;
  border-radius: ${({ theme: { style } }) => style.radius.thin};
`;

const TitleOption = styled.div`
  ${({ theme: { variables } }) => variables.area(`118px`, ``)}
  padding: 8px;
  border: 1px solid ${({ theme: { style } }) => style.colors.black};
  border-radius: ${({ theme: { style } }) => style.radius.thin};
  cursor: pointer;
`;

const SearchWrapper = styled.div`
  position: relative;
  ${({ theme: { variables } }) => variables.area(``, `100%`)}
`;

const Search = styled.input`
  ${({ theme: { variables } }) => variables.area(`250px`, ``)}
  padding: 10px;
  border: 1px solid ${({ theme: { style } }) => style.colors.black};
  border-radius: ${({ theme: { style } }) => style.radius.thin};
  outline: 0;
`;
export default SearchBox;

const LOCATION_DESC = {
  지역: "동,읍,면을 입력해 주세요",
  지하철: "지하철역 이름을 입력해 주세요",
  대학교: "대학교 이름을 입력해 주세요",
};
