import { useState, useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Skills Data
const skills = [
  { name: "HTML", color: "#E44D26", icon: "/assets/html5.png" },
  { name: "CSS", color: "#2965F1", icon: "/assets/css.png" },
  { name: "JavaScript", color: "#F7DF1E", icon: "/assets/js.png" },
  { name: "React", color: "#61DAFB", icon: "/assets/react.svg" },
  { name: "TypeScript", color: "#3178C6", icon: "/assets/TS.png" },
  { name: "Node.js", color: "#83CD29", icon: "/assets/node.png" },
  { name: "mongodb", color: "#402e1f", icon: "/assets/mongodb.png" },
];

const Skills = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false); // Added state for toggling
  const toggleView = () => {
    setIsExpanded((prev) => !prev);
    setVisibleCount(isExpanded ? 4 : skills.length); // Show all or reset to 4
  };

  return (
    <Box sx={{ width: "100%", py: 8, backgroundColor: "#f8f8f8", my: 3, textAlign: "center" }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: "#333" }}>
        My Skills
      </Typography>

      {/* Skills Grid */}
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

      {/* See More / See Less Button */}
      <Button
        onClick={toggleView}
        variant="contained"
        sx={{
          mt: 4,
          px: 3, // Adjust padding
          py: 1, // Adjust padding
          fontSize: "1rem", // Adjust font size
          textTransform: "none", // Prevent all uppercase text
          borderRadius: "1.5rem", // Rounded button
          backgroundColor: "#333",
          color: "#fff",
          transition: "all 0.3s ease-in-out", // Smooth transition
          "&:hover": {
            backgroundColor: "#555",
            transform: "scale(1.05)", // Slight scaling on hover
          },
        }}
      >
        {isExpanded ? "See Less" : "See More"}
      </Button>
    </Box>
  );
};

// SkillCard Component
const SkillCard = ({ skill }: { skill: { name: string; color: string; icon: string } }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

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
        style={{
          width: "100%",
          maxWidth: "220px",
          height: "280px",
          background: "white",
          borderRadius: "14px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          boxShadow: "0 14px 26px rgba(0,0,0,0.04)",
          cursor: "pointer",
          transition: "all 0.5s ease-out",
          margin: "auto",
        }}
      >
        {/* Background Circle */}
        <div
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            position: "absolute",
            top: "60px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
        />

        {/* Skill Icon */}
        <div
          style={{
            width: "130px",
            height: "130px",
            borderRadius: "50%",
            background: "#fff",
            border: `3px solid ${skill.color}`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <img src={skill.icon} alt={skill.name} style={{ width: "70px", height: "70px" }} />
        </div>

        {/* Skill Name */}
        <Typography variant="h6" sx={{ color: "#4C5656", marginTop: "30px", zIndex: 1000 }}>
          {skill.name}
        </Typography>
      </motion.div>
    </Grid>
  );
};

export default Skills;
