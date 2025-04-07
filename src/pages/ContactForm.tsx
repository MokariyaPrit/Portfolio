"use client"

import type React from "react"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { TextField, Button, Box, Grid, Typography, Card, useTheme } from "@mui/material"
import { styled } from "@mui/system"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Define styled components outside the component function
const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
  backgroundColor: theme.palette.background.default,
}))

const FormCard = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 500,
  minHeight: 300,
  padding: 16,
  background: theme.palette.background.paper,
  border: `6px solid ${theme.palette.mode === "dark" ? "#333" : "#000"}`,
  boxShadow: `12px 12px 0 ${theme.palette.mode === "dark" ? "#333" : "#000"}`,
  transition: "transform 0.3s, box-shadow 0.3s",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  cursor: "pointer",
  "&:hover": {
    transform: "translate(-5px, -5px)",
    boxShadow: `17px 17px 0 ${theme.palette.mode === "dark" ? "#333" : "#000"}`,
  },
  "&:hover .MuiTypography-root::after": {
    width: "100%",
    left: 0,
  },
}))

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: 24,
  fontWeight: 900,
  color: theme.palette.text.primary,
  textTransform: "uppercase",
  marginBottom: 10,
  position: "relative",
  display: "inline-block",
  cursor: "pointer",
  "&::after": {
    content: '""',
    position: "absolute",
    left: "50%",
    bottom: -3,
    width: 0,
    height: 3,
    backgroundColor: theme.palette.primary.main,
    transition: "width 0.4s ease-in-out, left 0.4s ease-in-out",
  },
}))

const CardContentStyled = styled(Box)(({ theme }) => ({
  fontSize: 14,
  lineHeight: 1.4,
  color: theme.palette.text.secondary,
  marginBottom: 16,
}))

const StyledButton = styled(Button)(({ theme }) => ({
  width: "50%",
  border: `3px solid ${theme.palette.mode === "dark" ? "#333" : "#000"}`,
  background: theme.palette.mode === "dark" ? "#333" : "#000",
  color: theme.palette.mode === "dark" ? "#fff" : "#fff",
  padding: 8,
  fontSize: 16,
  fontWeight: "bold",
  textTransform: "uppercase",
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  transition: "background-color 0.3s ease, transform 0.3s ease",
  "&:hover": {
    backgroundColor: "#5ad641 !important",
    color: `${theme.palette.mode === "dark" ? "#000" : "#000"} !important`,
  },
  "&:active": {
    transform: "scale(0.95)",
  },
  "&::before": {
    content: '"Sure?"',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "#5ad641",
    color: "#000",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "translateY(100%)",
    transition: "transform 0.3s ease-in-out",
  },
  "&:hover::before": {
    transform: "translateY(0)",
  },
}))

const ContactForm = () => {
  const theme = useTheme()
  const form = useRef<HTMLFormElement | null>(null)
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const validateForm = () => {
    const formErrors: { name?: string; email?: string; message?: string } = {}

    const name = form.current?.from_name.value
    const email = form.current?.to_name.value
    const message = form.current?.message.value

    if (!name) {
      formErrors.name = "Name is required!"
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      formErrors.name = "Name can only contain letters and spaces!"
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Please enter a valid email!"
    }

    if (!message) {
      formErrors.message = "Message cannot be empty!"
    }

    setErrors(formErrors)

    return Object.keys(formErrors).length === 0
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    if (!form.current) return

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
          })
          form.current?.reset()
          setErrors({})
        },
        (error) => {
          toast.error("Failed to send message. Try again!", {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
          console.error("FAILED...", error.text)
        },
      )
  }

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
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    color: theme.palette.text.primary,
                  },
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.secondary,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)",
                  },
                }}
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
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    color: theme.palette.text.primary,
                  },
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.secondary,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)",
                  },
                }}
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
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8px",
                    color: theme.palette.text.primary,
                  },
                  "& .MuiInputLabel-root": {
                    color: theme.palette.text.secondary,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.23)" : "rgba(0, 0, 0, 0.23)",
                  },
                }}
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
  )
}

export default ContactForm

