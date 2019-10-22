/* 
//todo: get icon to change from play to stop
todo: get buttonClick() to run multiple times per page load
todo: get timer to start
todo: add timer with name
!
*/
let id = 0;

// START OF CONSTANT VARIABLES
window.onload = ()=>{

}

const getData = () =>{
    let timerInput = document.getElementById('title').value;
    let typeInput = document.getElementById('timer-type').value;
    return{
        id,
        title: timerInput,
        type: typeInput
    }
}
const addData = ()=>{
    let title = getData().title;
    let type = getData().type;

    const div = 
        `<div id="Timer-${id}" class="timer-list">
            <div class="timer-list">
                <h2 class="timer-title" id="timer-title-1">${title}</h2>
        
                <svg height="100" width="20"><line x1="10" y1="35" x2="10" y2="65" style="stroke:black;stroke-width:2" /></svg>  
                    
                <h2 class="timer-type" id="timer-type-${id}">${type}</h2>

                <svg height="100" width="20"><line x1="10" y1="35" x2="10" y2="65" style="stroke:black;stroke-width:2" /></svg>  
                
                <h2 class="timer-count" class="timer-count-${id}">00:04:20</h2>
                
                <svg height="100" width="20"><line x1="10" y1="35" x2="10" y2="65" style="stroke:black;stroke-width:2" /></svg>

                <button class="button list" onclick="playClick(${id})"><img id='play-control' src="img/play.svg"></button>

                <svg height="100" width="20"><line x1="10" y1="35" x2="10" y2="65" style="stroke:black;stroke-width:2" /></svg>

                <button class="button" onclick="deleteClick(${id})"><img id='delete' src="img/delete.svg"></button>    

            </div>
        </div>`;

        document.querySelector('#active-timers').outerHTML+= div;

    id++;
}



// START OF TIMER LIST SECTINO
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
