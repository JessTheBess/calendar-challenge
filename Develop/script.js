$(document).ready(function () {
    // displays the current day in the calendar
    $("#currentDay").text(moment().format("MMMM Do, YYYY"));
    $(".saveBtn").on("click", function () {
        
        console.log(this);
        var text = $(this).siblings(".desc").val();
        var time = $(this).parent().attr("id");

        
        localStorage.setItem(time, text);
    }) 
    // displays the current live time on the page
    function currentTime() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

        hh = (hh < 10) ? "0" + hh : hh;
        mm = (mm < 10) ? "0" + mm : mm;
        ss = (ss < 10) ? "0" + ss : ss;
        
        let time = hh + ":" + mm + ":" + ss + " ";
    
    document.getElementById("newTime").innerText = time;
    let t = setTimeout(function(){ currentTime() }, 1000);
    }
    
    currentTime();

$("#hour9 .desc").val(localStorage.getItem("hour9"));
$("#hour10 .desc").val(localStorage.getItem("hour10"));
$("#hour11 .desc").val(localStorage.getItem("hour11"));
$("#hour12 .desc").val(localStorage.getItem("hour12"));
$("#hour13 .desc").val(localStorage.getItem("hour13"));
$("#hour14 .desc").val(localStorage.getItem("hour14"));
$("#hour15 .desc").val(localStorage.getItem("hour15"));
$("#hour16 .desc").val(localStorage.getItem("hour16"));
$("#hour17 .desc").val(localStorage.getItem("hour17"));

    function hourTracker() {
        
        var currentHour = moment().hour();

        $(".timeblocks").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})