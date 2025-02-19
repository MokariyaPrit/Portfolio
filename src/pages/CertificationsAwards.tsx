import { useState } from "react";
import { Box, Typography, Grid, Card, Button } from "@mui/material";
import { styled } from "@mui/system";

import codingCloud from "../../public/assets/codingcloud.png";
import jsBeginners from "../../public/assets/JavaScript for Beginners-1.png";
import jsIntermediate from "../../public/assets/JavaScript (Intermediate)-1.png";
import jsBasic from "../../public/assets/JavaScript (Basic)-1.png";
import greatStack from "../../public/assets/greatstack.png";
import cssBasic from "../../public/assets/CSS (Basic)-1.png";
import problemSolving from "../../public/assets/Problem Solving (Basic)-1.png";

// Dummy data for certifications and awards

const certificationsAwards = [
  {
    id: 1,
    title: "MERN STACK",
    image: codingCloud, // ✅ Use imported image
    issuer: "CODING CLOUD",
    date: "March 2024",
  },
  {
    id: 2,
    title: "JavaScript for Beginners",
    image: jsBeginners, // ✅ Use imported image
    issuer: "Simplilearn SkillUP",
    date: "Feb 2025",
  },
  {
    id: 3,
    title: "JavaScript Intermediate",
    image: jsIntermediate, // ✅ Use imported image
    issuer: "HackerRank",
    date: "Feb 2025",
  },

  {
    id: 4,
    title: "JavaScript Fundamentals",
    image: greatStack, // ✅ Use imported image
    issuer: "GreatStack",
    date: "Feb 2025",
  },
  {
    id: 5,
    title: "JavaScript Basic",
    image: jsBasic, // ✅ Use imported image
    issuer: "HackerRank",
    date: "Feb 2025",
  },
  {
    id: 6,
    title: "CSS Basic",
    image: cssBasic, // ✅ Use imported image
    issuer: "HackerRank",
    date: "Feb 2025",
  },
  {
    id: 7,
    title: "Problem Solving Basic",
    image: problemSolving, // ✅ Use imported image
    issuer: "HackerRank",
    date: "Feb 2025",
  },
];


const CertificationsAwards = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <Box
      id="certifications-awards"
      sx={{ padding: "40px 20px", backgroundColor: "#f9f9f9" }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{ textAlign: "center", marginBottom: "40px", fontWeight: "bold" }}
      >
        Certifications & <span style={{ color: `#6e07f3` }}> Awards</span>
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {(showAll
          ? certificationsAwards
          : certificationsAwards.slice(0, 3)
        ).map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            sm={6}
            md={4}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <StyledCard>
              <img
                className={`img ${
                  item.id === 2 || item.id === 4 ? "img-contain" : ""
                }`}
                src={item.image}
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

      {/* Toggle button */}
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <StyledButton onClick={() => setShowAll(!showAll)}>
          {showAll ? "Show Less" : "See More"}
        </StyledButton>
      </Box>
    </Box>
  );
};

const StyledCard = styled(Card)`
  width: 350px;
  min-height: 320px;
  background: #313131;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s ease-in-out;
  box-shadow: 0 14px 26px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: scale(1.04) rotate(-1deg);
  }

  .img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Default */
    transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
  }

  .img.img-contain {
    object-fit: contain !important;
    background-color: white;
  }

  .textBox {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    transition: opacity 0.3s ease-in-out;
  }

  .textBox > .text {
    font-weight: bold;
    font-size: 18px;
  }

  .textBox > .head {
    font-size: 20px;
  }

  .textBox > .price {
    font-size: 17px;
  }

  .textBox > span {
    font-size: 12px;
    color: lightgray;
  }

  &:hover > .textBox {
    opacity: 1;
  }

  &:hover > .img {
    filter: blur(5px);
    transform: scale(1.05);
  }
`;

const StyledButton = styled(Button)`
  background: #6e07f3;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-transform: none;
  padding: 10px 20px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background:rgb(80, 12, 168);
    transform: scale(1.1);
  }
`;

export default CertificationsAwards;
