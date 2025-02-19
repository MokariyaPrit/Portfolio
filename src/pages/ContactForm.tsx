import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField, Button, Box, Grid, Typography, Card } from "@mui/material";
import { styled } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Styled Components for better UI
const StyledWrapper = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const FormCard = styled(Card)`
  width: 100%;
  max-width: 500px;
  min-height: 300px;
  padding: 16px;
  background: #fff;
  border: 6px solid #000;
  box-shadow: 12px 12px 0 #000;
  transition: transform 0.3s, box-shadow 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translate(-5px, -5px);
    box-shadow: 17px 17px 0 #000;
  }

  &:hover .MuiTypography-root::after {
    width: 100%;
    left: 0;
  }
`;

// Heading with Hover Underline Effect
const CardTitle = styled(Typography)`
  font-size: 24px;
  font-weight: 900;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -3px;
    width: 0;
    height: 3px;
    background-color: #000;
    transition: width 0.4s ease-in-out, left 0.4s ease-in-out;
  }
`;

const CardContentStyled = styled(Box)`
  font-size: 14px;
  line-height: 1.4;
  color: #000;
  margin-bottom: 16px;
`;

const StyledButton = styled(Button)`
  width: 50%;
  border: 3px solid #000;
  background: #000;
  color: #fff;
  padding: 8px;
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #5ad641 !important;
    color: #000 !important;
  }

  &:active {
    transform: scale(0.95);
  }

  &::before {
    content: "Sure?";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #5ad641;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: translateY(0);
  }
`;

const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const validateForm = () => {
    const formErrors: { name?: string; email?: string; message?: string } = {};
  
    const name = form.current?.from_name.value;
    const email = form.current?.to_name.value;
    const message = form.current?.message.value;
  
    // Name validation: Only letters and spaces allowed
    if (!name) {
      formErrors.name = "Name is required!";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      formErrors.name = "Name can only contain letters and spaces!";
    }
  
    // Email validation
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Please enter a valid email!";
    }
  
    // Message validation
    if (!message) {
      formErrors.message = "Message cannot be empty!";
    }
  
    setErrors(formErrors);
  
    return Object.keys(formErrors).length === 0;
  };
  

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (!form.current) return;

    emailjs
      .sendForm("service_n55b1tp", "template_kwfx79p", form.current, {
        publicKey: "IT-X7ZLz9mfBcbr7e",
      })
      .then(
        () => {
          toast.success("Message sent successfully! 🎉", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current?.reset();
          setErrors({});
        },
        (error) => {
          toast.error("Failed to send message. Try again!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <StyledWrapper>
      <FormCard>
        <CardTitle variant="h3">Contact Us</CardTitle>
        <CardContentStyled>
          <p>Have any questions or feedback? Get in touch with us.</p>
        </CardContentStyled>
        <form ref={form} onSubmit={sendEmail} style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Name"
                variant="outlined"
                name="from_name"
                id="from_name"
                required
                error={!!errors.name}
                helperText={errors.name}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Your Email"
                variant="outlined"
                name="to_name"
                id="to_name"
                required
                error={!!errors.email}
                helperText={errors.email}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                name="message"
                id="message"
                required
                multiline
                rows={3}
                error={!!errors.message}
                helperText={errors.message}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px" } }}
              />
            </Grid>

            <Grid item xs={12}>
              <StyledButton type="submit" variant="contained">
                Send Message
              </StyledButton>
            </Grid>
          </Grid>
        </form>
      </FormCard>

      {/* Toastify Container */}
      <ToastContainer />
    </StyledWrapper>
  );
};

export default ContactForm;
