let players = [
    {
        name: 'kohli',
        imageSrc: './MI.jpg',
        skill: 'bat',
        credit: 10,
        team: 'rcb'
    },
    {
        name: 'dhoni',
        imageSrc: './MI.jpg',
        skill: 'wk',
        credit: 9,
        team: 'csk'
    },
    {
        name: 'chahal',
        imageSrc: './MI.jpg',
        skill: 'bowl',
        credit: 8.5,
        team: 'rcb'
    },
    {
        name: 'gale',
        imageSrc: './MI.jpg',
        skill: 'bat',
        credit: 8.5,
        team: 'KX11'
    },
    {
        name: 'ABD',
        imageSrc: './MI.jpg',
        skill: 'wk',
        credit: 9.5,
        team: 'rcb'
    },
    {
        name: 'morris',
        imageSrc: './MI.jpg',
        skill: 'bowl',
        credit: 9,
        team: 'rcb'
    },
    {
        name: 'sanju',
        imageSrc: './MI.jpg',
        skill: 'wk',
        credit: 9,
        team: 'rr'
    },
    {
        name: 'smith',
        imageSrc: './MI.jpg',
        skill: 'bat',
        credit: 9,
        team: 'rr'
    },
    {
        name: 'hardik',
        imageSrc: './MI.jpg',
        skill: 'ar',
        credit: 9.5,
        team: 'mi'
    },
    {
        name: 'jadeja',
        imageSrc: './MI.jpg',
        skill: 'ar',
        credit: 8.5,
        team: 'csk'
    },
    {
        name: 'bumrah',
        imageSrc: './MI.jpg',
        skill: 'bowl',
        credit: 9.5,
        team: 'mi'
    },
    {
        name: 'stokes',
        imageSrc: './MI.jpg',
        skill: 'bat',
        credit: 9.5,
        team: 'rr'
    },
    {
        name: 'rahul',
        imageSrc: './MI.jpg',
        skill: 'bat',
        credit: 9.5,
        team: 'KX11'
    }


];

const totalCredit = 100;
maxPlayers = 11;

//.......................................................

let myTeam = [];



let remainingCredit = totalCredit;
let usedCredit = 0;
let activeTab = 'wk';

