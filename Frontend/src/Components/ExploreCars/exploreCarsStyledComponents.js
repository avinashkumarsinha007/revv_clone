import styled from "styled-components";

const Image = styled.img`
  width: ${(props) => (props.icon ? "15px" : "170px")};
  margin-right: ${(props) => (props.icon ? "5px" : null)};
`;
const Section = styled.div`
  display: ${(props) =>
    props.cards ? "flex" : props.specs ? "flex" : props.icon ? "flex" : null};
  flex-direction: ${(props) =>
    props.cards
      ? "row"
      : props.specs
      ? "row"
      : props.carinfo
      ? "column"
      : "row"};
  /* border: ${(props) =>
    props.cards
      ? "1px solid red"
      : props.carinfo
      ? "1px solid green"
      : null}; */
  flex-basis: ${(props) =>
    props.imagesection ? "30%" : props.carinfo ? "50%" : null};
  margin: ${(props) => (props.icon ? "0px 10px" : null)};
  align-items: center;
  border-radius: 5px;
  border: ${(props) => (props.cards ? "1px solid #E7E7E8" : null)};
  box-shadow: ${(props) => (props.cards ? "0px 0px 8px #E7E7E8" : null)};
  margin-top: 10px;
  &:hover {
    box-shadow: ${(props) => (props.cards ? "none" : null)};
  }
  padding: ${(props) => (props.cards ? " 0px 10px" : null)};
`;
const Text = styled.p`
  text-decoration: ${(props) => (props.baseprice ? "line-through" : null)};
  font-size: ${(props) =>
    props.discountprice
      ? "28px"
      : props.baseprice
      ? "23px"
      : props.carName
      ? "20px"
      : null};
  font-weight: ${(props) =>
    props.discountprice
      ? "900"
      : props.baseprice
      ? "500"
      : props.carName
      ? "600"
      : null};
  color: ${(props) => (props.baseprice ? "grey" : "black")};
`;

export { Image, Section, Text };
