import { css } from "styled-components";

const variables = {
  flexSet: (direction = "row", justify = "center", align = "center") => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

  area: (width = "auto", height = "0") => `
    width: ${width};
    height: ${height};
  `,

  blockCenter: css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default variables;
