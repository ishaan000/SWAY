import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

enum Theme {
    LIGHT = "light",
    DARK = "dark"
}

interface ThemeProviderType {
    theme: Theme,
    setTheme: (value: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeProviderType>({
    theme: Theme.DARK,
    setTheme: () => {},
    toggleTheme: () => {}
})

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = (props: PropsWithChildren) => {
    const [theme, setTheme] = useState(Theme.LIGHT);

    useEffect(() => {
        if (theme == Theme.LIGHT) {
            document.body.classList.remove("dark-theme")
        }
        if (theme == Theme.DARK) {
            document.body.classList.remove("light-theme")
        }
        document.body.classList.add(`${theme}-theme`);
    }, [theme])

    const toggleTheme = () => {
        if (theme == Theme.DARK) {
            setTheme(Theme.LIGHT)
        } else if (theme == Theme.LIGHT) {
            setTheme(Theme.DARK)
        }
    }

    const context = {
        theme,
        setTheme,
        toggleTheme
    }

    return (
        <ThemeContext.Provider value={context}>
            {props.children}
        </ThemeContext.Provider>
    )
}