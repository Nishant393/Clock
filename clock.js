
function myFunction() {
  let aTag = document.getElementsByClassName("nav-link");
  console.log(aTag[0])
    if ( brightnessfill.style.display === ""  ) {
    main.style.backgroundImage="radial-gradient( ellipse at top left, rgba(16, 209, 223, 0.705), transparent 20%),radial-gradient( ellipse at top right, rgb(240, 177, 5), transparent 30%),radial-gradient( ellipse at center right, rgba(246, 6, 250, 0.493), transparent 50%),radial-gradient( ellipse at center left, rgb(233, 127, 235), transparent 50%),linear-gradient(180deg,rgb(241, 252, 252) 10%,rgba(241, 247, 250, 0.918) 100%)";
    aTag[0].style.color="#000"; 
    aTag[1].style.color="#000"; 
    aTag[2].style.color="#000"; 
    aTag[3].style.color="#000"; 
    aTag[4].style.color="#000"; 
    brightnesshigh.style.display = "none"
    brightnessfill.style.display = "flex"
  } 
  else {
    main.style.backgroundImage="radial-gradient( ellipse at top left, rgb(6, 27, 97), transparent 80%),radial-gradient( ellipse at top right, rgb(240, 177, 5), transparent 50%),radial-gradient( ellipse at center right, rgb(235, 188, 236), transparent 50%),radial-gradient( ellipse at center left, rgb(235, 188, 236), transparent 50%),linear-gradient(180deg,rgb(111, 179, 179) 10%,rgba(1, 13, 19, 0.918) 100%)"
    aTag[0].style.color="white"; 
    aTag[1].style.color="white"; 
    aTag[2].style.color="white"; 
    aTag[3].style.color="white"; 
    aTag[4].style.color="white";  
    brightnesshigh.style.display = "flex"
    brightnessfill.style.display = "none"

  }
}
// date time

  setInterval(()=>{
    // India date time
    const months = ["Jan","feb","March","April","May","Jun","July","Augst","sept","oct","Nov","Dec"]
    var todayIndiaTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
    seconds.innerHTML = new Date(todayIndiaTime).getSeconds();
    min.innerHTML = new Date(todayIndiaTime).getMinutes();
    if(new Date(todayIndiaTime).getHours()<12){label.innerHTML="am";}
    else{label.innerHTML="pm";}
    if(new Date(todayIndiaTime).getHours()%12 === 0){hour.innerHTML="01"}
    else{hour.innerHTML = new Date(todayIndiaTime).getHours()%12;}                
  
  // Aerica date time     
  
  var todayAmericaTime = new Date().toLocaleString("en-US", {timeZone: "America/LOS_Angeles"});
  let America_month = document.getElementsByClassName("America-month")
  America_month[0].innerHTML=months[new Date(todayAmericaTime).getMonth()]
  let America_date = document.getElementsByClassName("America-date")
  America_date[0].innerHTML= new Date(todayAmericaTime).getDate()
  let America_hour = document.getElementsByClassName("America-hour")
  America_hour[0].innerHTML= new Date(todayAmericaTime).getHours()
  let America_min = document.getElementsByClassName("America-min")
  America_min[0].innerHTML= new Date(todayAmericaTime).getMinutes()
  let America_am = document.getElementsByClassName("America-am")

  if(new Date(todayAmericaTime).getHours()<12){America_am[0].innerHTML="am";}
  else{America_am[0].innerHTML="pm";}
  if(new Date(todayAmericaTime).getHours()%12 === 0){hour.innerHTML="01"}
  else{hour.innerHTML = new Date(todayIndiaTime).getHours()%12;}       
  
  // London date time
  
  var todayLondonTime = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
  let London_month = document.getElementsByClassName("London-month")
  London_month[0].innerHTML=months[new Date(todayLondonTime).getMonth()]
  let London_date = document.getElementsByClassName("London-date")
  London_date[0].innerHTML= new Date(todayLondonTime).getDate()
  let London_hour = document.getElementsByClassName("London-hour")
  London_hour[0].innerHTML= new Date(todayLondonTime).getHours()
  let London_min = document.getElementsByClassName("London-min")
  London_min[0].innerHTML= new Date(todayLondonTime).getMinutes()
  let London_am = document.getElementsByClassName("London-am")
  
  if(new Date(todayLondonTime).getHours()<12){London_am[0].innerHTML="am";}
  else{London_am[0].innerHTML="pm";}
  if(new Date(todayLondonTime).getHours()%12 === 0){hour.innerHTML="01"}
  else{hour.innerHTML = new Date(todayIndiaTime).getHours()%12;}      

  },1000)