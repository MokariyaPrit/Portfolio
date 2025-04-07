"use client"

import { useState, useEffect } from "react"
import {
  AppBar,
  Toolbar,
  Box,
  Button,
  Container,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
} from "@mui/material"
import { Menu, Close } from "@mui/icons-material"
import ThemeToggle from "../components/ThemeToggle"

const sections = ["home", "about", "projects", "education", "contact"]

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const theme = useTheme()

  const toggleDrawer = (state: boolean) => {
    setOpen(state)
  }

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      const element = document.getElementById(id)
      if (element) {
        window.scrollTo({ top: element.offsetTop - 70, behavior: "smooth" })
      }
    }
    setActiveSection(id)
  }

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home"
      sections.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const offset = element.offsetTop - 100
          if (window.scrollY >= offset) {
            currentSection = section
          }
        }
      })
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "none",
        borderBottom: `1px solid ${theme.palette.mode === "light" ? "#ddd" : "#333"}`,
      }}
    >
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}>
            Prit Mokariya
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            {sections.map((section) => (
              <Button
                key={section}
                onClick={() => scrollToSection(section)}
                sx={{
                  color: activeSection === section ? theme.palette.primary.main : theme.palette.text.primary,
                  textTransform: "none",
                  marginLeft: 2,
                  fontFamily: "'Inter', 'Poppins', sans-serif",
                  "&:hover": {
                    color: theme.palette.primary.main,
                  },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
            <ThemeToggle />
          </Box>

          {/* Mobile Menu Button and Theme Toggle */}
          <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
            <ThemeToggle />
            <IconButton onClick={() => toggleDrawer(true)} sx={{ color: theme.palette.text.primary }}>
              <Menu />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Sidebar Drawer */}
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            height: "100vh",
            background: theme.palette.mode === "dark" ? "#121212" : "#fff",
            color: theme.palette.text.primary,
            p: 2,
          }}
        >
          {/* Close Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => toggleDrawer(false)} sx={{ color: theme.palette.text.primary }}>
              <Close />
            </IconButton>
          </Box>

          {/* Sidebar Menu Items */}
          <List>
            {sections.map((section) => (
              <ListItem key={section} disablePadding>
                <ListItemButton
                  onClick={() => {
                    scrollToSection(section)
                    toggleDrawer(false)
                  }}
                >
                  <ListItemText>
                    <Typography
                      sx={{
                        color: activeSection === section ? theme.palette.primary.main : theme.palette.text.primary,
                        textAlign: "center",
                        fontWeight: "500",
                      }}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Typography>
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  )
}

export default Navbar

