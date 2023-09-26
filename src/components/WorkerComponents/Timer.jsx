import { useEffect, useState } from "react";
function Timer ({startTime}){
 const [seconds, setSeconds]=useState(0);
 const[minutes, setMinutes]=useState(0);
 const [hours,setHours]=useState(0)

 useEffect(()=>{
  
    // const date = new Date(startTime); כשיהיה זמן אמיתי צריך להחליף בין השורה הזאת לשורה שמתחתיה כדי לעשות את החישוב בהפרש
  const date = new Date();

  // Get the current date and time
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDiffInMillis = currentDate - date;

  // Convert milliseconds to seconds, minutes, hours, and days
  let seconds = Math.floor(timeDiffInMillis / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  let days = Math.floor(hours / 24);

  // Calculate remaining hours, minutes, and seconds
  let remainingHours = hours % 24;
  let remainingMinutes = minutes % 60;
  let remainingSeconds = seconds % 60;

  // Add 24 hours if the time difference is more than 0 days
  if (days > 0) {
    remainingHours += days * 24;
  }
  console.log(remainingSeconds,"s",remainingMinutes,"m",remainingHours,"h")

  setHours(remainingHours)
  setMinutes(remainingMinutes)
  setSeconds(remainingSeconds)

 },[])

 var timer;
 useEffect(()=>{
    timer=setInterval(() => {
        setSeconds(seconds+1);
        if(seconds==59){
            setMinutes(minutes+1)
            setSeconds(0);
        }
        if(minutes==59&&seconds==59){
            setHours(hours+1)
            setMinutes(0)
            setSeconds(0)
        }
    }, 1000);
    return ()=>clearInterval(timer);
 })

   return(
     <div>{hours}:{minutes<10? "0"+minutes:minutes}:{seconds<10? "0"+seconds:seconds}</div>
   )
    
}
export default Timer;


