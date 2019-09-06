/* 
//todo: get icon to change from play to stop
todo: get buttonClick() to run multiple times per page load
todo: get timer to start
todo: add timer with name
!
*/
const stopBut = 'img/stop.png';
const playBut = 'img/play.png';
let play = 0;

const playClick = () => {
    const image = document.getElementById('play-control');
    switch (play){
        case 1:
            play -= 1;
            console.log("stop");
            return image.src = playBut;
        case 0:
            play += 1;
            console.log("play");
            return image.src = stopBut
    }
}

const deleteClick = () =>{
    console.log("delete");
    alert("Are you sure you want to delete this?");
}