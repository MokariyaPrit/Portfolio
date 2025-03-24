import { Box } from '@mui/material';
import About from "./About";
import Skills from "./Skills";
import EducationExperience from "./EducationExperience";
import Landingpage from "./Landingpage";
// import CertificationsAwards from './CertificationsAwards';
import  ContactForm  from './ContactForm';
// import Testimonials from './Testimonials';
import Projects from './Project';
import Chatbot from '../components/Chatbot';



const Home = () => {
  return (
    <>
 
    <Box sx={{ width: "100%", textAlign: "center", overflowX: "hidden", marginTop: "50px" }}>
      {/* 🚀 Hero Section */}
      <Box id="landingpage home"><Landingpage /></Box>
      <Box id="about"><About /></Box>
      <Box id="about"><Chatbot /></Box>
      <Box id="skills"><Skills /></Box>
    <Box id="projects"><Projects /></Box>
      <Box id="education"><EducationExperience /></Box>
      {/* <Box id="education"><CertificationsAwards /></Box> */}
    <Box id="contact"><ContactForm /></Box>
      </Box>
   </>
  );
};

export default Home;