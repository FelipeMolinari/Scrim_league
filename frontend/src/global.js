import { createGlobalStyle } from "styled-components";

// export const Container = styled.div`
//   display: grid;
//   grid-template-rows: 60px 1fr;
//   grid-template-columns: 252px 1fr;
//   grid-template-areas:
//     "header header"
//     "aside content";
//   width: 100%;
//   height: 100%;
// `;

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto|Source+Sans+Pro&display=swap');
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  outline: 0px
}
html,
    body,
    #root {
      height: 100%;
    }
body{
  background: #FCFCFC;
  -webkit-font-smoothing: antialiased;
}
body button input a{
  font: 16px 'Source Sans Pro', sans-serif
}
h1 {
  font: 24px 'Roboto', sans-serif;
}
span, strong, p{
  font: 16px 'Roboto', sans-serif;
}
button{
  cursor: pointer;
}
`;