import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Button,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { EventAvailable, LocationOnOutlined } from "@material-ui/icons";
import Link from 'next/link';
import {Alert} from '@material-ui/lab';
const useStyles = makeStyles((theme) => ({
  large: {
    height: 250,
    width: "100%",
    // height: "100%",
    maxWidth: 250,
    objectFit: "cover",
    borderRadius: "50%",
  },
  title: {
    fontWeight: "bold",
  },
}));
const Event = () => {
  const classes = useStyles();
  const router = useRouter();
  const data = getEventById(router.query.eventId);
  if (!data) {
    return (
      <Container maxWidth="md">
       
        
        <Box mt="5%" mb="2%" width="100%" display="flex" justifyContent="center">
          <Link href="/events">
            <Button variant="outlined" color="primary">
              Back to events!
            </Button>
          </Link>
        </Box>
        <Alert severity="error">No event has been found...</Alert>
      </Container>
    );
  } else {
    const { title, description, location, date, image } = data;
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    return (
      <div>
        <Box mt="2%" height="100vh" display="flex" alignItems="center">
          <Container maxWidth="md">
            <Paper elevation={8}>
              <Box p="2%">
                <Box m="3% 0">
                  <Typography className={classes.title} variant="h5">
                    {title}
                  </Typography>
                </Box>
                <Divider />
                <Box mt="2%">
                  <Grid container>
                    <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                      <Box
                        p="1%"
                        display="flex"
                        alignItems="center"
                        minHeight="250px"
                      >
                        <img
                          alt={title}
                          src={`/${image}`}
                          className={classes.large}
                        />
                      </Box>
                    </Grid>
                    <Grid item xl lg md sm xs>
                      <Box m="2% 0">
                        <EventAvailable color="primary" />
                        <Typography variant="body2">{formattedDate}</Typography>
                      </Box>
                      <Divider />
                      <Box m="5% 0">
                        <LocationOnOutlined color="primary" />
                        <Typography variant="body2">{location}</Typography>
                      </Box>
                      <Divider />
                      <Box mt="2%">
                        <Typography variant="body2">{description}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Paper>
          </Container>
        </Box>
      </div>
    );
  }
};
export default Event;
