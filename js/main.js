  var stat = {}
  stat.click = 0;
    stat.score = 0;
    stat.pointToNextLevel = 10;
    stat.level = 1;
    stat.missedclicks = 0;
    stat.timer = 60;
    stat.highScore = [];
    stat.timeReflex = 300;
    stat.rotationSpeed = 2;
    stat.name = "";
    let row1 = document.createElement("div")
    let row2 = document.createElement("div")
    let row3 = document.createElement("div")
    let row4 = document.createElement("div")
    let row5 = document.createElement("div")
    let row6 = document.createElement("div")
    let timeLeft = 60;
  let timerIntervalId;
  let started = false

let audio = new Audio("./audio/peppa.mp4");

 
  if (localStorage.users == undefined) {
    let scoreBidon = [
      {
        "name": "Mama pig",
        "score": 748,
        "date": "02/03/2023" 
      },

      {
        "name": "Pappa pig",
        "score": 725,
        "date": "12/03/2023" 
      },
      {
        "name": "George pig",
        "score": 200,
        "date": "15/03/2023" 
      },
      {
        "name": "Peppa pig",
        "score": 184,
        "date": "08/03/2023" 
      },
      {
        "name": "Papy pig",
        "score": 40,
        "date": "15/03/2023" 
      }
    ]
   scoreBidon = JSON.stringify(scoreBidon)
   localStorage.users = scoreBidon
  }

  function createStartToStartElement() {
    let clickToStartRow = document.createElement('div');
    clickToStartRow.className = 'row'
    clickToStartRow.id = 'click-to-start';
    document.getElementById('container').append(clickToStartRow)

    let ClickToStartColLeft = document.createElement('div')
    ClickToStartColLeft.className = 'col'

    let ClickToStartColMiddle = document.createElement('div')
   ClickToStartColMiddle.className = 'col-6 text-center btn btn-primary btn-lg btn-block'
    ClickToStartColMiddle.id = 'click-to-start-middle-column'
    
    ClickToStartColMiddle.innerHTML = 'Catch me if you can'
  
 
   ClickToStartColMiddle.addEventListener('mouseover', function() {
     ClickToStartColMiddle.innerHTML = 'Start the game';
   });
   ClickToStartColMiddle.addEventListener('mouseout', function() {
     ClickToStartColMiddle.innerHTML = 'Catch me if you can';
    });
   document.body.appendChild(ClickToStartColMiddle);
   


    let ClickToStartColRight = document.createElement('div')
    ClickToStartColRight.className = 'col'

    document.getElementById('click-to-start').append(ClickToStartColLeft)
    document.getElementById('click-to-start').append(ClickToStartColMiddle)
    document.getElementById('click-to-start').append(ClickToStartColRight)

    let spaceAfterClickToStartButton = document.createElement('hr');
    document.getElementById('click-to-start').append(spaceAfterClickToStartButton)
    // console.log('btn');
  }

  createStartToStartElement()

  function Creation() {
    let createMainSection = document.createElement('div');
    createMainSection.className = 'main'
    document.getElementById('container').append(createMainSection)


    let milieu = document.createElement('div')
    let main = document.getElementsByClassName("main")
    milieu.className = 'row justify-content-between'
  
    let ecranNoir = document.createElement("div")
    ecranNoir.className = 'ecranNoir'
    main[0].append(milieu,ecranNoir)

  
  
    let section = document.createElement("section")
    section.className = "section "
    document.getElementsByClassName("section")
    main[0].append(section)
    // console.log(section)

  
  row1.getElementsByClassName("row")
  row1.className = "row1"
  section.append(row1)
  row1.innerText = "Score "

  
  row2.className = "row2"
  section.append(row2)
  row2.innerText = "Points to Next Level"

  row3.className = "row3"
  section.append(row3)
  row3.innerText = "Level"

  row4.className = "row4"
  section.append(row4)
  row4.innerText = "Missed Clicks"

  row5.className = "row5"
  section.append(row5)
  row5.innerText = "Timer"

  row6.className = "row6"
  section.append(row6)
  row6.innerText = "High Scores :"
  }

  Creation()

  HTML = {
    btnPlay:  document.createElement("button"),
    getEcranNoir :  document.getElementsByClassName('ecranNoir')[0],
    getClickToStart : document.getElementById("click-to-start-middle-column")

  }


  HTML.getClickToStart.addEventListener("click", start)

  function start() {
    if (confirm("are you ready?") == true) {  
      started = true
      audio.play()
      document.getElementById("click-to-start").remove()
      genereButton()
      affichageScore()
      affichageNextToPointLevel()
      affichageLevel()
      affichageMissedClicked()
      affichageTimer()
      startTimer()
    } else {
      
        alert("ohhh please play whith me")
      }
    }

  function genereButton() {
      let button = HTML.btnPlay;
    button.className = "button"
    button.style.position = "relative"
    // button.style.backgroundImage = "url(./img/peppa.jpg)"
    HTML.getEcranNoir.append(button)
    
    button.style.top =  Math.floor(Math.random() * (HTML.getEcranNoir.offsetHeight - 90 )) + "px"
    button.style.left = Math.floor(Math.random() * (HTML.getEcranNoir.offsetWidth - 130)) + "px"

    button.style.animation = "spin " + stat.rotationSpeed + "s linear infinite";
  }


  HTML.getEcranNoir.addEventListener("click", (e) => {
    if(started == true) {
        if (e.target.className == "button") {    
    
     //genereButton()
      clicked()
      levelUp()
      addScore()
    
      
      substractPTNL()
    
      
    }
    else if (e.target.className == "ecranNoir") {
    missed()
    affichageMissedClicked()
    affichageScore()
  substractScore()
    }
    }

  })


  function levelUp() {
    if(stat.click % 10 == 0){
      stat.level ++;
      stat.timer = stat.timer +10;
  stat.pointToNextLevel = 11;
  affichageLevel()
  stat.timeReflex -= 50;
  stat.rotationSpeed -= 0.25;
    }
    
  }

  function missed() {
    stat.missedclicks ++
    affichageMissedClicked()
  }

  function clicked() {
    stat.click ++
  }

  function affichageScore() {
    row1.innerText = " Score:  \n " + stat.score

  }

  function affichageNextToPointLevel () {
    row2.innerText = " Point to Next Level:  \n " + stat.pointToNextLevel
  }
  function affichageLevel () {
    row3.innerText = "Level : \n " + stat.level


  }
    function affichageMissedClicked () {
      row4.innerText =  "Missed Cliked : \n " + stat.missedclicks
    
    }

    function affichageTimer () {
      row5.innerText = "Timer : \n " + stat.timer
    }
  
    function addScore(){
      stat.score += 10 * stat.level
      affichageScore()


    }
    function substractScore() {
          stat.score -= stat.level
          affichageScore()
    }

    function substractPTNL() {
      stat.pointToNextLevel--
      affichageNextToPointLevel()

    }

    function startTimer() {
      
      timerIntervalId = setInterval(function() {
      
        stat.timer--;
          
        affichageTimer()
          
        if (stat.timer <= 0) { //a verifier timer sarrete a 0 et continue
        
          clearInterval(timerIntervalId);
        
          if(stat.timer == 0) {
            stopGame();
          }
        } 
      }, 1000); 
  }

  HTML.btnPlay.addEventListener("mouseover", function(){
    setTimeout(function() {
      genereButton();
    }, stat.timeReflex) 
  })

  function stopGame() {
       
    topCinq()
    addLocalStorage()
    location.reload();

    }
    
   
 


 function addLocalStorage(){
  let tableau = [];
  let infoScore = {
    "name": stat.name,
    "date": new Date().toLocaleDateString(),
    "score": stat.score
  }

  //infoScore = JSON.stringify(infoScore);
  tableau = JSON.parse(localStorage.users);
 
tableau.push(infoScore); // Ajoute la nouvelle entrée
tableau.sort((a, b) => b.score - a.score); // Trie le tableau en fonction du score (du plus grand au plus petit)

if (tableau.length > 5) {
tableau.pop(); // Supprime la première entrée
}
localStorage.users = JSON.stringify(tableau); //
 
}

function topCinq(){
  var topCinq = JSON.parse(localStorage.users);
  if(topCinq.length == 5) {
    for (let i = 0; i < topCinq.length; i++) {
      if(stat.score > topCinq[i].score) {
        alert(" Congratulation, you win, you are in the top 5!! You're score is " + stat.score)
        stat.name = prompt("Please enter your name")
         return
        
      } 
    }
    alert(" You lost! You're score is " + stat.score )

  } else if( topCinq.length < 5) {
    alert("bravo vous etes dans le top 5 " )
  }

}
affichageHS()
function affichageHS() {
  var hs = row6;
  var ls = JSON.parse(localStorage.users)
  for (let i = 0; i < ls.length; i++) {
    var p = document.createElement("p")
    p.innerText = ls[i].name + " " + ls[i].score
    hs.append(p)
    var span = document.createElement("span")
    span.innerText = ls[i].date
    p.append(span)
  }
}



audio.loop = true;
audio.volume = 1;
audio.play();





