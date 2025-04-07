"use client"

import { useState } from "react"
import { Box, Typography, Grid, Card, Button, useTheme } from "@mui/material"
import { styled } from "@mui/system"

import codingCloud from "../../public/assets/codingcloud.png"
import jsBeginners from "../../public/assets/JavaScript for Beginners-1.png"
import jsIntermediate from "../../public/assets/JavaScript (Intermediate)-1.png"
import jsBasic from "../../public/assets/JavaScript (Basic)-1.png"
import greatStack from "../../public/assets/greatstack.png"
import cssBasic from "../../public/assets/CSS (Basic)-1.png"
import problemSolving from "../../public/assets/Problem Solving (Basic)-1.png"

const certificationsAwards = [
  {
    id: 1,
    title: "MERN STACK",
    image: codingCloud,
    issuer: "CODING CLOUD",
    date: "March 2024",
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    image: jsBeginners,
    issuer: "Simplilearn SkillUP",
    date: "Feb 2025",
  },
  {
    id: 3,
    title: "JavaScript Intermediate",
    image: jsIntermediate,
    issuer: "HackerRank",
    date: "Feb 2025",
  },
  {
    id: 4,
    title: "JavaScript Fundamentals",
    image: greatStack,
    issuer: "GreatStack",
    date: "Feb 2025",
  },
  {
    id: 5,
    title: "JavaScript Basic",
    image: jsBasic,
    issuer: "HackerRank",
    date: "Feb 2025",
  },
  {
    id: 6,
    title: "CSS Basic",
    image: cssBasic,
    issuer: "HackerRank",
    date: "Feb 2025",
  },
  {
    id: 7,
    title: "Problem Solving Basic",
    image: problemSolving,
    issuer: "HackerRank",
    date: "Feb 2025",
  },
]

// Define styled components outside the component function
const StyledCard = styled(Card)(({ theme }) => ({
  width: 350,
  minHeight: 320,
  background: theme.palette.mode === "dark" ? "#2a2a2a" : "#313131",
  borderRadius: 15,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  position: "relative",
  cursor: "pointer",
  overflow: "hidden",
  transition: "0.3s ease-in-out",
  boxShadow: `0 14px 26px ${theme.palette.mode === "dark" ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.1)"}`,
  "&:hover": {
    transform: "scale(1.04) rotate(-1deg)",
  },
  "& .img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
  },
  "& .img.img-contain": {
    objectFit: "contain !important",
    backgroundColor: theme.palette.mode === "dark" ? "#1a1a1a" : "white",
  },
  "& .textBox": {
    position: "absolute",
    opacity: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.7)",
    color: "white",
    transition: "opacity 0.3s ease-in-out",
  },
  "& .textBox > .text": {
    fontWeight: "bold",
    fontSize: 18,
  },
  "& .textBox > .head": {
    fontSize: 20,
  },
  "& .textBox > .price": {
    fontSize: 17,
  },
  "& .textBox > span": {
    fontSize: 12,
    color: "lightgray",
  },
  "&:hover > .textBox": {
    opacity: 1,
  },
  "&:hover > .img": {
    filter: "blur(5px)",
    transform: "scale(1.05)",
  },
}))

const StyledButton = styled(Button)(({ theme }) => ({
  background: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  fontSize: 16,
  fontWeight: "bold",
  textTransform: "none",
  padding: "10px 20px",
  borderRadius: 8,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    background: theme.palette.primary.dark,
    transform: "scale(1.1)",
  },
}))

const CertificationsAwards = () => {
  const theme = useTheme()
  const [showAll, setShowAll] = useState(false)

  return (
    <Box id="certifications-awards" sx={{ padding: "40px 20px", backgroundColor: theme.palette.background.paper }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{ textAlign: "center", marginBottom: "40px", fontWeight: "bold", color: theme.palette.text.primary }}
      >
        Certifications & <span style={{ color: theme.palette.primary.main }}> Awards</span>
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {(showAll ? certificationsAwards : certificationsAwards.slice(0, 3)).map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
            <StyledCard>
              <img
                className={`img ${item.id === 2 || item.id === 4 ? "img-contain" : ""}`}
                src={item.image || "/placeholder.svg"}
                alt={item.title}
              />
              <div className="textBox">
                <p className="text head">{item.title}</p>
                <span>{item.date}</span>
                <p className="text price">{item.issuer}</p>
              </div>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <StyledButton onClick={() => setShowAll(!showAll)}>{showAll ? "Show Less" : "See More"}</StyledButton>
      </Box>
    </Box>
  )
}

export default CertificationsAwards

