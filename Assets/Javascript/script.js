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




// $("#currentDay").text(moment().format('ddd, MMM Do'));


// var currentTime = moment().format('H');
// console.log()


// const LS = JSON.parse(localStorage.scheduler || '{}'); 


// $(".textData").dblclick(function () {
//     $(this).addClass('d-none')
//     $(this).siblings("input").removeClass("d-none");
// });

// $(".btn").dblclick(function () {
//     console.log(this);
//     console.log($(this).attr("id"))
//     var id = $(this).attr("id")
//     var time = id.slice(0,3)
//     console.log(time)

//     var timeInputId = time + "Input"; 
// });


// var hourPast = hourPast < currentTime;
// var hourNow = currentTime;
// var hourFuture = hourFuture < currentTime;



// var hourNow = currentTime;
// console.log(hourNow)
// console.log(currentTime)
//     function backgroundColorEdit(){
//         if (hourNow == currentTime){
//             document.getElementsByClassName("backgroundTool").style.backgroundColor = "#ff0000";
//         }else if (hourNow < currentTime){
//             document.getElementsByClassName("backgroundTool").style.backgroundColor = "#d3d3d3";
//         }else 
//         {
//             document.getElementsByClassName("backgroundTool").style.backgroundColor = "#90ee90";
//         }
// }