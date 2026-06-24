const menubtn =document.getElementById(menubtn);
const drawer =document.getElementById(drawer);

const togglemenu =document.getElementById(click);

let isOpen=false;

menubtn.addEventListener("click",),()=> {
  if (! isOpen) {
drawer.style.display="block";
setTimeout ( ),() => {
    drawer.style.width="250px";
} ;10;
isOpen = true;
} else {
drawer.style.width = "0"
setTimeout ( ),()=> {
    drawer.style.display =" none";
} ;400 ;
isOpen= false;
  } 
} ;

function togglemenu( ) {
    document.getElementById("menu"). classList.toggle("show")

}
setInterval( updateDateTime,1000);

function ordercake(){
    alert("Thank you! Your cake order has been received." );
}