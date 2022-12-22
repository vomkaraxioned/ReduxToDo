import styled from "styled-components";

const FormStyle = styled.div`
  form { 
    width:75%;
    padding-bottom:54px;
    margin:0 auto;
    display:flex;
    justify-content:center;

    @media only screen and (max-width: 480px) {
      width:100%;
    }

    div:last-child{
      position:relative;

      &:before{
        width:100%;
        height:100%;
        display:flex;
        position:absolute;
        align-items:center;
        color:#fff;
        content:'\f055';
        justify-content:center;
        font-family:'FontAwesome';
        font-size:21px;
        font-weight:900;
        pointer-events:none;
      }

      &:hover { transform:scale(1.2) }
    }
  }
`;

export default FormStyle;