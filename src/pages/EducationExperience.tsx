import { Box, Container, Typography, Card, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    date: "Jan 2025 - Present",
    title: "React.js Intern Internship",
    company: "GTCSYS",
    description: "Created a scalable web application for managing inquiries across websites.",
    technologies: "React.js, Node.js, Express.js, MongoDB Atlas",
  },
  {
    date: "Sep 2023 - Feb 2024",
    title: "MERN Stack Development",
    company: "Coding Cloud, Ahmedabad",
    technologies: "HTML5, CSS3, Tailwind CSS, JavaScript, React.js, Node.js",
  },
  {
    date: "Jan 2020 - May 2024",
    title: "Information Technology (B.Tech)",
    company: "SILVER OAK UNIVERSITY, Ahmedabad",
    technologies: "Leadership, Time Management, Teamwork",
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
