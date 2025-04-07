"use client"

import { Box, Typography, Grid, Link, useTheme } from "@mui/material"
import { styled } from "@mui/system"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type React from "react"
import { useEffect } from "react"
import Tooltip from "../components/Tooltip"

// Define styled components properly
const StyledFooter = styled(Box)(({ theme }) => ({
  background: theme.palette.mode === "dark" ? "#0a0a0a" : "#1a1a1a",
  color: "#fff",
  paddingTop: "20px",
  paddingBottom: "40px",
}))

const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#fff" : "#fff",
  textDecoration: "none",
  fontSize: "16px",
  transition: "color 0.3s ease",
  cursor: "pointer",
  "&:hover": {
    color: theme.palette.primary.main,
  },
}))

const Footer = () => {
  const theme = useTheme()

  return (
    <StyledFooter>
      <Box sx={{ maxWidth: "1200px", mx: "auto", py: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Contact Information */}
          <Grid item xs={12} sm={6} md={4}>
            <FooterSection title="Contact Information">
              <Typography
                sx={{
                  color: theme.palette.mode === "dark" ? "#fff" : "#fff",
                  fontSize: { xs: "14px", sm: "16px" },
                  mb: 1,
                  textAlign: "center",
                }}
              >
                Email: <StyledLink href="mailto:mokariyaprit2086@gmail.com">mokariyaprit2086@gmail.com</StyledLink>
              </Typography>
            </FooterSection>
          </Grid>

          {/* Social Media Links */}
          <Grid item xs={12} sm={6} md={4}>
            <FooterSection title="Connect with Me">
              <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
                <Tooltip />
              </Box>
            </FooterSection>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} sm={6} md={4}>
            <FooterSection title="Quick Links">
              <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 4 }}>
                <LinksSection
                  links={[
                    { label: "About Me", href: "#about" },
                    { label: "Projects", href: "#projects" },
                    { label: "Resume", href: "#" },
                  ]}
                />
                <LinksSection
                  links={[
                    { label: "Education", href: "#education" },
                    { label: "Contact", href: "#contact" },
                    { label: "GitHub", href: "https://github.com/MokariyaPrit" },
                  ]}
                />
              </Box>
            </FooterSection>
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <FooterSection title="">
          <Box
            sx={{
              textAlign: "center",
              mt: 4,
              borderTop: `1px solid ${theme.palette.mode === "dark" ? "#444" : "#444"}`,
              pt: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.mode === "dark" ? "#fff" : "#fff",
                fontSize: { xs: "12px", sm: "14px" },
                textAlign: "center",
              }}
            >
              &copy; {new Date().getFullYear()} Prit Mokariya. All rights reserved.
            </Typography>
          </Box>
        </FooterSection>
      </Box>
    </StyledFooter>
  )
}

// Footer Section Component
const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  const theme = useTheme()
  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) controls.start("visible")
    else controls.start("hidden")
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
        hidden: { opacity: 0, y: 50, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      style={{ marginBottom: 20 }}
    >
      {title && (
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            color: theme.palette.mode === "dark" ? "#fff" : "#fff",
            mb: 2,
            fontSize: { xs: "18px", sm: "20px" },
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
      )}
      {children}
    </motion.div>
  )
}

// Links Section Component
const LinksSection: React.FC<{ links: { label: string; href: string }[] }> = ({ links }) => {

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, textAlign: "center" }}>
      {links.map((link, index) => (
        <StyledLink
          key={index}
          onClick={() =>
            link.href === "#"
              ? scrollToSection("#")
              : link.href.startsWith("#")
                ? scrollToSection(link.href)
                : window.open(link.href, "_blank")
          }
          variant="body2"
        >
          {link.label}
        </StyledLink>
      ))}
    </Box>
  )
}

// Function for Smooth Scrolling
const scrollToSection = (id: string) => {
  if (id === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" })
  } else {
    const target = document.querySelector(id)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }
}

export default Footer

