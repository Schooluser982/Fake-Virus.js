javascript:(function(){
  document.body.innerHTML='<div style="font-size:40px;line-height:1.2;text-align:center;">'+('🍌 '.repeat(10000))+'</div>';
  document.body.style.backgroundColor='red';

  // Background color cycle
  setInterval(function(){
    var c=document.body.style.backgroundColor;
    c=c=='red'?'orange':c=='orange'?'yellow':c=='yellow'?'green':c=='green'?'blue':c=='blue'?'purple':c=='purple'?'red':'red';
    document.body.style.backgroundColor=c;
  },100);

  // Banner bounce
  var banner=document.createElement('div');
  banner.innerText='WELCOME TO AMONGUS/BANNANALAND!!';
  banner.style.position='fixed';
  banner.style.top='50px';
  banner.style.left='50px';
  banner.style.padding='20px';
  banner.style.background='black';
  banner.style.color='white';
  banner.style.fontSize='24px';
  banner.style.zIndex='9999';
  document.body.appendChild(banner);
  var dx=3,dy=3;
  setInterval(function(){
    var x=banner.offsetLeft+dx,y=banner.offsetTop+dy;
    if(x+banner.offsetWid...9999;left:'+(Math.random()*window.innerWidth)+'px;top:'+(Math.random()*window.innerHeight)+'px;';
    document.body.appendChild(amogus);
    let dir=1;
    setInterval(function(){
      let left=parseFloat(amogus.style.left);
      amogus.style.left=(left+(dir*5))+'px';
      dir*=-1;
    },200);
  }
  for(let i=0;i<30;i++) spawnAmogus();

  // Laser beams
  function fireLaser(){
    let laser=document.createElement('div');
    laser.style.cssText='position:fixed;height:4px;width:100vw;top:'+(Math.random()*window.innerHeight)+'px;background:lime;z-index:99999;box-shadow:0 0 20px lime;';
    document.body.appendChild(laser);
    setTimeout(()=>laser.remove(),500);
  }
  setInterval(fireLaser,300);

  // Screen shake
  setInterval(function(){
    document.body.style.transition='transform 0.1s';
    document.body.style.transform='translate('+(Math.random()*20-10)+'px,'+(Math.random()*20-10)+'px)';
    setTimeout(()=>{document.body.style.transform='translate(0,0)'},100);
  },200);

})();
