import { useState } from "react";
import { Box, Typography, Container, Grid, Card, CardContent, CardMedia, Button, Dialog } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import gym1 from "../../public//assets/gym/gym1.png";
import gym2 from "../../public//assets/gym/gym2.png";
import gym3 from "../../public//assets/gym/gym3.png";
import gym4 from "../../public//assets/gym/gym4.png";

import bus1 from "../../public//assets/bus/bus1.png";
import bus2 from "../../public//assets/bus/bus2.png";
import bus3 from "../../public//assets/bus/bus3.png";
import bus4 from "../../public//assets/bus/bus4.png";

import portfolio1 from "../../public//assets/portfolio/portfolio1.png";
import portfolio2 from "../../public//assets/portfolio/portfolio2.png";
import portfolio3 from "../../public//assets/portfolio/portfolio3.png";
import portfolio4 from "../../public//assets/portfolio/portfolio4.png";


const projects = [
  {
    title: "Gym Management System",
    description: "A full-stack gym management website for managing memberships, classes, and bookings.",
    images: [gym1, gym2, gym3, gym4],
    techStack: ["React", "Tailwind CSS", "MUI"],
    liveLink: "#",
    githubLink: "https://github.com/MokariyaPrit/Gymsite",
  },
  {
    title: "Bus Booking System",
    description: "A web app for booking buses, viewing schedules, and managing bookings.",
    images: [bus1, bus2, bus3, bus4],
    techStack: ["React", "JavaScript", "Material UI"],
    liveLink: "#",
    githubLink: "https://github.com/MokariyaPrit/Bus",
  },
  {
    title: "Portfolio Website",
    description: "A modern and responsive personal portfolio showcasing projects, skills, and experience.",
    images: [portfolio1, portfolio2, portfolio3, portfolio4],
    techStack: ["React", "EmailJs", "TypeScript", "MUI"],
    liveLink: "#",
    githubLink: "",
  },  
];


const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const handleOpen = (images:any) => {
    setSelectedImages(images);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImages([]);
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

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
                  image={project.images[0]}
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
                  <Button onClick={() => handleOpen(project.images)} sx={{ mr: 2 }}>
                    Demo
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
      
      {/* Carousel Modal */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Box sx={{ p: 2 }}>
          <Slider {...sliderSettings}>
            {selectedImages.map((img, idx) => (
              <Box key={idx} component="img" src={img} alt="Project Screenshot" sx={{ width: "100%" }} />
            ))}
          </Slider>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Projects;
