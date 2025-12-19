
function updateClock() {   

    const now = new Date();
    console.log(now)
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros for single-digit numbers
 
      hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Display time inside the .time div 
    //agr hume kisi box ke andar koi text likhna padta hai toh vo Hum document.query selector ke andar likh dete hai

    const timeDiv = document.querySelector(".time");
    timeDiv.textContent = `Current time is ${hours}:${minutes}:${seconds}`;
    timeDiv.textContent = `date is: ${now}`
}     
//textContent is used to get or set the text inside an HTML element
 
// Update every second
setInterval(updateClock, 1000);              
updateClock(); // call immediately on page load   
