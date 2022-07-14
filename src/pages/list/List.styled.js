import styled from "styled-components";

export const ListCotainer = styled.div`
  @font-face {
    font-family: "YUniverse-L";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_yuniverse@1.0/YUniverse-L.woff2")
      format("woff2");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "YUniverse-L";
  font-weight: bolder;

  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin: ${props => props.mg};
  background-color: ${props => props.backColor};
`;

export const TextBox = styled.div`
  position: relative;
  width: ${props => props.width};
  height: ${props => props.height};
  padding: ${props => props.pd};
  margin: ${props => props.mg};
`;

export const TextLine = styled.div`
  display: flex;
  align-items: center;
  margin: ${props => props.mg};
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
`;

export const FilterBox = styled.div`
  width: 250px;
  height: 700px;
  margin-right: 50px;
  padding: 20px;
  border: 2px solid #f3f3f3;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const ListBox = styled.div`
  width: 600px;
  /* align-items: center; */
`;

export const CalendarBox = styled.div`
  position: absolute;
`;

export const Button = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.mg};
  padding: ${props => props.pd};
  border: ${props => props.border};
  border-radius: 3px;
  color: ${props => props.color};
  background-color: ${props => props.backColor};
  font-size: ${props => props.fontSize};
`;

export const Hr = styled.hr`
  border: none;
  background-color: #ebebeb;
  height: 1px;
`;

export const CheckBox = styled.input`
  margin-right: 7px;
  color: #707070;
  accent-color: #f5303f;
  zoom: 1.5;
`;

export const CheckBoxes = styled.div`
  width: 50%;
  display: inline-flex;
  align-items: center;
  padding: 5px 5px 5px 0;
  color: #707070;
  font-size: 13px;
`;

export const InputTag = styled.input`
  width: ${props => props.width};
  margin: ${props => props.mg};
  accent-color: #f5303f;
  zoom: 1.5;
`;

export const Radio = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 0;
`;

export const Label = styled.label`
  display: block;
  padding-top: 7px;
`;

export const Lists = styled.div`
  margin: 30px 0 0 0px;
`;

export const ListImg = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.mg};
`;

export const ListItem = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
  justify-content: center;
  align-items: ${props => props.alItem};
  width: ${props => props.width};
  height: ${props => props.height};
  margin: ${props => props.mg};
  border-bottom: ${props => props.borderBtm};
  background-color: ${props => props.backColor};
  cursor: pointer;
`;

export const Sorting = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: 40px;
  border: solid 0.7px #ebebeb;
  margin: ${props => props.mg};
  color: ${props => props.color};
  background-color: #fcfcfc;
  user-select: none;
  cursor: pointer;
`;

export const Price = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Span = styled.span`
  display: inline-block;
  padding: ${props => props.pd};
  margin: ${props => props.mg};
  color: ${props => props.color};
  background-color: ${props => props.backColor};
  font-size: 13px;
`;

export const CustomBox = styled.div`
  position: absolute;
  bottom: 25px;
  right: -45px;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid black;
  font-size: 12px;
  text-align: center;
  z-index: -10;
`;

export const CustomText = styled.div`
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`;
