import { createGlobalStyle } from "styled-components";
import background from "./images/background.png";
import background1 from "./images/background_br1.jpg";
import background2 from "./images/background_br2.jpg";
import background3 from "./images/background_br3.jpg";

export const GlobalStyle = createGlobalStyle`
    html {
    box-sizing: border-box;
};
    *, ::after, ::before {
    box-sizing: inherit;
};
    body {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;
    background-image: url("${background}");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    font-family: 'Kanit', sans-serif;
};

@media(max-width: ${({ theme }) => theme.breakpoints.firstBreakPoint}px) {
  body {
    background-image: url("${background1}");
    background-attachment: scroll;
  };
};

@media(max-width: ${({ theme }) => theme.breakpoints.smallScreens}px) {
  body {
    background-image: url("${background2}");
    background-attachment: scroll;
  };
};

@media(max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
  body {
    background-image: url("${background3}");
  };
};
`;