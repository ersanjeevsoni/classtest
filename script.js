const start=()=>{
  document.getElementById("model").style.display='block';
  document.getElementById('start_btn').style.display='none';
}

const bulbNmbr=()=>{
    const val=document.getElementById('number').value;
    document.getElementById("image-box").style.display='block';
  document.getElementById('model').style.display='none';

    for(i=0;i<val;i++){
        //create element
       const img=document.createElement("img");
       img.setAttribute('src','images/Light_Bulb_Off.png');

       //get parent element
       const divTag=document.getElementById("image-box");

       divTag.append(img);
     

       const btn=document.createElement("button");
       btn.style.backgroundColor='red';
       btn.style.border='none'
       divTag.append(btn);
         
    }
}

