"use client"

import { Typography, Container, Box, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import "../components/FancyButton"
import Downlodebtn from "../components/Downlodebtn"

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, delay: 0.5 } },
}

function Landingpage() {
  const theme = useTheme()

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: theme.palette.background.default,
        px: 2,
        position: "relative",
      }}
    >
      <Container maxWidth="md">
        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              color: theme.palette.text.primary,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "4rem" },
            }}
          >
            Hi, I'm Prit 👋
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={textVariants}>
          <Typography
            variant="h5"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: "600px",
              margin: "auto",
              fontSize: { xs: "1rem", md: "1.5rem" },
            }}
          >
            "A passionate web developer with expertise in React.js, TypeScript, and Material UI, currently expanding
            knowledge in Node.js to build full-stack applications."
          </Typography>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={buttonVariants}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 4,
              gap: 2,
            }}
          >
            <Downlodebtn />
          </Box>
        </motion.div>
      </Container>

      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: 20,
          transform: "translateY(-50%)",
          zIndex: 10,
        }}
      ></Box>
    </Box>
  )
}

export default Landingpage

