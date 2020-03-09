
/* GET SPECIAL GREETIMGS MESSAGE BASED ON DATES */ 
const SPLGRT = () => {
    let date = new Date();
    let year = date.getFullYear();
    let day = date.getDate();
    let month = date.getMonth()+1;
    let message = '';
    
    if(month == 12) {
        if(day >= 24 && day <= 26){
            message = 'Merry Christmas!'
        } else if (day == 31){
            message = `Happy New Year ${year}!`
        }
    } else if (month == 1){
        if(day == 1){
            message = `Happy New Year ${year}!`
        }
    } else {
        message = '';
    }

    return message
}


/* GET DAILY GREETING BASED ON TIME */
const DAILYGRT = () => {
    var dailyGreeting = "Good Morning";
    let date = new Date();
    var hours = date.getHours();     
      
    if (hours > 12 && hours < 17) {
        dailyGreeting = "Good Afternoon";
    }
    else if (hours >= 17 && hours < 24){
        dailyGreeting = "Good Evening";
    }
    else {
        dailyGreeting = "Good Morning";
    }

    return dailyGreeting
}



export { DAILYGRT, SPLGRT };
