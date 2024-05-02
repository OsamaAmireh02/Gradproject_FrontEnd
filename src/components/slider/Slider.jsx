import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { ThemeProvider } from 'react-bootstrap';
import images from '../../assests/images.jpg';

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
      <Carousel activeIndex={index} onSelect={handleSelect} className='lg'>
        <Carousel.Item>
          <img src={images} alt='' width={"100%"} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://get.wallhere.com/photo/2000x1000-px-death-fantasy-art-waves-1256985.jpg" alt='' width={"100%"} />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://get.wallhere.com/photo/2000x1000-px-death-fantasy-art-waves-1256985.jpg" alt='' width={"100%"} />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </ThemeProvider>
  );
}

export default Slider;