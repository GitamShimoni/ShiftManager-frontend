import { useState } from "react";
import Timer from "./Timer";

import './report.css'

function Report() {
    const [displayCircle,setDisplayCircle]=useState(true) //זה צריך להשתנות שהערך הדיפולטיבי הוא בהתאם למצב של העובד: isworking
    return (
        <div id="report-container">
            {displayCircle&&
              <div id="start-circle" onClick={()=>setDisplayCircle(!displayCircle)}>start your shift</div>
            }
            {!displayCircle&&
               <div id="end-circle" onClick={()=>setDisplayCircle(!displayCircle)}>
               end your shift
               <Timer></Timer>
               {/* עם הטיימר צריך לשלוח ערך של זמן התחלה של משמרת במידה ויש כזה */}
           </div>
            }
           
        </div>
    );
}

export default Report;