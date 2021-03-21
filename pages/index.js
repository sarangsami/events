import {getFeaturedEvents} from '../dummy-data';
import EventList from '../components/EventList';
import {Container} from '@material-ui/core';
const Home = () =>{
  const featuredEvents = getFeaturedEvents();
  return(
    <Container maxWidth="md">
      <EventList items={featuredEvents}/>
    </Container>
  )
}
export default Home;