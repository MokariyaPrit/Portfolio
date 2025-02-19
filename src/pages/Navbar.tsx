import { useState, useEffect } from "react";
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
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";

const sections = ["home", "about", "education","projects", "contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleDrawer = (state: boolean) => {
    setOpen(state);
  };

  const scrollToSection = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 70, behavior: "smooth" });
      }
    }
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offset = element.offsetTop - 100;
          if (window.scrollY >= offset) {
            currentSection = section;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white", boxShadow: "none", borderBottom: "1px solid #ddd" }}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo */}
          <Typography variant="h6" sx={{ color: "black", fontWeight: "bold" }}>
            My Portfolio
          </Typography>

          {/* Desktop Navigation */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {sections.map((section) => (
              <Button
                key={section}
                onClick={() => scrollToSection(section)}
                sx={{
                  color: activeSection === section ? "#6e07f3" : "black", // Active section color
                  textTransform: "none",
                  marginLeft: 2,
                  "&:hover": {
                    color: "#6e07f3",
                  },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton onClick={() => toggleDrawer(true)} sx={{ display: { xs: "block", md: "none" }, color: "black" }}>
            <Menu />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Sidebar Drawer */}
      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        <Box sx={{ width: 250, height: "100vh", background: "#121212", color: "white", p: 2 }}>
          {/* Close Button */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => toggleDrawer(false)} sx={{ color: "white" }}>
              <Close />
            </IconButton>
          </Box>

          {/* Sidebar Menu Items */}
          <List>
            {sections.map((section) => (
              <ListItem key={section} disablePadding>
                <ListItemButton
                  onClick={() => {
                    scrollToSection(section);
                    toggleDrawer(false);
                  }}
                >
                  <ListItemText>
                    <Typography
                      sx={{
                        color: activeSection === section ? "#6e07f3" : "white", // Active section text color only
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
  );
};

export default Navbar;
