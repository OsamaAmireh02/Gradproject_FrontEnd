import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container, ThemeProvider } from 'react-bootstrap';
import image1 from '../../assests/Slider1.jpeg';
import image2 from '../../assests/Slider2.jpeg';
import image3 from '../../assests/Slider3.jpeg';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
      <Container className='my-3'>
      <Carousel activeIndex={index} onSelect={handleSelect} className='lg' >
        <Carousel.Item>
          <img src={image1} alt='' width={"100%"} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image2} alt='' width={"100%"} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={image3} alt='' width={"100%"} />
        </Carousel.Item>
      </Carousel>
      </Container>
    </ThemeProvider>
  );
}

export default Slider;