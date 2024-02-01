import 'index.css';
const { createGlobalStyle } = require('styled-components');

const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  color: var(--color-primary);
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Pretendard', sans-serif; /* 폰트 설정 */
  word-break: keep-all;
}
ul {
  padding-left: 0;
}
li {
  list-style: none;
}
a,button {
  all: unset;
  cursor: pointer;
}
img {
  vertical-align: top;
}
html, body { max-width: 100%; overflow-x: hidden; }
body { 
overflow: hidden; 
width: 100%; 
-webkit-box-sizing: border-box; 
-moz-box-sizing: border-box; 
box-sizing: border-box; 
  background: var(--color-white);
}
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
  scrollbar-width: auto;
  scrollbar-color: #c2c2c2 var(--color-white);
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

*::-webkit-scrollbar-track {
  background: var(--color-white);
  margin: 10px;
}

*::-webkit-scrollbar-thumb {
  background-color: #c2c2c2;
  border-radius: 10px;
  border: 3px solid var(--color-white);
}
.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline: {
  border-color: var(--color-medium-gray-be);
}
`;
export default GlobalStyle;
