import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Bus Booking System",
    description: "A web app for booking buses, viewing schedules, and managing bookings.",
    image: "/assets/bus/bus3.png",
    techStack: ["React", "TypeScript", "Material UI"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Gym Management System",
    description: "A full-stack gym management website for managing memberships, classes, and bookings.",
    image: "/assets/gym/gym1.png",
    techStack: ["React", "Node.js", "MongoDB", "MUI"],
    liveLink: "#",
    githubLink: "#",
  },

];



const Projects = () => {
  return (
    <Box sx={{ width: "100%", py: 6, backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography variant="h3" sx={{ fontWeight: "bold", textAlign: "center", mb: 4 }}>
          My Projects
        </Typography>
        
        {/* Project List View */}
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, p: 2 }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{ width: { xs: "100%", md: "40%" }, borderRadius: 2 }}
                />
                <CardContent sx={{ flex: 1 }}>
                  <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#555", mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold", mb: 2 }}>
                    Tech Stack: {project.techStack.join(", ")}
                  </Typography>
                  <Button href={project.liveLink} target="_blank" sx={{ mr: 2 }}>
                    Live Demo
                  </Button>
                  <Button href={project.githubLink} target="_blank" variant="outlined">
                    GitHub
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

      </Container>
    </Box>
  );
};

export default Projects;
