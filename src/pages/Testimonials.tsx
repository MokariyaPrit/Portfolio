import { Box, Typography, Grid, Card, Avatar, CardContent } from "@mui/material";
import { styled } from "@mui/system";

const StyledWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 20px;
  margin: 40px 0;
  background-color: #f9f9f9;
  width: 100%;
  box-sizing: border-box;
`;

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 350px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
  margin-bottom: 16px;
  border: 4px solid #000;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ram Kumar",
      title: "MERN Stack Developer",
      message: "Working with the MERN stack has been an incredibly rewarding experience. It allows me to build scalable and high-performance web applications quickly. The integration between MongoDB, Express, React, and Node.js is seamless and powerful, making it my go-to choice for development.",
      image: "/assets/mentor.jpg", // Your mentor's image or a relevant picture
    },
    {
      name: "Bhavesh Bhuva",
      title: "Sr React Devloper",
      message: "As a project manager, I've seen Ram's proficiency with the MERN stack firsthand. His ability to deliver clean, maintainable code and his understanding of both front-end and back-end technologies make him a key asset to any development team.",
      image: "/assets/project-manager.jpg", // Example image
    },
    {
      name: "Ravi Patel",
      title: "colleague",
      message: "Ram's expertise in MERN stack development has been a game-changer. He has a deep understanding of both front-end and back-end technologies, which helps in building robust and efficient full-stack applications. He's a developer who truly stays ahead of the curve.",
      image: "/assets/colleague.jpg", // Example image
    },
  ];
  

  return (
    <StyledWrapper>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Typography variant="h3" component="h2" sx={{ marginBottom: "40px", fontWeight: "bold" }}>
          Testimonials
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
              <StyledCard>
                <CardAvatar alt={testimonial.name} src={testimonial.image} />
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" gutterBottom>
                    {testimonial.title}
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    "{testimonial.message}"
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </StyledWrapper>
  );
};

export default Testimonials;
