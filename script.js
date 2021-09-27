var row = document.getElementById("#row")
 





//add local time/ date

var today = moment()
setInterval(() => {
    var time= moment().format("MMM Do, YYYY HH:mm:ss ")
    $("#time").text(time)
    
}, 1000)

// add to localstorage
function save(text){
    localStorage.setItem(text.id, text.value)
}

// retrieve from localstorage
for( var key in localStorage){
    var htmlelement= document.getElementById(key)
    htmlelement.value= localStorage.getItem(key)

}



 

// function colorchange(){
//     for( i=0; i<moment.lenght)
//     if (row === moment()){
//         $(row).css('color','white')
//         console.log('fsadfsa')
//     }
//     else if ( row <= moment()){
//         $(row.css('color','red'))
//     }
//     else{ $(row).css('color','green')}
// }


    
    


 
