// var row = document.getElementById("#row")
// var timecolor= document.getElementsByClassName(".table-active")
 
//add local time/ date

var today = moment()
setInterval(() => {
    var time= moment().format("MMM Do, YYYY HH:mm:ss ")
    $("#time").text(time)
    var timestring= '6:53:00'
    if (timestring === moment() ){
        $('.tablea-active').css('color','white')
    } 
    
}, 1000)

// change row colors.run a loop thru the today function, and everytime the time changes change  the color of the row using the ID"ROW" TO CHANGE THE TABLE ACTIVE CLASS. WITH AND IF STATEMENT. 

// function color(){
//     var timestring= '9:00:00'
//     if (timestring === moment() ){
//         $('.tablea-active').css('color','white')
//     } 
//     else if( timestring >= moment()){
//        $('.table-active').css('color','green')
        
//     }
//     else if( timestring <= moment()){
//         $('.table-active').css('color','red')
//     }
    
    
// }

// add to localstorage
function save(text){
    localStorage.setItem(text.id, text.value)
}

// retrieve from localstorage. need different for loop  in the localstorage
for( var key in localStorage){
    var htmlelement= document.getElementById(key)
    htmlelement.value= localStorage.getItem(key)

}



 



    
    


 
