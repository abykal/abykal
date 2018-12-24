
document.addEventListener("DOMContentLoaded", function(event) {
    var body = document.getElementsByTagName('body')[0];
    var message = document.getElementById("message")
  
  

    var date = new Date(),
    day = date.getDate(),
    month = date.getMonth()+1;

    if(month == 12) {
        if(day >= 24 && day <= 26){
            if (body.classList.contains('std-text-bg')) {
                body.classList.remove('std-text-bg');
                body.classList.add('xmas-text-bg');
                message.style.fontSize = '30px';
                message.innerHTML = 'Merry Christmas';

            }
        } else if (day == 31){
            if (body.classList.contains('std-text-bg')) {
                body.classList.remove('std-text-bg');
                body.classList.add('newyr-text-bg');
                message.style.fontSize = '25px';
                message.innerHTML = 'Happy New Year';
            }
        }
    
    } else if (month == 1){
        if(day == 1){
            if (body.classList.contains('std-text-bg')) {
                body.classList.remove('std-text-bg');
                body.classList.add('newyr-text-bg');
                message.style.fontSize = '25px';
                message.innerHTML = 'Happy New Year';
            }
        }
    }

});
