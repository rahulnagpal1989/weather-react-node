import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_WEATHER_QUERY } from "../graphql/Queries";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { getMainDefinition } from "@apollo/client/utilities";

function Home() {
  const [citySearched, setCitySearched] = useState("");
  const [inputData, setInputData] = useState("");
  const [loading, setLoading] = useState(false);
  const [getWeather, { data, error }] = useLazyQuery(GET_WEATHER_QUERY, {
    variables: { name: inputData },
  });

  if (error) return <h1> Error found</h1>;

  if (data) {
    console.log(data);
  }

  const getInfo = () => {
    setInputData(citySearched);
    setLoading(true);
    getWeather();
  };

  return (
    <Container>
        <h2>Get weather info of any city</h2>
        <Grid container spacing={2}>
            <Grid item xs={2}>
                <TextField label="Enter City Name" variant="standard" onChange={(event) => {
                setCitySearched(event.target.value.trim());
                }} />
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" onClick={() => {getInfo();}}> Search</Button>
            </Grid>
        </Grid>
        <br/>
        <Card variant="outlined">
            <div className="weather">
                {loading && !data && !error && (
                    <>
                    Please wait, we're getting weather details for <b>{inputData}</b>...
                    </>
                )}
                {data && data.getCityByName==null && (
                    <>
                        Sorry no results found with this term: <b>{inputData}</b>
                    </> 
                )}
                {data && data.getCityByName && (
                <>
                    <h1>{data.getCityByName.weather.summary.title} at {data.getCityByName.name} and temperature is {data.getCityByName.weather.temperature.actual}</h1>
                    <h3>City: <i>{data.getCityByName.name}</i></h3>
                    <h3>Temperature: <i>{data.getCityByName.weather.temperature.actual}</i></h3>
                    <h3>Wind Speed: <i>{data.getCityByName.weather.wind.speed}</i></h3>
                    <h3>Title: <i>{data.getCityByName.weather.summary.title}</i></h3>
                    <h3>Humidity: <i>{data.getCityByName.weather.clouds.humidity}</i></h3>
                </>
                )}
            </div>
        </Card>
    </Container>
  );
}

export default Home;