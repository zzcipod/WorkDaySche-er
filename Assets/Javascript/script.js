let timeclock = function() {
    var time = moment().format('[It is currently ] dddd MM Do YYYY [ at ] hh:mm:ss a');
    document.querySelector('#currentDay').innerHTML = time;
}

timeclock()
setInterval(timeclock, 1000)

var saveButton=$(".saveBtn")

saveButton.on('click', function(){
    timePastfuture();
    console.log($(this).siblings(".description".val()))
}
)



