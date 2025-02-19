import { useTheme } from "@mui/material/styles";
import styled from "styled-components";

const DownloadButton = () => {
  const theme = useTheme(); // Get the theme

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../public/PRIT_CV.pdf"; // Path to your PDF file
    link.download = "Prit CV.pdf"; // Default name for the downloaded file
    link.click(); // Simulate click to start download
  };

  return (
    <StyledWrapper theme={theme}>
      <div className="container">
        <button className="fancy-button" onClick={handleDownload}>
          <span>Download CV</span>
        </button>   
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .container {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .fancy-button {
    position: relative;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    border-radius: 8px;
    background: #6e07f3;
    font-family: "Montserrat", sans-serif;
    box-shadow: 0px 6px 24px 0px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    cursor: pointer;
    border: none;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 700;
    color: white;
    letter-spacing: 0.1em;
    text-transform: none;
    transition: all 0.3s ease-in-out;
    text-align: center;
  }

  .fancy-button::after {
    content: "";
    width: 0%;
    height: 100%;
    background: #ffd401;
    position: absolute;
    transition: all 0.4s ease-in-out;
    right: 0;
  }

  .fancy-button:hover::after {
    right: auto;
    left: 0;
    width: 100%;
  }

  .fancy-button span {
    position: relative;
    z-index: 1;
    transition: color 0.3s ease-in-out;
  }

  .fancy-button:hover span {
    color: #183153 !important; /* Ensures text color changes */
  }
`;

export default DownloadButton;
