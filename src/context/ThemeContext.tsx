"use client"

import type React from "react"
import { createContext, useState, useContext, useEffect, type ReactNode } from "react"
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles"
import { CssBaseline } from "@mui/material"
import { lightTheme, darkTheme } from "../theme"

type ThemeMode = "light" | "dark"

interface ThemeContextType {
  mode: ThemeMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider")
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Check if user has a saved preference or use system preference
  const getInitialMode = (): ThemeMode => {
    const savedMode = localStorage.getItem("themeMode") as ThemeMode
    if (savedMode) return savedMode

    // Check system preference
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    return prefersDark ? "dark" : "light"
  }

  const [mode, setMode] = useState<ThemeMode>(getInitialMode)

  // Update localStorage when mode changes
  useEffect(() => {
    localStorage.setItem("themeMode", mode)

    // Apply appropriate class to body for global styling
    document.body.classList.remove("light-mode", "dark-mode")
    document.body.classList.add(`${mode}-mode`)
  }, [mode])

  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
  }

  const theme = mode === "light" ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}

