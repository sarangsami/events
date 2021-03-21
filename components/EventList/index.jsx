import EventItem from "../EventItem";
import { Box } from "@material-ui/core";
const EventList = ({ items }) => {
  return (
    <Box display="flex" flexDirection="column">
      {items.map((event) => (
        <EventItem key={event.id} item={event} />
      ))}
    </Box>
  );
};
export default EventList;
