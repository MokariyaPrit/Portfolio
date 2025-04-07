"use client"

import { useTheme } from "@mui/material"
import "./NotFound.css"

const NotFound = () => {
  const theme = useTheme()

  return (
    <div
      className="not-found-container"
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <div
        className="not-found-content"
        style={{
          border: `2px solid ${theme.palette.mode === "dark" ? "#333" : "#ddd"}`,
          backgroundColor: theme.palette.background.paper,
          boxShadow: `0 10px 30px ${theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"}`,
        }}
      >
        <h1 className="error-code" style={{ color: theme.palette.primary.main }}>
          404
        </h1>
        <p className="error-message" style={{ color: theme.palette.text.secondary }}>
          Oops! This page is not available.
        </p>
        <button
          className="back-home-btn"
          onClick={() => (window.location.href = "/Portfolio/#/")}
          style={{
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          Go Back Home
        </button>
      </div>
    </div>
  )
}

export default NotFound

