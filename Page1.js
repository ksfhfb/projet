var i=0;

setInterval(()=>{

    document.body.style.background="linear-gradient(135deg,white 0%, #555 "+i+"%, #333 100%)";
    document.body.style.backgroundRepeat="no-repeat";
    
     i++;
     
     
    if(i==100){
        
        i=0;      
               
    }
   
    
},50);
