//add local time/ date
var today = moment();
setInterval(() => {
    var time= moment().format("MMM Do, YYYY HH:mm:ss ")
    $("#time").text(time)
    
}, 1000);
    


