

//add local time/ date

var today = moment()
setInterval(() => {
    var time= moment().format("MMM Do, YYYY HH:mm:ss ")
    $("#time").text(time)
    
    }, 1000)

// change row colors.run a loop thru the today function, and everytime the time changes change  the color of the row using the ID"ROW" TO CHANGE THE TABLE ACTIVE CLASS. WITH AND IF STATEMENT. 



var hour= moment().format()




$('tr.table-active').each(function(){
    var data = $(this).find('th').html()
    var dataNumber = parseInt(data)
    var hour = moment().format('HH')
    var hourNumber = parseInt(hour)

    if(hourNumber > dataNumber){
        $(this).css("background", "red")
    }
    else
    $(this).css("background", "green")
    
    
})

// add to localstorage
function save(text){
    localStorage.setItem(text.id, text.value)
}

// retrieve from localstorage. need different for loop  in the localstorage
for( var key in localStorage){
    var htmlelement= document.getElementById(key)
    htmlelement.value= localStorage.getItem(key)

}



 



    
    


 
