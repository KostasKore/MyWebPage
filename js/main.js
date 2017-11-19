window.onload=A;

var images=[];
    images[0]='assets/me/1.jpg';
    images[1]='assets/me/2.jpg';
    images[2]='assets/me/3.jpg';
    images[3]='assets/me/4.jpg';
    images[4]='assets/me/5.jpg';
    images[5]='assets/me/6.jpg';
    images[6]='assets/me/7.jpg';

var pic = document.getElementById('photo');
var counter = 0;

function A(){
  if (counter==6){counter=0}

  pic.src=images[counter];
  counter=counter+1;
  setTimeout("A()", 3000);
}
