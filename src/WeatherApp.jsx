import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
export default function WeatherApp(){
    const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
    let [weatherInfo, setWeatherInfo] = useState({
        city: "Mumbai",
        feelsLike: 32.71,
        humidity: 70,
        temp: 28.99,
        tempMax: 28.99,
        tempMin: 28.99,
        weather: "haze"
    });

    let updateIndo = (newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <ThemeProvider theme={darkTheme}>
        <div className="main-contain" style={{textAlign:"center"}}>
            <h2 style={{ color:"black"}}>Weather App</h2>
            <SearchBox updateIndo={updateIndo}/>
            <InfoBox info={weatherInfo}/>
        </div>
        </ThemeProvider>

    )
}