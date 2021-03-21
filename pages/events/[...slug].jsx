import { useRouter } from "next/router";
import {
  Container,
  Box,
  Backdrop,
  CircularProgress,
  Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import EventsFilter from "../../components/EventsFilter";
import EventList from "../../components/EventList";
import { getFilteredEvents } from "../../dummy-data";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));
const EventSlug = () => {
  const classes = useStyles();
  const router = useRouter();
  const onSearch = (year, month) => {
    const dynamicRoute = `/events/${year}/${month}`;
    router.push(dynamicRoute);
  };
  const filterList = router.query.slug;

  if (!filterList) {
    return (
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress color="inherit" />
      </Backdrop>
    );
  }
  const getYear = filterList[0];
  const getMonth = filterList[1];
  const numYear = +getYear;
  const numMonth = +getMonth;
  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numMonth < 1 ||
    numMonth > 12 ||
    numYear < 2021 ||
    numYear > 2030
  ) {
    return  <Container maxWidth="md">
    <Box mb="5%">
      <EventsFilter onSearch={onSearch} />
    </Box>
    <Alert severity="warning">Invalid filters!</Alert>
    <Box mt="5%" width="100%" display="flex" justifyContent="center">
      <Link href="/events">
        <Button variant="outlined" color="primary">
          Back to events!
        </Button>
      </Link>
    </Box>
  </Container>;
  }
  const data = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });
  if (!data || data.length === 0) {
    const date = new Date(numYear, numMonth - 1);
    const readableDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
    return (
      <Container maxWidth="md">
        <Box mb="5%">
          <EventsFilter onSearch={onSearch} />
        </Box>
        <Alert severity="error">No data has been found in {readableDate}</Alert>
        <Box mt="5%" width="100%" display="flex" justifyContent="center">
          <Link href="/events">
            <Button variant="outlined" color="primary">
              Back to events!
            </Button>
          </Link>
        </Box>
      </Container>
    );
  }
  return (
    <Container maxWidth="md">
        
      <Box>
        <EventsFilter onSearch={onSearch} />
      </Box>
      <Box mt="2%" width="100%" display="flex" justifyContent="center">
          <Link href="/events">
            <Button variant="outlined" color="primary">
              Back to events!
            </Button>
          </Link>
        </Box>
      <EventList items={data} />
    </Container>
  );
};
export default EventSlug;
