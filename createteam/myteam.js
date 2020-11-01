let myTeam =  JSON.parse(localStorage.getItem('myTeam'));
console.log(myTeam);
alert('working')



// setting my team to the right of the window
const setMyteam = () => {

    
    playersList = myTeam.reduce((playerhtml, player) => {

        if(player.isCap){
            badge = '(C)';
        }else if (player.isViceCap){
            badge = '(VC)';
        }else badge = '';


        // console.log(player.skill)

        
        playerhtml += `<div class = "col-12 text-center shadow-lg  mb-1 bg-white rounded-pill mx-auto" style = " border:1px solid orange;overflow:hidden;" >
        <div class = "row my-auto p-2" style = "background-color:black; color:white;">
        <div class = "col-3" style = "font-weight:500;text-transform:uppercase;font-size:.9em;">
         <img class = "img-responsive img-fluid rounded-circle img-thumbnail " style="height:25px ; width:25px " src=${player.imageSrc}></div>
        <div class = "col-3" style = "font-weight:500;text-transform:uppercase;font-size:.9em;">
        <li>${player.name}${badge}</div>
         
        <div class = "col-3"style = "font-weight:500;text-transform:uppercase;font-size:.9em;">
        <a>${player.team}</a></div>
           
        <div class = "col-3">
         </li></div></div></div>`;
        return playerhtml;


    }, '');

    playersElement = document.getElementById("myTeam");
    playersElement.innerHTML = playersList;
}

setMyteam();



function revealMessage(){

    document.getElementById('lol').style.display='block';

}

function countFunc(){
    var cur_val=document.getElementById('count').innerHTML;
    var newVal=cur_val-1;

    document.getElementById('count').innerHTML=newVal;
}

function glowLeave(parent){


       parent.style.border= "10px solid #495057";

}

function glowEnter(parent){

        parent.style.border= "10px solid #e63946";

}

function glowEnter3(parent){

    parent.style.border= "10px solid blue";

}
//extra added by luhta
function glowEnter2(parent){

    parent.style.border= ".25vmin solid orange";

}
function glowLeave2(parent){


    parent.style.border= ".25vmin solid #495057";

}

function glowEnter3(parent){

    parent.style.border= ".25vmin solid orange";

}
function glowLeave3(parent){


    parent.style.border= ".25vmin solid #495057";

}