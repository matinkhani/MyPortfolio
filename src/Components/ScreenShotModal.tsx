import Modal from "@mui/material/Modal";
import { useState } from "react";
import { StyledModalScreeShot } from "../Styled-Components/SCModalStyled";
import { LeftArrowStyles, LeftArrowStyles2, RightArrowStyles, RightArrowStyles2, SliderStyles, SliderStyles2 } from "../Styled-Components/StyledSCModal";

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const dotsContainerStyles = {
  display: "flex",
  justifyContent: "center",
};

const dotStyle = {
  margin: "0 3px",
  cursor: "pointer",
  fontSize: "20px",
};

export default function ScShotModal() {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const images = [
    {
      lable: "Image 1",
      alt: "Image1",
      url: "../Images/Screenshot1.png",
    },
    {
      lable: "Image 2",
      alt: "Image2",
      url: "../Images/Screenshot2.png",
    },
    {
      lable: "Image 3",
      alt: "Image3",
      url: "../Images/Screenshot3.png",
    },
  ];

  const MobileImages = [
    {
      lable: "Image Mobile 1",
      alt: "ImageMobile1",
      url: "../Images/ScreenshotMobile1.png",
    },
    {
      lable: "Image Mobile 2",
      alt: "ImageMobile2",
      url: "../Images/ScreenshotMobile2.png",
    },
    {
      lable: "Image Mobile 3",
      alt: "ImageMobile3",
      url: "../Images/ScreenshotMobile3.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  const slideStylesWidthBackground = {
    ...slideStyles,
    backgroundImage: `url(${images[currentIndex].url})`,
  };

  const [currentIndex2, setCurrentIndex2] = useState(0);
  const goToPrevious2 = () => {
    const isFirstSlide = currentIndex2 === 0;
    const newIndex = isFirstSlide ? MobileImages.length - 1 : currentIndex2 - 1;
    setCurrentIndex2(newIndex);
  };
  const goToNext2 = () => {
    const isLastSlide = currentIndex2 === MobileImages.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex2 + 1;
    setCurrentIndex2(newIndex);
  };
  const goToSlide2 = (slideIndex: any) => {
    setCurrentIndex2(slideIndex);
  };
  const slideStylesWidthBackground2 = {
    ...slideStyles,
    backgroundImage: `url(${MobileImages[currentIndex2].url})`,
  };

  return (
    <>
      <h3 style={{ cursor: "pointer" }} onClick={handleOpen}>
        See some Screen Shots
      </h3>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <StyledModalScreeShot>
          {/* Mobile Responsive */}
          <SliderStyles2>
            <div>
              <LeftArrowStyles2 onClick={goToPrevious2}>❰</LeftArrowStyles2>
              <RightArrowStyles2 onClick={goToNext2}>❱</RightArrowStyles2>
            </div>
            <div style={slideStylesWidthBackground2}></div>
            <div style={dotsContainerStyles}>
              {MobileImages.map((slide, slideIndex) => (
                <div
                  style={dotStyle}
                  key={slideIndex}
                  onClick={() => goToSlide2(slideIndex)}
                >
                  ●
                </div>
              ))}
            </div>
          </SliderStyles2>
          {/* Desktop Responsive */}
          <SliderStyles>
            <div>
              <LeftArrowStyles onClick={goToPrevious}>❰</LeftArrowStyles>
              <RightArrowStyles onClick={goToNext}>❱</RightArrowStyles>
            </div>
            <div style={slideStylesWidthBackground}></div>
            <div style={dotsContainerStyles}>
              {images.map((slide, slideIndex) => (
                <div
                  style={dotStyle}
                  key={slideIndex}
                  onClick={() => goToSlide(slideIndex)}
                >
                  ●
                </div>
              ))}
            </div>
          </SliderStyles>
        </StyledModalScreeShot>
      </Modal>
    </>
  );
}
