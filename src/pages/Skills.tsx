import { useState, useEffect } from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import swiftIcon from "../../public/assets/swift.png";
import swiftuiIcon from "../../public/assets/swiftui.png";
import uikitIcon from "../../public/assets/uikit.png";
import combineIcon from "../../public/assets/combine.png";
import coredataIcon from "../../public/assets/coredata.png";
import firebaseIcon from "../../public/assets/firebase.png";
import xcodeIcon from "../../public/assets/xcode.png";

const skills = [
  { name: "Swift", color: "#F05138", icon: swiftIcon },
  { name: "SwiftUI", color: "#0071E3", icon: swiftuiIcon },
  { name: "UIKit", color: "#2396F3", icon: uikitIcon },
  { name: "Combine", color: "#32D74B", icon: combineIcon },
  { name: "Core Data", color: "#FF9500", icon: coredataIcon },
  { name: "Firebase", color: "#FFCB2B", icon: firebaseIcon },
  { name: "Xcode", color: "#1575F9", icon: xcodeIcon },
];

const Skills = () => {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleView = () => {
    setIsExpanded((prev) => !prev);
    setVisibleCount(isExpanded ? 4 : skills.length);
  };

  return (
    <Box sx={{ width: "100%", py: 8, backgroundColor: "#f8f8f8", my: 3, textAlign: "center" }}>
      <Typography variant="h3" fontWeight="bold" gutterBottom sx={{ color: "#333" }}>
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
          backgroundColor: "#333",
          color: "#fff",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#555",
            transform: "scale(1.05)",
          },
        }}
      >
        {isExpanded ? "See Less" : "See More"}
      </Button>
    </Box>
  );
};

const SkillCard = ({ skill }: any) => {
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
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)" }}
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

        <Typography variant="h6" sx={{ color: "#4C5656", marginTop: "30px", zIndex: 1000 }}>
          {skill.name}
        </Typography>
      </motion.div>
    </Grid>
  );
};

export default Skills;