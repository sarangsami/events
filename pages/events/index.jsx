import { Container } from '@material-ui/core';
import EventList from '../../components/EventList';
import {getAllEvents} from '../../dummy-data';
import EventsFilter from '../../components/EventsFilter';
import {Box} from '@material-ui/core';
import {useRouter} from 'next/router';
const Events = () =>{
    const events = getAllEvents();
    const router = useRouter()
    const onSearch = (year,month) =>{
        const dynamicRoute = `/events/${year}/${month}`;
        router.push(dynamicRoute)
    }
    return(
        <Container maxWidth="md">
            <Box>
                <EventsFilter onSearch={onSearch}/>
            </Box>
            <EventList items={events}/>
        </Container>
    );
}
export default Events;