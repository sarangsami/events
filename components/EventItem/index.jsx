import Link from "next/link";
import { Box, Paper, Grid, Typography, Button,useMediaQuery } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ChevronRight,
  LocationOnOutlined,
  EventAvailable,
} from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    borderRadius: 8,
  },
  dateStyle: {
    textAlign: "right",
    
  },
  iconMargin: {
    marginRight: 4,
  },
}));
const EventItem = ({ item }) => {
  const { id, title, location, date, image } = item;
  const classes = useStyles();
  const isSm = useMediaQuery(theme => theme.breakpoints.up('sm'));
  const convertedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const convertedAddress = location.replace(", ", "\n");
  const linkGenerator = `/events/${id}`;
  
  return (
    <Box mt="5%">
      <Paper elevation={6}>
        <Box p="2%" height="100%">
          <Grid container spacing={3}>
            <Grid item xl={4} lg={4} md={4} sm={6} xs={12}>
              <Box display="flex" alignItems="flex-end">
                <img className={classes.imageStyle} src={`/${image}`} alt={title} />
              </Box>
            </Grid>
            <Grid item xl lg md sm xs>
              <Box display="flex" flexDirection="column" height="100%">
                <Grid container alignItems="center">
                  <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
                    <Typography variant="h6">{title}</Typography>
                  </Grid>
                  <Grid item xl lg md sm xs>
                    <Box
                      width="100%"
                      display="flex"
                      justifyContent={isSm?"flex-end":"flex-start"}
                      flexDirection="row"
                    >
                      <EventAvailable
                        color="primary"
                        className={classes.iconMargin}
                      />
                      <Typography className={classes.dateStyle}>
                        {convertedDate}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Box display="flex" mt="2%" alignItems="center">
                  <LocationOnOutlined
                    color="primary"
                    className={classes.iconMargin}
                  />
                  <Typography>{convertedAddress}</Typography>
                </Box>

                <Box height="100%" display="flex" alignItems="flex-end" mt="3%">
                  <Link href={linkGenerator}>
                    <Button
                      endIcon={<ChevronRight />}
                      color="primary"
                      variant="contained"
                    >
                      Explore Event
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};
export default EventItem;