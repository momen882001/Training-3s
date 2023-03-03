import imgLeft from '../../assets/slider.png'
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/pexels-eberhard-grossgasteiger-12527038.jpg'
import img2 from '../../assets/pexels-eberhard-grossgasteiger-14730102.jpg'
import img3 from '../../assets/pexels-eberhard-grossgasteiger-14730101.jpg'
import './Slider.css'

const About = () => {
  return (
    <>
    <div className="slider-contain" id='slider'>

      <section className="img-side">
        <img src={imgLeft} alt="" />
      </section>

      <section className="slider-content">
        <h3 data-aos="fade-right" >Welcome</h3>
        <div className="seperator"></div>
        <Carousel
          fade 
          variant="dark"
          nextLabel=""
          prevLabel=""
          style={{ height: "24rem", width: "35rem" }}
        >
          <Carousel.Item interval={3000} style={{ marginBottom: "3rem" }}>
            <img
              className="w-100 rounded" id="slide"
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000} style={{ marginBottom: "3rem" }}>
            <img
              className="w-100 rounded"
              src={img2}
              alt="Second slide"
              id="slide"
            />

          </Carousel.Item>
          <Carousel.Item interval={3000} style={{ marginBottom: "3rem" }}>
            <img
              className="w-100 rounded"
              src={img3}
              alt="Third slide"
              id="slide"
            />
          </Carousel.Item>
        </Carousel>
      </section>

    </div>
    <div className="separator-section"></div>
    </>
  )
}

export default About