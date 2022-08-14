import { createContext } from "react";

// We're adding a default value in createContext
const ThemeContext = createContext(["blue", () => {}]);

export default ThemeContext;
