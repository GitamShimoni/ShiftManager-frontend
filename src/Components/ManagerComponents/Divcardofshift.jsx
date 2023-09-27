
import { useEffect, useState } from 'react';
import './Divcardofshift.css';

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


function Divcardofshift({element}) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(element,"element")
    let obj=element;
    const [acceptedisclicked, setAcceptedIsClicked] = useState(false);
    const [openDialog,setOpenDialog]=useState(false)
    const [objectStatus, setObjectStatus] = useState(obj.status);


    function formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();
      
        return `${day}.${month}.${year}`;
      }
      
      const originalDateString = obj.startDate;
      const formattedDateString = formatDate(originalDateString);

      function capitalizeFirstLetter(str) {
        return str.replace(/\b\w/g, function(match) {
          return match.toUpperCase();
        });
      }

      function AddToCalander (){
        setAcceptedIsClicked(!acceptedisclicked)
        setOpenDialog(true)
      }

      function takeOutDataInCalender(element){
        console.log("delete",element)
      }

      useEffect(()=>{
         console.log(openDialog,"opendialog")
      },[openDialog])

    return(
        <div className="cardofshift-container">
          <div className='cardofshift-infobuttons-container'>
          <div className='cardofshift-info-container'>
            <div className='object-parts'>{obj.title}</div>
            {objectStatus=="accept" ? <div className='object-parts'>{`${capitalizeFirstLetter(obj.status)}ed`}</div> :
            <div className='object-parts'>{`${capitalizeFirstLetter(obj.status)}`}</div>}
            
            <div className='object-parts'>{formattedDateString}</div>
            <div className='object-parts'>{capitalizeFirstLetter(obj.hour)}</div> 
          </div>
          <div className='cardofshift-buttons-container'>
            <div className='object-parts' ><button className='button-in'  onClick={() => handleClickOpen()}>Accept Shift</button></div> 
            <div className='object-parts' ><button className='button-in'  onClick={()=>takeOutDataInCalender(obj.id)}>Decline Shift</button></div> 
          </div>
          </div> 
          <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Terms of use:</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>
              blabla
            </p>
          </DialogContentText>
            <div>hhiii</div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>          
        </div>
    )
   
}
export default Divcardofshift;
