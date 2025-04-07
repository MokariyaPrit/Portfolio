"use client"

import { IconButton, Tooltip, useTheme } from "@mui/material"
import { LightMode, DarkMode } from "@mui/icons-material"
import { useThemeContext } from "../context/ThemeContext"

const ThemeToggle = () => {
  const { mode, toggleTheme } = useThemeContext()
  const theme = useTheme()

  return (
    <Tooltip title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}>
      <IconButton
        onClick={toggleTheme}
        sx={{
          color: theme.palette.mode === "dark" ? "white" : "black",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "rotate(30deg)",
          },
        }}
      >
        {mode === "light" ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Tooltip>
  )
}

export default ThemeToggle

