function caricaAlbum(){
  let scelta=document.album.scegliCibo.value;
  img1="";
  img2="";
  img3="";
  if(scelta=="nessuna"){
    img1="<a href='images/default.jpg' target='_blank'><img src='images/default.jpg'> </a>";
    img2="<a href='images/default.jpg' target='_blank'><img src='images/default.jpg'> </a>";
    img3="<a href='images/default.jpg' target='_blank'><img src='images/default.jpg'> </a>";
  }
   if(scelta==1){
    img1="<a href='images/pizza1.jpg' target='_blank'><img src='images/pizza1.jpg'> </a>";
    img2="<a href='images/pizza2.jpg' target='_blank'><img src='images/pizza2.jpg'> </a>";
    img3="<a href='images/pizza3.jpg' target='_blank'><img src='images/pizza3.jpg'> </a>";
   }
   if(scelta==2){
    img1="<a href='images/verdure1.jpg' target='_blank'><img src='images/verdure1.jpg'> </a>";
    img2="<a href='images/verdure2.jpg' target='_blank'><img src='images/verdure2.jpg'> </a>";
    img3="<a href='images/verdure3.jpg' target='_blank'><img src='images/verdure3.jpg'> </a>";
   }
   if(scelta==3){
    img1="<a href='images/hamburger1.jpg' target='_blank'><img src='images/hamburger1.jpg'> </a>";
    img2="<a href='images/hamburger2.jpg' target='_blank'><img src='images/hamburger2.jpg'> </a>";
    img3="<a href='images/hamburger3.jpg' target='_blank'><img src='images/hamburger3.jpg'> </a>";
   }

   document.getElementById("i1").innerHTML=img1;
   document.getElementById("i2").innerHTML=img2;
   document.getElementById("i3").innerHTML=img3;
   return false;
}