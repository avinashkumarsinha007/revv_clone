import React from "react";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Checkbox, TextField, FormControlLabel } from "@material-ui/core";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
import { withStyles } from "@material-ui/core/styles";
import { teal } from "@material-ui/core/colors";

import { Section, Text } from "./exploreCars.styledComponent";
import CarsDisplayCard from "../../Components/ExploreCars/CarsDisplayCard";
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

  return (
    <Section outerLayout>
      <Section searchColumn>
        <Text title>Filter By</Text>
        <Text city>City</Text>
        <Autocomplete
          options={cities}
          style={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="cities" />}
        />
        <Text city>search</Text>
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
        <Text city>segment</Text>
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
        <Text city>Fuel</Text>
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
        <Text city>Transmission</Text>
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
        <Text city>Brand</Text>
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
      </Section>
      <Section carsColumn>
        <Text titleColumn2>36 cars for subscription in Bangalore</Text>
        <CarsDisplayCard />
        <br />
        <CarsDisplayCard />
        <br />
        <CarsDisplayCard />
        <br />
        <CarsDisplayCard />
        <br />
        <CarsDisplayCard />
      </Section>
    </Section>
  );
}
