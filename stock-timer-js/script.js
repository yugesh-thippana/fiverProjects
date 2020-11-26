let marketPosition = document.querySelector(".market-position");
let minute_position_15 = document.querySelector(".minute-position-15");
let minute_position_30 = document.querySelector(".minute-position-30");
let minute_position_60 = document.querySelector(".minute-position-60");
let line_bar_blue1 = document.querySelector(".line-bar-blue1");
let line_bar_blue2 = document.querySelector(".line-bar-blue2");
let line_bar_blue3 = document.querySelector(".line-bar-blue3");
let line_bar_blue4 = document.querySelector(".line-bar-blue4");
let date = new Date();

setInterval(() => {
    date = new Date();
    let hours = date.getHours() ;
    let minutes = date.getMinutes() ;
    let seconds = date.getSeconds();

        if((hours >= 0 && hours <8) || (hours == 8 && minutes <55)){
            // console.log("hi")
            line_bar_blue1.style.width = "0px";
            line_bar_blue2.style.width = "0px";
            line_bar_blue3.style.width = "0px";
            line_bar_blue4.style.width = "0px";
            marketPosition.innerHTML = `market closed. opens in ${8-hours} hours.`;
            minute_position_15.innerHTML = " ";
            minute_position_30.innerHTML = " ";
            minute_position_60.innerHTML = " ";
        }
        if((hours >=8 && hours < 16) || (hours == 16 && minutes < 30)){
            if(hours >8){
                if(hours == 16)
                    marketPosition.innerHTML = "market is open. closes in less than 30 minutes";
                else
                    marketPosition.innerHTML = `market is open.closes in ${17-hours} hours`;
                line_bar_blue1.style.width = 100- parseInt(getComputedStyle(line_bar_blue1).maxWidth)*(hours-8)/8.5 + "%";
            }

            // for 15 minute block.
            if(minutes <15)
                {minute_position_15.innerHTML = `${15-minutes} minutes left - ${hours}:00 to ${hours}:15`;
                    line_bar_blue2.style.width = 100- parseInt(getComputedStyle(line_bar_blue2).maxWidth)*(15-minutes)/15 + "%";}
            if(minutes >=15 && minutes <30){
                minute_position_15.innerHTML = `${30-minutes} minutes left - ${hours}:15 to ${hours}:30`;
                    line_bar_blue2.style.width = 100- parseInt(getComputedStyle(line_bar_blue2).maxWidth)*(30-minutes)/15 + "%";}
            if(minutes >=30 && minutes <45){
                minute_position_15.innerHTML = `${45-minutes} minutes left - ${hours}:30 to ${hours}:45`;
                line_bar_blue2.style.width = 100- parseInt(getComputedStyle(line_bar_blue2).maxWidth)*(45-minutes)/15 + "%";}
            if(minutes <60 && minutes >= 45){
                minute_position_15.innerHTML = `${60-minutes} minutes left - ${hours}:45 to ${hours+1}:00`;
                line_bar_blue2.style.width = 100- parseInt(getComputedStyle(line_bar_blue2).maxWidth)*(60-minutes)/15 + "%";}

            // for 30 minutes block
            if(minutes <30)
            {minute_position_30.innerHTML = `${30-minutes} minutes left - ${hours}:00 to ${hours}:30`;
                line_bar_blue3.style.width = 100- parseInt(getComputedStyle(line_bar_blue3).maxWidth)*(30-minutes)/30 + "%";}
            if(minutes >=30)
            {minute_position_30.innerHTML = `${60-minutes} minutes left - ${hours}:30 to ${hours+1}:00`;
                line_bar_blue3.style.width = 100- parseInt(getComputedStyle(line_bar_blue3).maxWidth)*(60-minutes)/30 + "%";}

            // for 60 minutes block
            minute_position_60.innerHTML = `${60-minutes} minutes left - ${hours}:00 to ${hours+1}:00`;
            line_bar_blue4.style.width = 100- parseInt(getComputedStyle(line_bar_blue4).maxWidth)*(60-minutes)/60 + "%";


            // start alerts.
            if(hours == 7 && minutes == 55){
                marketPosition.innerHTML = `market opens in 5 mins`;
                if(true1) twice(MarketOpensin5Min);
            }
            if(hours == 7 && minutes == 59){
                marketPosition.innerHTML = "market opens in 1 min.";
                if(true1) twice(MarketOpensin1Min);
            }
            if(hours == 8 && minutes == 0 && seconds == 0){
                if(true1)  marketIsOpen.play();
            }
            if((minutes == 15 || minutes == 45 ) && seconds == 0){
                if(true2)  NewFifteenMinute.play()
            }
            if((minutes == 25 || minutes == 40 || minutes == 55 || minutes == 10 ) && seconds == 0){
                if(true2)  twice(flipsIn5Minutes);
            }
            if((minutes == 29 || minutes == 44 || minutes == 59 || minutes == 14  ) && seconds == 0){
                if(true2)  twice(flipsIn1Minute);
            }
            if((minutes == 30 ) && seconds == 0){
                if(true3)  New_Thirty_Minute.play();
            }
            if((minutes == 60 ) && seconds == 0){
                if(true4)  New_Sixty_Minute.play();
            }
            if((hours == 16 && minutes == 25 ) && seconds == 0){
                if(true1)  twice(Market_closes_in_5_minutes);
            }
            if((hours == 16 && minutes == 29 ) && seconds == 0){
                if(true1)  twice(Market_closes_in_1_minute);
            }
        }
        if((hours == 16 && minutes == 30 ) && seconds == 0){
            marketClosed.play();
        }
        if(hours >16 || (hours ==16 && minutes >30)) {
            marketPosition.innerHTML = `market is closed. opens in ${24-hours+8} hours.`
            line_bar_blue1.style.width = "100%";
            line_bar_blue2.style.width = "100%";
            line_bar_blue3.style.width = "100%";
            line_bar_blue4.style.width = "100%";
        }

}, 1000);


