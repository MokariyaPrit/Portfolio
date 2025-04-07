"use client"

import { useState, useEffect } from "react"
import { Box, Typography, Grid, Button, useTheme } from "@mui/material"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

import htmlIcon from "../../public/assets/html5.png"
import cssIcon from "../../public/assets/css.png"
import jsIcon from "../../public/assets/js.png"
import reactIcon from "../../public/assets/react.svg"
import tsIcon from "../../public/assets/TS.png"
import nodeIcon from "../../public/assets/node.png"
import mongoIcon from "../../public/assets/mongodb.png"

const skills = [
  { name: "HTML", color: "#E44D26", icon: htmlIcon },
  { name: "CSS", color: "#2965F1", icon: cssIcon },
  { name: "React", color: "#61DAFB", icon: reactIcon },
  { name: "TypeScript", color: "#3178C6", icon: tsIcon },
  { name: "JavaScript", color: "#F7DF1E", icon: jsIcon },
  { name: "Node.js", color: "#83CD29", icon: nodeIcon },
  { name: "MongoDB", color: "#402e1f", icon: mongoIcon },
]

const Skills = () => {
  const theme = useTheme()
  const [visibleCount, setVisibleCount] = useState(4)
  const [isExpanded, setIsExpanded] = useState(false)
  const toggleView = () => {
    setIsExpanded((prev) => !prev)
    setVisibleCount(isExpanded ? 4 : skills.length)
  }

  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        backgroundColor: theme.palette.background.default,
        my: 3,
        textAlign: "center",
      }}
    >
      <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: theme.palette.text.primary }}>
        My Skills
      </Typography>

      <Grid
        container
        spacing={4}
        justifyContent="center"
        sx={{ mt: 4, maxWidth: "1200px", mx: "auto", pr: { xs: 8, md: 8 } }}
      >
        {skills.slice(0, visibleCount).map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </Grid>

      <Button
        onClick={toggleView}
        variant="contained"
        sx={{
          mt: 4,
          px: 3,
          py: 1,
          fontSize: "1rem",
          textTransform: "none",
          borderRadius: "1.5rem",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            transform: "scale(1.05)",
          },
        }}
      >
        {isExpanded ? "See Less" : "See More"}
      </Button>
    </Box>
  )
}

const SkillCard = ({ skill }: any) => {
  const theme = useTheme()
  const controls = useAnimation()
  const { ref, inView } = useInView({ threshold: 0.3 })

  useEffect(() => {
    if (inView) controls.start("visible")
    else controls.start("hidden")
  }, [controls, inView])

  return (
    <Grid item xs={6} sm={6} md={4} lg={3}>
      <motion.div
        ref={ref}
        animate={controls}  
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } },
          hidden: { opacity: 0, y: 50, scale: 0.95, transition: { duration: 0.5, ease: "easeOut" } },
        }}
        whileHover={{
          scale: 1.05,
          boxShadow: `0px 10px 30px ${theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.15)"}`,
        }}
        style={{
          width: "100%",
          maxWidth: "220px",
          height: "280px",
          background: theme.palette.background.paper,
          borderRadius: "14px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          boxShadow: `0 14px 26px ${theme.palette.mode === "dark" ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.04)"}`,
          cursor: "pointer",
          transition: "all 0.5s ease-out",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            background: theme.palette.background.default,
            border: `3px solid ${skill.color}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img src={skill.icon || "/placeholder.svg"} alt={skill.name} style={{ width: "70px", height: "70px" }} />
        </div>

        <Typography variant="h6" sx={{ color: theme.palette.text.primary, marginTop: "30px", zIndex: 1000 }}>
          {skill.name}
        </Typography>
      </motion.div>
    </Grid>
  )
}

export default Skills

