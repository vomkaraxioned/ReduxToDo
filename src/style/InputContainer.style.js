import styled from "styled-components";
const InputContainer = styled.div`
  display:flex;
  justify-content:center;
  flex-basis:${props=>props.basis};

  input {
    width:100%;
    border:none;
    outline:none;

    &[type=text],&[type=email] {
      padding:7px 2%;
      border-radius:5px;
      margin-right:3%;

      &:focus { outline:2px solid #271c6c; }
    }

    &[type=submit] {
      width:50px;
      height:50px;
      border:2px solid #fff;
      border-radius:50%;
      background:#271c6c;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      text-indent:-9999px;
      display:block;
    }
  }

`;

export default InputContainer;