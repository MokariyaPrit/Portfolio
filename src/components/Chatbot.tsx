import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Paper,
  Typography,
  Slide,
  CircularProgress,
  Link,
} from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isTyping, setIsTyping] = useState(false);
  const [chatHistory, setChatHistory] = useState<
    { sender: string; message: string; action?: string }[]
  >([]);
  const [currentStep, setCurrentStep] = useState<number>(0);

  const aboutInfo = [
    "I’m a passionate web developer building seamless, interactive digital experiences with modern technologies.",
    "Focused on creating clean, scalable web solutions using JavaScript, React, and Node.js.",
    "A problem-solving developer who turns complex ideas into user-friendly digital products.",
    "Web developer driven by innovation and a commitment to crafting beautiful, functional applications.",
    "I build fast, responsive websites with a focus on performance and usability.",
    "A curious coder with a love for technology, crafting clean, scalable web apps one line of code at a time.",
    "Web developer passionate about delivering engaging, high-quality user experiences.",
    "Crafting modern web applications with a strong focus on user experience and performance.",
    "Full-stack developer creating powerful digital solutions to bring ideas to life.",
    "A problem-solving web developer focused on building functional and user-friendly web applications.",
  ];

  const projectsInfo = [
    "Portfolio Website: A modern and responsive personal portfolio built with React, TypeScript, and MUI.",
    "Bus Booking System: A web app for booking buses, viewing schedules, and managing reservations using React and MUI.",
    "Gym Management System: A full-stack application for managing gym memberships, classes, and bookings using React, Node.js, and MongoDB.",
  ];

  // Updated contactInfo with text and action
  const contactInfo = [
    {
      text: "Email: mokariyaprit2086@gmail.com",
      action: "mailto:mokariyaprit2086@gmail.com", // Opens email client
    },
    {
      text: "LinkedIn: Prit Mokariya",
      action: "https://www.linkedin.com/in/prit-mokariya", // Opens LinkedIn profile
    },
    {
      text: "GitHub: Prit Mokariya",
      action: "https://github.com/MokariyaPrit", // Opens GitHub profile
    },
  ];

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      if (option === "About") {
        setChatHistory((prev) => [
          ...prev,
          { sender: "bot", message: aboutInfo[currentStep] },
        ]);
      } else if (option === "Projects") {
        setChatHistory((prev) => [
          ...prev,
          { sender: "bot", message: projectsInfo[currentStep] },
        ]);
      } else if (option === "Contact") {
        setChatHistory((prev) => [
          ...prev,
          {
            sender: "bot",
            message: contactInfo[currentStep].text,
            action: contactInfo[currentStep].action, // Include the action for redirection
          },
        ]);
      }
    }, 1500); // Simulate typing delay
  };

  const handleNextStep = () => {
    if (selectedOption === "About" && currentStep < aboutInfo.length - 1) {
      setCurrentStep(currentStep + 1);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatHistory((prev) => [
          ...prev,
          { sender: "bot", message: aboutInfo[currentStep + 1] },
        ]);
      }, 1500); // Simulate typing delay
    } else if (
      selectedOption === "Projects" &&
      currentStep < projectsInfo.length - 1
    ) {
      setCurrentStep(currentStep + 1);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatHistory((prev) => [
          ...prev,
          { sender: "bot", message: projectsInfo[currentStep + 1] },
        ]);
      }, 1500); // Simulate typing delay
    } else if (
      selectedOption === "Contact" &&
      currentStep < contactInfo.length - 1
    ) {
      setCurrentStep(currentStep + 1);
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setChatHistory((prev) => [
          ...prev,
          {
            sender: "bot",
            message: contactInfo[currentStep + 1].text,
            action: contactInfo[currentStep + 1].action, // Include the action for redirection
          },
        ]);
      }, 1500); // Simulate typing delay
    }
  };

  const handleBackStep = () => {
    // Reset to the home screen (initial state)
    setSelectedOption(null);
    setCurrentStep(0);
    setChatHistory([]);
  };

  return (
    <>
      {/* Chat Bubble Button */}
      <Box sx={{ position: "fixed", bottom: 20, right: 20, zIndex: 1000 }}>
        <IconButton
          onClick={() => setOpen(true)}
          sx={{
            backgroundColor: "#2563eb",
            color: "#fff",
            width: 60,
            height: 60,
            borderRadius: "50%",
            boxShadow: 3,
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.1)", backgroundColor: "#303f9f" },
          }}
        >
          <ChatBubbleOutlineIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Chatbox */}
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <Paper
          elevation={5}
          sx={{
            width: 300,
            p: 2,
            position: "fixed",
            bottom: 90,
            right: 20,
            borderRadius: "12px",
            backgroundColor: "#f8f9fa",
            zIndex: 1001,
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", mb: 2, fontWeight: "bold" }}
          >
            {selectedOption ? selectedOption : "Chat with us"}
          </Typography>

          {/* Chat History */}
          <Box sx={{ maxHeight: 300, overflowY: "auto", mb: 2 }}>
            {chatHistory.map((chat, index) => (
              <Box
                key={index}
                sx={{
                  textAlign: chat.sender === "user" ? "right" : "left",
                  mb: 1,
                }}
              >
                {chat.action ? (
                  // Render clickable link for contact info
                  <Link
                    href={chat.action}
                    target="_blank" // Open in new tab for external links
                    rel="noopener noreferrer" // Security best practice
                    sx={{
                      display: "inline-block",
                      p: 1,
                      borderRadius: "8px",
                      backgroundColor: "#e0e0e0",
                      color: "#000",
                      textDecoration: "none",
                      "&:hover": {
                        backgroundColor: "#d0d0d0",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    {chat.message}
                  </Link>
                ) : (
                  // Render regular message for non-contact info
                  <Typography
                    variant="body2"
                    sx={{
                      display: "inline-block",
                      p: 1,
                      borderRadius: "8px",
                      backgroundColor:
                        chat.sender === "user" ? "#3f51b5" : "#e0e0e0",
                      color: chat.sender === "user" ? "#fff" : "#000",
                    }}
                  >
                    {chat.message}
                  </Typography>
                )}
              </Box>
            ))}
            {isTyping && (
              <Box sx={{ textAlign: "left" }}>
                <CircularProgress size={20} />
              </Box>
            )}
          </Box>

          {/* Show options or input field based on selection */}
          {!selectedOption ? (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleOptionClick("Projects")}
                sx={{
                  transition: "all 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                Projects
              </Button>
              <Button
                variant="contained"
                fullWidth
                onClick={() => handleOptionClick("Contact")}
                sx={{
                  transition: "all 0.3s",
                  "&:hover": { transform: "scale(1.05)" },
                }}
              >
                Contact
              </Button>
            </Box>
          ) : (
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1, mt: 2 }}>
              {currentStep <
                (selectedOption === "About"
                  ? aboutInfo.length
                  : selectedOption === "Projects"
                  ? projectsInfo.length
                  : contactInfo.length) -
                  1 && (
                <Button variant="contained" onClick={handleNextStep} fullWidth>
                  Next
                </Button>
              )}
              <Button variant="outlined" onClick={handleBackStep} fullWidth>
                Back
              </Button>
            </Box>
          )}

          {/* Close Button */}
          <Button
            fullWidth
            color="error"
            sx={{ mt: 2 }}
            onClick={() => {
              setOpen(false);
              setSelectedOption(null);
              setChatHistory([]);
              setCurrentStep(0); // Reset to initial state
            }}
          >
            Close
          </Button>
        </Paper>
      </Slide>
    </>
  );
};

export default Chatbot;
