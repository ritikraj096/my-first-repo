
let clock = setInterval(myTimer, 1000);


function myTimer()
{

    d = new Date();
    hr = d.getHours();
    mn = d.getMinutes();
    sc = d.getSeconds();

    var ampm = (hr >= 12) ? "PM" : "AM";
    hr = hr % 12;
    hr = hr ? hr : 12;
    mn = mn < 10 ? "0" + mn : mn;
    dtime = hr + ":" + mn + " " + ampm;

    hrotation = (30 * hr) + (mn / 2);
    mrotation = 6 * mn;
    srotation = 6 * sc;

    hours.style.transform = `rotate(${hrotation}deg)`;
    minutes.style.transform = `rotate(${mrotation}deg)`;
    seconds.style.transform = `rotate(${srotation}deg)`;


    document.getElementById("dgtime").innerHTML = dtime;
    
    
}



let toda = new Date();
let dt = toda.getDate();
let mnt = toda.getMonth();
let yr = toda.getFullYear();
let dy = toda.getDay();

const fday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const fmnth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", 
"Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

let fullDate = dt +"-"+ fmnth[mnt]+"-" + yr + ", "+fday[dy]; 

document.getElementById("digital").innerHTML = fullDate;
