let test=document;
let sec=test.getElementById('sec')
let min=test.getElementById('bottom')
let hour=test.getElementById('left')
let dc=test.getElementById('digital')
setInterval(()=>{
    let date = new Date();
    let secToDeg=date.getSeconds()*6;
    sec.style.transform = `rotate(${secToDeg}deg)`;
    let secToMin=date.getMinutes()*6;
    min.style.transform = `rotate(${secToMin}deg)`;
    let hrToDeg=date.getHours()*30+secToMin/12;
    hour.style.transform=`rotate(${hrToDeg}deg)`
    let hr=date.getHours()
    if(hr>12){
        x=" PM"
       hr= hr-12;
    }
    else{
        x="AM"
        
    }
    dc.innerHTML =hr+":"+ date.getMinutes()+":"+date.getSeconds()+x
},1000)
