import axios from "axios"

export async function request (city){

 await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=43744dd7f1d88e520ee89b5e41fd554b`)


}