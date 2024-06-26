//THEME CONTEXT SWITCHER (context)

import {createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const Content = () => {
  const context = useContext(ThemeContext); // change this
  return (
    <section className={`theme-${context.theme}`}>
      <span>Current theme: {context.theme}</span>
      <button onClick={context.switchTheme}>Switch Theme</button>
    </section>
  );
};

export function App() {
  const [theme, setTheme] = useState("dark");
  const switchTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <ThemeContext.Provider value={{ theme, switchTheme }}>
      <Content />
    </ThemeContext.Provider>
  );
}
