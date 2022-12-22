import styled from "styled-components";

const TabsStyle = styled.ul`
  padding:20px 0;
  display:flex;
  justify-content:center;

  li {
    padding:10px 2%;
    border-radius:50px;
    margin-right:5%;
    background-color:#fff;
    font-weight:700;
    text-align:center;
    text-transform:capitalize;

    &:last-child { margin-right:0}

    &:hover,active { transform:scale(1.1) }

    @media only screen and (max-width: 480px) {
      flex-basis:25%;
    }
  }
`;

export default TabsStyle;