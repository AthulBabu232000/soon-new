let toppers = [
    {
        name: 'why so sad',
        imageSrc: './MI.jpg',
        pos: 1,
        score: 10,

    },
    {
        name: 'Bahubali',
        imageSrc: './MI.jpg',
        pos: 2,
        score: 10,

    },
    {
        name: 'Devasena',
        imageSrc: './MI.jpg',
        pos: 3,
        score: 10,

    },
    {
        name: 'Kattappa',
        imageSrc: '',
        pos: 4,
        score: 10,

    },
    {
        name: 'MuhdHisham',
        imageSrc: './MI.jpg',
        pos: 5,
        score: 10,

    }


];


const setPlayers = () => {

    playersList = toppers.reduce((leaderBoard, topper) => {



        leaderBoard += `<div class = "list">
            <div class = "item">
            
            <div class="pos">
            ${topper.pos}
            </div>

          <div class="pic" style="background-image: url('${topper.imageSrc}')">
          </div>

          <div class="name" style = "font-weight:510">
        ${topper.name}
          </div>

         <div class="score" style = "">
        <strong>${topper.score}</strong>
        </div>

            </div>
            </div>`;


        return leaderBoard;


    }, '');

    playersElement = document.getElementById("toppers");
    playersElement.innerHTML = playersList;
}

setPlayers();