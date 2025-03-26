import { Box, Container, Typography, Card, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const experiences = [
  {
    date: "Nov 2024 - Present",
    title: "iOS Developer",
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
];

const fadeVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  hidden: { opacity: 0, y: 50, transition: { duration: 0.8, ease: "easeOut" } },
};

const EducationExperience = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
        sx={{ color: theme.palette.primary.main }}
      >
        Education & <span style={{ color: `black` }}> Experience </span>
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {experiences.map((exp, index) => {
          const { ref, inView } = useInView({
            triggerOnce: false, // Animation triggers each time it enters view
            threshold: 0.2, // 20% of the element must be visible to trigger
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeVariants}
            >
              <Card
                sx={{
                  padding: 3,
                  boxShadow: 3,
                  borderRadius: 2,
                  ":hover": { boxShadow: 10 },
                }}
              >
                <Typography variant="subtitle2" sx={{ color: theme.palette.primary.main }}>
                  {exp.date}
                </Typography>
                <Typography variant="h6">{exp.title}</Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary }}>
                  {exp.company}
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mt: 1 }}>
                  {exp.technologies}
                </Typography>
              </Card>
            </motion.div>
          );
        })}
      </Box>
    </Container>
  );
};

export default EducationExperience;
