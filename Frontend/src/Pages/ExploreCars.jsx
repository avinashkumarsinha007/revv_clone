import React from "react";
import CarsDisplayCard from "../Components/ExploreCars/CarsDisplayCard";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Checkbox, TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";

const GreenCheckbox = withStyles({
  root: {
    "&$checked": {
      color: teal[400],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const carBrands = [
  "Maruti",
  "Hyundai",
  "Mahindra",
  "Honda",
  "Ford",
  "Toyota",
  "Tata",
  "Nissan",
];

const options = ["Option 1", "Option 2"];

export default function ExploreCars() {
  const cities = ["mumbai", "pune", "chennai"];
  const [checkbox, setCheckbox] = React.useState({});

  const [searchValue, setsearchValue] = React.useState("");

  const handleChange = (event) => {
    setCheckbox({ ...checkbox, [event.target.name]: event.target.checked });
  };

  console.log(checkbox);

  return (
    <div style={{ display: "flex", padding: "20px 100px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flexBasis: "30%",
        }}
      >
        <h3>Filter By</h3>
        <p>City</p>
        <Autocomplete
          options={cities}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="cities" />}
        />
        <p>search</p>
        <Autocomplete
          value={searchValue}
          onChange={(event, newValue) => {
            setsearchValue(newValue);
          }}
          id="controllable-states-demo"
          options={options}
          style={{ width: 300 }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search by car model or brand"
              variant="outlined"
            />
          )}
        />
        <p>segment</p>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkbox.checkedG}
              onChange={handleChange}
              name="Hatchback"
            />
          }
          label="Hatchback"
        />{" "}
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkbox.checkedG}
              onChange={handleChange}
              name="Sedan"
            />
          }
          label="Sedan"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkbox.checkedG}
              onChange={handleChange}
              name="SUV/MUV"
            />
          }
          label="SUV/MUV"
        />
        <p>Fuel</p>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkbox.checkedG}
              onChange={handleChange}
              name="Diesel"
            />
          }
          label="Diesel"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkbox.checkedG}
              onChange={handleChange}
              name="Petrol"
            />
          }
          label="Petrol"
        />
        <p>Transmission</p>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkbox.checkedG}
              onChange={handleChange}
              name="Automatic"
            />
          }
          label="Automatic"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={checkbox.checkedG}
              onChange={handleChange}
              name="Manual"
            />
          }
          label="Manual"
        />
        <p>Brand</p>
        {carBrands.map((item) => {
          return (
            <FormControlLabel
              control={
                <GreenCheckbox
                  checked={checkbox.item}
                  onChange={handleChange}
                  name={item}
                />
              }
              label={item}
            />
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          padding: "20px",
          flexDirection: "column",
          flexBasis: "70%",
        }}
      >
        <h2>36 cars for subscription in Bangalore</h2>
        <CarsDisplayCard />
        <br />
        <CarsDisplayCard />
        <br />
        <CarsDisplayCard />
        <br />
        <CarsDisplayCard />
        <br />
        <CarsDisplayCard />
      </div>
    </div>
  );
}
