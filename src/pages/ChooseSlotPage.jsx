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
        <Button style={{ width: '100px' }} variant='dark' href='/booking'>Back</Button>
        <Button style={{ width: '100px' }} className='mx-3' variant='warning' href={`/booking/submit?parkingId=${parkingId}&parkingName=${encodeURIComponent(parkingName)}`}>Next</Button>
      </Container>
      <Footer />
    </div >
  )
}

export default ChooseSlotPage
