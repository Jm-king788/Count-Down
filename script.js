const p =  prompt("Enter The End Date  same as given" ,"16 February 2023 11:00 AM" );
const endDate = p;
console.log(p);
document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")


 const clock = () =>{
    const end = new Date(endDate)
    const now = new Date()
     const diff = (end - now) /1000 ;
   if (diff < 0){
        return
    
     }; 
     // seconds to days

    inputs[0].value = Math.floor(diff/3600/24);

    // hours

    inputs[1].value = Math.floor(diff / 3600) % 24;

    // minutes
   inputs[2].value =  Math.floor(diff / 60) % 60;
   
   // seconds
   inputs[3].value = Math.floor(diff) % 60;
}
 clock()

/*
 1 day = 24 hrs
 1 hour = 60 mins
 60 min = 3600 sec

*/

// set interval


setInterval(
    () =>{
        clock()
    },
    1000
)
