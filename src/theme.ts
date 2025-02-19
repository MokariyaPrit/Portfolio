
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#6e07f3", contrastText: "#ffffff" },
    secondary: { main: "#ffcc00", contrastText: "#121212" },
    background: { default: "#f8f8f8", paper: "#ffffff" },
    text: { primary: "#333", secondary: "#444" },
  },
  typography: {
    fontFamily: "'Inter', 'Poppins', sans-serif",
    h1: { fontSize: "3rem", fontWeight: 700, color: "#333" },
    h2: { fontSize: "2.5rem", fontWeight: 700, color: "#333" },
    h3: { fontSize: "2rem", fontWeight: 600, color: "#333" },
    body1: { fontSize: "1.2rem", lineHeight: 1.6, color: "#444" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          textTransform: "none",
          fontWeight: "bold",
          padding: "10px 20px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        },
      },
    },
  },
});

export default theme;