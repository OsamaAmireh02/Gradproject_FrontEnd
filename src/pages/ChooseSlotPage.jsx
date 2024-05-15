import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer';
import Parkings from '../components/parking/ParkingChoose';
import { Button, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function ChooseSlotPage() {

  const location = useLocation();
  const parkingName = new URLSearchParams(location.search).get('parkingName');
  const parkingId = new URLSearchParams(location.search).get('parkingId');
  return (
    <div style={{
      // paddingTop: '50px',
    }}>
      <NavBar />
      <Parkings />
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          className='btn-53'
          style={{ width: '100px', borderColor: '#323437' }}
          variant='light'
          href='/booking'>
          <div className="original" style={{ background: '#aaa' }}>Back</div>
          <div className="letters">
            <span>B</span>
            <span>A</span>
            <span>C</span>
            <span>K</span>
          </div>
        </Button>
        <Button
          className='btn-53 ms-3'
          style={{ width: '100px', borderColor: '#323437' }}
          variant='light'
          href={`/booking/submit?parkingId=${parkingId}&parkingName=${encodeURIComponent(parkingName)}`}>
          <div className="original" style={{ background: '#E9B824' }} >NEXT</div>
          <div className="letters">
            <span>N</span>
            <span>E</span>
            <span>X</span>
            <span>T</span>
          </div>
        </Button>
      </Container>
      <Footer />
    </div >
  )
}

export default ChooseSlotPage
