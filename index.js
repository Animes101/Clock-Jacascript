//Clock Functionality

var  headingShow=document.querySelectorAll('h1');
var fullYear=document.querySelector('p');

function showTime(){

    var date=new Date();
    var day=date.getDay();
    var hours=date.getHours();
    var minutes=date.getMinutes();
    var second=date.getSeconds();
    var year=date.getFullYear()

    headingShow[0].innerText=day;
    headingShow[1].innerText=hours;
    headingShow[2].innerText=minutes;
    fullYear.innerText=year;
    if(second<=10){
        headingShow[3].innerHTML=`0`+second;
    }else{
        headingShow[3].innerHTML=second;
    }

}


//Update Time

setInterval(() => {
    showTime()
}, 1000);


//wellocme message
 var message=document.querySelector('.well-message');

setTimeout(() => {
    message.classList.add('hidden')
    
}, 2000);
