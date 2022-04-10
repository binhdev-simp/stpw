const timeViewer= document.getElementById('timeViewer');
var sec = 0;
var min = 0;
var hr = 0;

var secView;
var minView;
var hrView;
timeViewer.innerHTML="0"+ hr +":" + "0" + min + ":" + "0" + sec;
function start() {
  var i = setInterval(function() {
      sec++;
      if (sec>=60) {min++; sec=0}
      if (min>=60) {hr++,min=0}  
      if (sec<10) {secView="0"+sec}  
      if (min<10) {minView="0"+min}  
      if (hr<10) {hrView="0"+hr}  
      if (hr>=10) {hrView=hr}
      if (min>=10) {minView=min}

      if (sec>=10) {secView=sec}


    timeViewer.innerHTML=hrView +":" + minView + ":" + secView;

  }, 1000);
  const stopbtn= document.getElementById('button-stop');
  stopbtn.onclick = function(){
    clearInterval(i);
  }
}