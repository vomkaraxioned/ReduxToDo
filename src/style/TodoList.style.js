import styled,{ keyframes } from "styled-components";

const scaleout = keyframes`
  from{transform:translateX(100%)}
  to{transform:translateX(0)}
`;

const moveOut = keyframes`
  from{ 
    transform:translateX(0) scale(.5);
    opacity:1;
   }
  to{ 
    transform:translateX(-1000%);
    opacity:.8;
   }
`;

const TodoList = styled.ul`
  width:90%;
  margin:0 auto; 
  display:flex;
  flex-wrap:wrap;
  overflow:hidden;

  .moveOut { animation:${moveOut} 1s }

  li {
    padding:10px 2%;
    height:128px;
    border-radius:10px;
    margin:0 1% 15px 0;
    display:flex;
    position:relative;
    background:#fff;
    cursor:pointer;
    flex-basis:20%;
    flex-direction:column;

    &:nth-child(4n) { margin-rigth:0 }

    span { 
      width:24%;
      padding:4px 0;
      border:2px solid #454545;
      border-radius:10px;
      position:absolute;
      right:2%;
      background:#6a5aab;
      text-align:center;
     }

    textarea { 
      flex-basis:100%;

      &:focus { outline:1px solid #000 }
    }
    
    div {
      display:flex;
      justify-content:flex-end;

      button {
        border:none;
        background:none;
        text-indent:-9999px;

        &::before {
          float:right;
          font-family:'FontAwesome';
          font-size:21px;
          font-weight:900;
          text-indent:0;
        }

        &:first-child::before { 
          color:#271c6c;
          content:'\f303';
        }

        &:nth-child(2)::before { 
          color:#008000;
          content:'\f00c';
        }

        &:last-child::before { 
          color:#ff0000;
          content:'\f00d';
        }
      }
    }

    @media only screen and (min-width: 1024px) {
      animation:${scaleout} 1s;
      &:hover { transform:scale(.9) }
    }

    @media only screen and (max-width: 995px) {
      flex-basis:28%;
    }

    @media only screen and (max-width: 768px) {
      flex-basis:45%;
    }

    @media only screen and (max-width: 480px) {
      margin:0 auto 25px auto;
      flex-basis:80%;
    }
  }

  .err {
    padding:40px 0 ;
    background:none;
    flex-basis:100%;
    font-size:28px;
    text-align:center;
  }
`;

export default TodoList;