// test buttons 
let test1 = document.querySelector(".test1");
let test2 = document.querySelector(".test2");
let test3 = document.querySelector(".test3");
let test4 = document.querySelector(".test4");

test1.addEventListener("click" , ()=>{
    marketIsOpen.play();
});
test2.addEventListener("click" , ()=>{
    NewFifteenMinute.play();
});
test3.addEventListener("click" , ()=>{
    New_Thirty_Minute.play();
});
test4.addEventListener("click" , ()=>{
    New_Sixty_Minute.play();

});


// repeat twice function
function twice(file){
    file.play();
    setTimeout(()=>{
        if(file.paused){
            file.play();
        }
    },1500)
}



// check boxes event listeners.
let true1 = true; let true2 = true; let true3 = true; let true4 = true;
let check1 = document.getElementById("enabled1");
let check2 = document.getElementById("enabled2");
let check3 = document.getElementById("enabled3");
let check4 = document.getElementById("enabled4");

check1.addEventListener("change", ()=> {
    true1 = !true1;
    console.log(true1);
})
check2.addEventListener("change", ()=> {
    true2 = !true2;
    console.log(true1);
})
check3.addEventListener("change", ()=> {
    true3 = !true3;
    console.log(true1);
})
check4.addEventListener("change", ()=> {
    true4 = !true4;
    console.log(true1);
})




// audio files
let marketIsOpen = new Audio("./audio/MarketisOpen.mp3");
let flipsIn5Minutes = new Audio("./audio/flips-in-5-minutes.mp3");
let flipsIn1Minute = new Audio("./audio/Flips_in_1_minute.mp3");
let marketClosed = new Audio("./audio/Market_closed.mp3");
let Market_closes_in_1_minute = new Audio("./audio/Market_closes_in_1_minute.mp3");
let Market_closes_in_5_minutes = new Audio("./audio/Market_closes_in_5_minutes.mp3");
let MarketOpensin1Min = new Audio("./audio/MarketOpensin1Min.mp3");
let MarketOpensin5Min = new Audio("./audio/MarketOpensin5Mins.mp3");
let New_Sixty_Minute = new Audio("./audio/New_Sixty_Minute.mp3");
let New_Thirty_Minute = new Audio("./audio/New_Thirty_Minute.mp3");
let NewFifteenMinute = new Audio("./audio/NewFifteenMinute.mp3");


// inital code for setInterval. Dont bother with this.
