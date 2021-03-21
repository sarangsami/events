import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Box,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  btn: {
    height: "100%",
  },
}));
const EventsFilter = ({onSearch}) => {
  const classes = useStyles();
  const [state, setState] = useState({
    year: "",
    month: "",
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({ ...state, [name]: value });
  };
  const submitFilter = (event) => {
    event.preventDefault();
    const { year, month } = state;
    onSearch(year, month);
  };
  const {year,month} = state;
  return (
    <Box mt="2%">
      <form onSubmit={submitFilter}>
        <Grid container spacing={3}>
          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                Year
              </InputLabel>
              <Select
                onChange={handleChange}
                value={year}
                name="year"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Year"
              >
                <MenuItem value={2021}>2021</MenuItem>
                <MenuItem value={2022}>2022</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="demo-simple-select-outlined-label">
                Month
              </InputLabel>
              <Select
                onChange={handleChange}
                value={month}
                name="month"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                label="Month"
              >
                <MenuItem value={1}>January</MenuItem>
                <MenuItem value={2}>February</MenuItem>
                <MenuItem value={3}>March</MenuItem>
                <MenuItem value={4}>April</MenuItem>
                <MenuItem value={5}>May</MenuItem>
                <MenuItem value={6}>June</MenuItem>
                <MenuItem value={7}>July</MenuItem>
                <MenuItem value={8}>August</MenuItem>
                <MenuItem value={9}>September</MenuItem>
                <MenuItem value={10}>October</MenuItem>
                <MenuItem value={11}>November</MenuItem>
                <MenuItem value={12}>December</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xl={2} lg={2} md={2} sm={12} xs={12}>
            <Button
              type="submit"
              className={classes.btn}
              fullWidth
              variant="outlined"
              color="primary"
            >
              Filter
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
export default EventsFilter;