let wkNo =0;
let batNo =0;
let bowlNo =0;
let arNo =0;

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
           
        <div class = "col-3"><button  class = " rounded-circle btn-xs btn-outline-danger " style = "font-weight:900;font-size:90%;" id = ${player.name} onClick ="removePlayer(event.srcElement.id)" ><h6></h6></button>
         </li></div></div></div>`;
        return playerhtml;


    }, '');

    playersElement = document.getElementById("myTeam");
    playersElement.innerHTML = playersList;
}
// initially setting players from both teams to left of the window
const setPlayers = () => {

    playersList = players.reduce((playerhtml, player) => {

        if(player.skill === activeTab){
            
            playerhtml += `<div class = "col-12 text-center shadow-lg  mb-1 bg-white rounded-pill  mx-auto" style = " border:1px solid orange; background-color:black; overflow:hidden;" >
            <div class = "row my-auto p-2" style = "background-color:black;">
            <div class = "col-4"style = "color:white;font-weight:500;text-transform:uppercase;font-size:.9em; " >
            <li >${player.name}</div>
            <div class = "col-2" style = "color:white;font-weight:500;text-transform:uppercase;font-size:.9em;">
                    <a>${player.credit}</a></div>
                    <div class = "col-3" style = "color:white;font-weight:500;text-transform:uppercase;font-size:.9em;">
                    <a>${player.team}</a></div>
                <div class = "col-1"> <button class = "rounded-circle   btn-xs pb-0 btn-outline-primary " style = "font-weight:900;font-size:95%;" id = ${player.name}  onClick ="addPlayer(event.srcElement.id)" ><h6></h6></button>
                    </li></div></div></div>`;

        }
        return playerhtml;
        

    }, '');

    playersElement = document.getElementById("players");
    playersElement.innerHTML = playersList;
}


//to add players to the right while clicking plus button
const addPlayer = (name) => {
    // console.log(name);
    newPlayer = players.find(player => player.name === name);
    playerNo = wkNo+batNo+arNo+bowlNo;

    const catogoryCheck =()=>{
        
        //add catagory limit here
        switch (newPlayer.skill) {
            case 'wk'  : return (wkNo < 4 ? true : false);
            case 'bat' : return (batNo <4 ? true : false);
            case 'ar'  : return (arNo <4 ? true : false);
            case 'bowl': return (bowlNo <4 ? true : false);
            default: alert('oops! something went wrong.');
        }
    }

    switch ( true){
        case ! (remainingCredit >= newPlayer.credit): alert('insufficient credits'); break;   //credit check
        case ! (playerNo+1  <= maxPlayers) : alert(`only ${maxPlayers} player can be selected`); break;   // max player check
        case !(catogoryCheck()): alert('Max players reached for this catogory'); break;  // cagogary limit check
        
        default:
            
            index = players.findIndex(player => player.name === name);
            switch (newPlayer.skill) {
                case 'wk'  : wkNo++ ; break;
                case 'bat' : batNo++ ; break;
                case 'ar'  : arNo++ ; break;
                case 'bowl': bowlNo++ ; break;
                default: alert('oops! something went wrong.');
            }
            //setting cap and vicecap

          

            switch (playerNo + 1){
                case 1 :newPlayer.isCap = true; newPlayer.isViceCap=false; break;
                case 2 :newPlayer.isCap = false; newPlayer.isViceCap=true; break;
                default:newPlayer.isCap = false; newPlayer.isViceCap= false;
            }

            myTeam.push(newPlayer);

            if (index > -1) {
                players.splice(index, 1);
            }

            setMyteam();
            setPlayers();
            useCredit(newPlayer);
            setProgressBar();
    }


}


//to remove players from the right by clicking minus button
const removePlayer = (name) => {
    // console.log(name);
    newPlayer = myTeam.find(player => player.name === name);
    index = myTeam.findIndex(player => player.name === name);
    switch (newPlayer.skill) {
        case 'wk'  : wkNo-- ; break;
        case 'bat' : batNo-- ; break;
        case 'ar'  : arNo-- ; break;
        case 'bowl': bowlNo-- ; break;
        default: alert('oops! something went wrong.');
    }

    //when cap or vice cap is suddenly removed
    switch (index){
        case 0 :if(myTeam[1]){myTeam[1].isCap = true; myTeam[1].isViceCap=false;}
                if(myTeam[2]){myTeam[2].isCap = false; myTeam[2].isViceCap=true;} break; //making vc => cap
        case 1 :if(myTeam[2]){myTeam[2].isCap = false; myTeam[2].isViceCap=true;} break; //making next => vicecap
    }
    players.push(newPlayer);
    if (index > -1) {
        myTeam.splice(index, 1);
    }
    setMyteam();
    setPlayers();
    getCredit(newPlayer);
    setProgressBar();
}

const useCredit = (player) => {
    remainingCredit -= player.credit;
    usedCredit += player.credit;
    updateCredit();
}
const getCredit = (player) => {
    remainingCredit += player.credit;
    usedCredit -= player.credit;
    updateCredit();
}

//updating credits
const updateCredit = () => {
    

    rCreditHtml = `<div class = "text-center"> <h6 style = "color:white;font-weight:600;" class = ""><p>Credits</p>: ${remainingCredit} <i class="fa fa-arrow-down" aria-hidden="true"></i></h6></div>`;
    uCreditHtml = `<div class = "text-center "><h6 style = "color:white; font-weight:600;" ><p>Credits</p>: ${usedCredit} <i class="fa fa-arrow-up" aria-hidden="true"></i></h6></div>`;

    rCreditElement = document.getElementById("remainingCredit");
    rCreditElement.innerHTML = rCreditHtml;

    uCreditElement = document.getElementById("usedCredit");
    uCreditElement.innerHTML = uCreditHtml;
}

//change tab

const tabChange =(event)=>{
    activeTab = event.srcElement.id;
    // console.log(activeTab);
    setPlayers();

}

//progress bar
const setProgressBar =()=>{
    playerNo = batNo+wkNo+arNo+bowlNo;
    progressBar = document.getElementById("progressBar");
    progressBar.style.width = (playerNo/maxPlayers)*100 + "%";
    progressBar.innerHTML = `${playerNo}/${maxPlayers}`.fontsize(2);

}

//initial setting
setMyteam();
setPlayers();
updateCredit();
setProgressBar();

const play=()=>{
    sessionStorage.setItem('myTeam', myTeam);
}



//*****header script by aromal******\\
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