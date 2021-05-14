import { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { blueTheme, greenTheme, redTheme } from "./components/themes";

// const themes = [blueTheme, greenTheme, redTheme, yellowTheme];

export default function App() {
  // const [counter, setCounter] = useState(0);
  const [theme, setTheme] = useState(redTheme);

  const handleOnClick = () => {
    if (theme.primaryColor === "red") setTheme(blueTheme);
    else if (theme.primaryColor === "blue") setTheme(greenTheme);
    else setTheme(redTheme);
  };
  // const handleOnClick = () => {
  //   setCounter((counter) => (counter === themes.length - 1 ? 0 : counter + 1));
  // };

  // useEffect(() => {
  //   setTheme(themes[counter]);
  // }, [counter]);

  return (
    <ThemeProvider theme={theme}>
      <Button> hello world </Button>
      <button onClick={handleOnClick}>Toggle Theme </button>
    </ThemeProvider>
  );
}

const Button = styled.button`
  color: ${({ theme }) => theme.primaryColor};
`;
