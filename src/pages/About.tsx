import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FancyButton from "../components/FancyButton"; // Import the FancyButton component

// Animation variants for fade-in effect
const fadeVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  hidden: { opacity: 0, y: 50, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animation for letter-by-letter appearance
const letterVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: { opacity: { delay: 0.1, duration: 0.7 }, y: { delay: 0.1, duration: 0.7 } },
  },
  hidden: { opacity: 0, y: -20 },
};

const About = () => {
  const heading = `About Me: Turning Ideas into Interactive Experiences`; // Your heading text
  const description = [
    "Since beginning my journey as a web developer,",
    "I've worked with modern technologies like React, TypeScript,Node and Material UI",
    "to build scalable and high-performance applications.",
    "I love problem-solving and optimizing performance."
  ];

  const { ref: imgRef, inView: imgInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: textRef, inView: textInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true, // Only trigger once when the section comes into view
    threshold: 0.5,
  });

  // Split heading into individual words instead of characters
  const headingWords = heading.split(" ");

  return (
    <Box sx={{ width: "100%", textAlign: "center", py: { xs: 6, md: 8 }, backgroundColor: "#f9f9f9" }}>
      {/* Title Section */}
      <Container maxWidth="lg" sx={{ mb: 4 }}>
        <motion.div
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"} // Trigger only when heading is in view
          variants={fadeVariants}
          ref={headingRef} // Assign the ref to the title container
        >
          <Typography
            variant="h3"
            sx={{
              color: "#333",
              fontWeight: "bold",
              fontSize: { xs: "2rem", md: "3rem" },
              marginBottom: 4,
              textAlign: "center",
            }}
          >
            {/* Animate each word separately */}
            {headingWords.map((word, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{ display: "inline-block", marginRight: "8px" }} // Adding margin between words
                animate={{
                  opacity: headingInView ? 1 : 0,
                  y: headingInView ? 0 : -20,
                  transition: {
                    delay: index * 0.2,
                    duration: 1,
                  },
                }}
              >
                {word}
              </motion.span>
            ))}
          </Typography>
        </motion.div>
      </Container>

      {/* Content Layout (Image and Text) */}
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="start" justifyContent="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              ref={imgRef}
              initial="hidden"
              animate={imgInView ? "visible" : "hidden"}
              variants={fadeVariants}
            >
              <img
                src="/assets/header.png" // Replace with your image URL
                alt="About Me"
                style={{
                  width: "100%",
                  borderRadius: "10px",
                  marginTop: "20px",
            
                  backgroundColor: "white",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
              />
            </motion.div>
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <motion.div
              ref={textRef}
              initial="hidden"
              animate={textInView ? "visible" : "hidden"}
              variants={fadeVariants}
            >
              {/* Description */}
              <Box sx={{ textAlign: "left", maxWidth: "100%", marginBottom: 4 }}>
                {description.map((line, i) => (
                  <motion.p
                    key={i}
                    initial="hidden"
                    animate={textInView ? "visible" : "hidden"}
                    variants={fadeVariants}
                    style={{
                      fontSize: "1.2rem",
                      color: "#555",
                      lineHeight: 1.8,
                      marginBottom: "16px",
                    }}
                  >
                    {line}
                  </motion.p>
                ))}
              </Box>

              {/* Button */}
              <motion.div
                initial="hidden"
                animate={textInView ? "visible" : "hidden"}
                variants={fadeVariants}
              >
                <FancyButton
                  text="Learn More"
                  onClick={() => console.log("Learn More Clicked")}
                />
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
