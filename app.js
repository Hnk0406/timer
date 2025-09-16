const ringer=document.getElementById("end");
const sound = document.getElementById("bgm");
const startBtn = document.querySelector('.start'); 
const session = document.querySelector('.min'); 
const sec = document.querySelector('.sec'); 
const button=document.getElementById("button");
let myInterval=null; 
let state = true;
let totalSeconds;
const appTimer = () =>
{
  const sessionAmount = Number.parseInt(session.textContent)
  const secamt=Number.parseInt(sec.textContent)
  if(state) {
      state = false;
      button.textContent="STOP";
      totalSeconds = (sessionAmount * 60)+secamt;
      const updateSeconds = () =>
      {

      totalSeconds--;
      let minutesLeft
      if(totalSeconds>=60){
      minutesLeft = Math.floor(totalSeconds/60);
      }
      else {minutesLeft=0}
      let secondsLeft = totalSeconds % 60;
      if(secondsLeft < 10)
          {
          sec.textContent = '0' + secondsLeft;
          } 
      else{
          sec.textContent = secondsLeft;
          }
      
    session.textContent = `${minutesLeft}`

    if(minutesLeft === 0 && secondsLeft === 0)
      { sound.pause();
        sound.currentTime = 0;
        ringer.play();
      clearInterval(myInterval);
      session.textContent='1';
      sec.textContent='00';
      }
    else{
        sound.play();
      }
    }
    myInterval = setInterval(updateSeconds, 1000);
  } 

else{
  state=true;
  button.textContent="start"
  clearInterval(myInterval);
  myInterval=null;
  sound.pause();
  sound.currentTime = 0;

  
}
}
startBtn.addEventListener('click', appTimer);
