import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  font-size: 112.5%;
  line-height: 1.5;
  padding: 10px
}

input,
label,
textarea,
button {
  font-size: 1em;
}
`;
