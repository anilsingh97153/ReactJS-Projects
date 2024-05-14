import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

// custom hook: this actually reduces two imports, one is usecontext hook which is used to retieve or extract data from the context, another is the actual context, ThemeContext in this case. go to 8:10:00 video stamp, react part -1 on chai aur code yt channel to understand the same.
export default function useTheme() {
    return useContext(ThemeContext)
}

