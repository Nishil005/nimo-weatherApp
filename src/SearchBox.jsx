import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState ,useEffect} from 'react';

export default function SearchBox({ updateIndo }){

    let API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric"
    let API_KEY = "5427bd74847b68c4cd1b7246dde6a299";
    let [err,setErr] =useState(false);
    let getWeatherInfo = async () => {

        try {
            let response = await fetch(`${API_URL}&q=${city}&appid=${API_KEY}`);
            let data = await response.json();
            if (response.status !== 200) {
                throw new Error(data.message);  // Will be caught in handleSubmit
            }
            console.log(data);
            
            let result = {
               city : data.name,
               temp : data.main.temp,
               tempMin : data.main.temp_min,
               tempMax : data.main.temp_max,
               humidity : data.main.humidity,
               feelsLike : data.main.feels_like,
               weather: data.weather[0].description
            }
            console.log(result);
            return result;   
        } catch (err) {
            throw err;
        }
     
     
     
    }


    let [city,setCity] = useState("");
     function handleChange(e){
        setCity(e.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            console.log(city);
    
            let newInfo = await getWeatherInfo();
            updateIndo(newInfo);
            setErr(false); // ✅ Reset error state if successful
            setCity("");   // ✅ Clear input only after success
    
        } catch (err) {
            console.error(err);
            setErr(true);  // Show error only on actual failure
            setCity(""); 
        }
    }
    

    // useEffect(() => {
    //   getWeatherInfo()
    // }, [])
    
    return(
        <div className='SearchBox'>
           
            <form action="" onSubmit={handleSubmit}>
            <TextField 
            id="city" 
            label="City Name" 
            variant="outlined"
            required
            value={city}
            onChange={handleChange} /> <br /> <br />
            <Button style={{backgroundColor:"black", color:"white"}} variant="contained" type='submit'>Submit</Button>
        {err ? <p style={{color:"red"}}>No such place</p>: <p></p>}
            </form>
        </div>
    )
}