var date = new Date();
    // displays the current day in the calendar
    $("#currentDay").text(moment().format("MMMM Do, YYYY"));
    

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