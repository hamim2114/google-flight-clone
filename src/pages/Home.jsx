import { Container } from '@mui/material'
import Hero from '../components/Hero'
import TravelSearch from '../components/TravelSearch'
import FlightFinderPage from '../components/FlightFinderPage'
import InteractiveSection from '../components/InteractiveSection'

const Home = () => {
  return (
    <Container>
      <Hero />
      <TravelSearch />
      <FlightFinderPage />
      <InteractiveSection />
    </Container>
  )
}

export default Home