"use client"

import { Box, Container, Typography, Card, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useRef } from "react"

const experiences = [
  {
    date: "Jan 2025 - Present",
    title: "React.js Intern",
    company: "GTCSYS",
    description: "Developing and maintaining iOS applications, focusing on performance and user experience.",
    technologies: "Swift, UIKit, SwiftUI, Core Data, Xcode",
  },
  {
    date: "Jul 2023 - Jul 2025",
    title: "Master of Computer Applications - MCA",
    company: "GLS University",
    description: "Pursuing a Master of Computer Applications, specializing in advanced software development and system design.",
    technologies: "Advanced Algorithms, Software Architecture, Database Systems, Cloud Computing, Mobile Development",
  },
  {
    date: "2019 - 2023",
    title: "Bachelor, Computer Application",
    company: "Bhakta Kavi Narsinh Mehta University",
    description: "Completed a Bachelor's degree in Computer Applications, developing skills in software development and problem-solving.",
    technologies: "Programming Fundamentals, Data Structures, Algorithms, Database Management, Software Engineering Principles",
  },
]

const fadeVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hidden: { opacity: 0, y: 50, transition: { duration: 0.8, ease: "easeOut" } },
}

const EducationExperience = () => {
  const theme = useTheme()
  const refs = useRef([])

  useEffect(() => {
    refs.current = refs.current.slice(0, experiences.length)
  }, [])

  const { ref: containerRef, inView: containerInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <Container maxWidth="md" sx={{ py: 5 }} ref={containerRef}>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{ color: theme.palette.primary.main }}
      >
        Education & <span style={{ color: theme.palette.text.primary }}> Experience </span>
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {experiences.map((exp, index) => {
          return (
            <motion.div
              key={index}
              // ref={(el) => (refs.current[index] = el)}
              initial="hidden"
              animate={containerInView ? "visible" : "hidden"}
              variants={fadeVariants}
            >
              <Card
                sx={{
                  padding: 3,
                  boxShadow: theme.palette.mode === "dark" ? "0 4px 20px rgba(0, 0, 0, 0.4)" : 3,
                  borderRadius: 2,
                  backgroundColor: theme.palette.background.paper,
                  ":hover": {
                    boxShadow: theme.palette.mode === "dark" ? "0 8px 30px rgba(0, 0, 0, 0.6)" : 10,
                  },
                }}
              >
                <Typography variant="subtitle2" sx={{ color: theme.palette.primary.main }}>
                  {exp.date}
                </Typography>
                <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>
                  {exp.title}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  {exp.company}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 1 }}>
                  {exp.technologies}
                </Typography>
              </Card>
            </motion.div>
          )
        })}
      </Box>
    </Container>
  )
}

export default EducationExperience

