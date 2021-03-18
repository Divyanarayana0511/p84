
canvas=document.getElementById("cargame");
ctx=canvas.getContext("2d");
var car1_x,car1_y,car1Height,car1Width,car2_x,car2_y,car2Height,car2Width,car1Image,car2Image;
car1_x=400;
car1_y=600;
car2_x=600;
car2_y=600;
car1Height=140;
car2Height=140;
car1Width=120;
car2Width=120;
car1Image="car1.png";
car2Image="car2.png";
backgroundimage="racetrack.png ";

    
    background_imgTag= new Image();
    
    background_imgTag.src=backgroundimage;
    background_imgTag.onload= uploadbackground;
    console.log("setting background pic");

    car1_imgTag= new Image();
    
    car1_imgTag.src=car1Image;
    car1_imgTag.onload = uploadcar1image;
    console.log("setting car1 pic");

    car2_imgTag= new Image();
    
    car2_imgTag.src=car2Image;
    car2_imgTag.onload= uploadcar2image;
    console.log("setting car2 pic");
    


function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadcar1image(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1Width,car1Height);
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2Width,car2Height);
}


function uploadcar2image(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2Width,car2Height);
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1Width,car1Height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keypressed=e.keyCode;

    console.log(keypressed);
   

    if(keypressed=='37'){
        car1left();
        console.log("left arrow key pressed");
    }
    if(keypressed=='38'){
        car1up();
        console.log("up arrow key pressed");
    }
    if(keypressed=='39'){
        car1right();
        console.log("Right arrow key pressed");
    }
    if(keypressed=='40'){
        car1down();
        console.log("Down arrow key pressed");
    }

    if(keypressed=='65'){
        car2left();
        console.log("A key pressed");
    }
    if(keypressed=='87'){
        car2up();
        console.log("W key pressed");
    }
    if(keypressed=='68'){
        car2right();
        console.log("D key pressed");
    }
    if(keypressed=='83'){
        car2down();
        console.log("S key pressed");
    }
    if(car1_y==0 && car2_y>car1_y){
        document.getElementById("status").innerHTML="Blue car wins";
        document.getElementById("status").style.color="red";
    } else if (car2_y==0 && car1_y>car2_y){
        document.getElementById("status").innerHTML="Yellow car wins";
        document.getElementById("status").style.color="red";
    }
   
}
function car1up(){
    if(car1_y>0){
    car1_y=car1_y-10;

    uploadcar1image();
    }
}

function car2up(){
    if(car2_y>0){
    car2_y=car2_y-10;
    uploadcar2image();
    }
}
function car1down(){
    if(car1_y<=(canvas.height-120)){
    car1_y=car1_y+10;
    uploadcar1image();
    }
}
function car2down(){
    if(car2_y<=(canvas.height-120)){
    car2_y=car2_y+10;
    uploadcar2image();
    }
}

function car1left(){
    if(car1_x>0){
    car1_x=car1_x-10;
    uploadcar1image();
    }
}
function car2left(){
    if(car2_x>0){
    car2_x=car2_x-10;
    uploadcar2image();
    }
}
function car1right(){
    if(car1_x<(canvas.width-120)){
         car1_x=car1_x+10;
        uploadcar1image();
    }
}
function car2right(){
    if(car2_x<(canvas.width-120)){
    car2_x=car2_x+10;
    uploadcar2image();
    }
}
