import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./SearchBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}) {

    let IMG_URL = "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const   HOT = "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD = "https://images.unsplash.com/photo-1484278786775-527ac0d0b608?q=80&w=2261&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?q=80&w=2231&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <div className="InfoBox">


            <div className="container">


                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAIN : (info.temp > 15 ? HOT:COLD)}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {
                                info.humidity > 80 
                                ? <ThunderstormIcon/> : (info.temp > 15 ? <SunnyIcon/>:<AcUnitIcon/>)
                            }
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                            <p>Temperature - {info.temp} &deg;C</p>
                            <p>Humidity - {info.humidity} </p>
                            <p>Min Temp - {info.tempMin} </p>
                            <p>Max Temp - {info.tempMax} </p>
                            <p>The Weather can be described as {info.weather} and feels like {info.feelsLike} </p>


                        </Typography>
                    </CardContent>

                </Card>
            </div>
        </div>

    )
}