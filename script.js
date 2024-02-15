// Thats function really minimised 300 line of code 
    function skeleton(rows,hex,parent,classes=[]) {
        for (let i = 0;i<rows;i++) {
            let row = document.createElement('div');
    if (classes.length>0) {
        classes.forEach(cls => row.classList.add(cls));
    } else {
        console.log("Classlist needed");
        return 'Classlist must needed';
    }
        for (let j = 0;j<hex;j++) {
            let child = document.createElement('div');
            child.classList.add('hexagon');
            row.appendChild(child);
            
        }
        parent.appendChild(row);
        }
    }
    
    // adding hexagons to the intro bar
     const parent = document.getElementById('intro1');
     skeleton(11,18,parent,['row','over']);
     
     const parent2 = document.getElementById('placeit');
     skeleton(4,18,parent2,['row','over','ov']);
     
     const parent3 = document.getElementById('container');
     skeleton(24,18,parent3,['row']);
     
            const playmusic = document.getElementById("bgMusic");
            var body1 = document.querySelector("body");
            playmusic.src = "/res/bg.mp3";
            body1.addEventListener("dblclick", function() {
                if (!playmusic.paused) {
                    playmusic.pause();
                } else {
                    playmusic.play();
                }
            });
            var intro = document.getElementById("intro");
            var intro1 = document.getElementById("intro1");
            setTimeout(function() {
                intro.style.display = "none";

            }, 3500);

            function redirect(name) {
                const calculator = "./calculator/";
                const twitter = "./cloneProjects/twitter/";
                const yt = "./youtube/";
                const login = "./login/";
                const clock = "./clock/";
                const simpleC = "./calculatorui/";
                const sys = "https://userloginsystem.onrender.com/";
                const check = name.innerText;
                switch (check) {
                    case "Calculator":
                        window.open(calculator);
                        break;
                    case "TwitterX Clone":
                        window.open(twitter);
                        break;
                    case "YouTube View Bot":
                        window.open(yt);
                        break;
                    case "Login Form":
                        window.open(login);
                        break;
                    case "Analog Clock":
                        window.open(clock);
                        break;
                    case "Simple Calculator":
                        window.open(simpleC);
                        break;
                    case "User Login System":
                        window.open(sys);
                    default:
                        console.log("Coming soon!");
                }
            }
            function goto(url) {
                window.open(url);
            }