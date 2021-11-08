var regexGamePage = /[http:\/\/localhost:4200\/][#]*/ //to be sure we are on acceuil

setTimeout(() => {
    if (!!document.getElementById("myCanvas")) {
        // SELECT CVS
        const canvas = document.getElementById("myCanvas");
        const context = canvas.getContext("2d");

        // GAMES VARS AND CONSTS
        let frames = 0;
        let score = 0;

        // Menu START
        const spriteStart = new Image();
        spriteStart.src = "./assets/minigame/start.png";
        const start = {
            sX: 40,
            sY: 55,
            destinationX: canvas.width / 2,
            destinationY: canvas.height / 2,
            W: 165,
            H: 65,

            draw: function () {
                if (state.current == state.start) {
                    context.drawImage(spriteStart, this.sX, this.sY, this.W, this.H, this.destinationX - this.W / 2, this.destinationY - this.H / 2, this.W, this.H);
                }
            }
        }

        //DECORD JEU
        const plateau = {
            x: 0,
            y: 200,
            draw: function () {
                context.fillStyle = "#000000";
                context.fillRect(this.x, this.y, canvas.width, 100); //coord x et y puis largeur hauteur
            },


        }

        class Obstacle {
            constructor() {
                this.x = canvas.width;
                this.y = 180,
                    this.width = 20,
                    this.height = 20
            }
            draw() {
                if (this.x > -1) {
                    context.fillStyle = "#000000";
                    context.fillRect(this.x, this.y, this.width, this.height);
                } else {
                    this.x = canvas.width + Math.floor(Math.random() * Math.floor(300));
                    console.log(`création de l'obstacle à ${this.x}px du bords`);
                }
            }
            update() {
                if (state.current == state.game) {
                    this.x = this.x - 5; //Vitesse du bloc Obstacle soit: n pixel
                    //quand le skateur touche l'obstacle et qu'il n'a pas une frame de saut 
                    // n possibilité car l'obstacle bouje de n pixels à chaque update
                    if (skateur.destinationX == this.x || skateur.destinationX == (this.x + 1) || skateur.destinationX == (this.x + 2) || skateur.destinationX == (this.x + 3) || skateur.destinationX == (this.x + 4)) {
                        console.log('OBSTACLE !');
                        console.log('Frame du skateur :', skateur.frame);
                        if (skateur.frame < 5 || skateur.frame >= 12) {

                            setTimeout(() => {
                                state.current = state.over;
                                alert(`Votre score: ${score}`);
                                score = 0;
                            }, 50);

                        } else {
                            score += 1;
                            console.log('score is :', score)
                        }
                    }
                }
            }
        }

        var obstacle = new Obstacle;
        var obstacle2 = new Obstacle;
        obstacle2.x = canvas.width + canvas.width / 2;

        //MENU GAME OVER
        const spriteOver = new Image();
        spriteOver.src = "./assets/minigame/over.png";
        const gameOver = {
            sX: 40,
            sY: 60,
            destinationX: canvas.width / 2,
            destinationY: canvas.height / 2,
            W: 300,
            H: 162,

            draw: function () {
                if (state.current == state.over) {
                    context.drawImage(spriteOver, this.sX, this.sY, 400, 215, this.destinationX - this.W / 2, this.destinationY - this.H / 2, this.W, this.H);
                }
            }
        }

        //GAME STATE
        const state = {
            current: 1,
            start: 1,
            game: 2,
            over: 3
        }

        //CONTROL THE GAME
        canvas.addEventListener('click', function (evt) {
            switch (state.current) {
                case state.start:
                    state.current = state.game;
                    break;
                case state.game:
                    skateur.jump();
                    break;
                case state.over:
                    state.current = state.start;
            }
        });

        //SKATEUR
        const spriteSkateur = new Image();
        spriteSkateur.src = "./assets/minigame/sprite_skateur.png";

        const skateur = {
            animation: [
                { sX: 0, sY: 0 }, //Première image on change la source du sprite à chaque élém  -   this.animation[0] etc
                { sX: 128, sY: 0 }, //deuxième image
                { sX: 2 * 128, sY: 0 }, //troisième image
                { sX: 3 * 128, sY: 0 },
                { sX: 4 * 128, sY: 0 },
                { sX: 5 * 128, sY: 0 },
                { sX: 6 * 128, sY: 0 },
                { sX: 7 * 128, sY: 0 },
                { sX: 8 * 128, sY: 0 },
                { sX: 9 * 128, sY: 0 },
                { sX: 10 * 128, sY: 0 },
                { sX: 11 * 128, sY: 0 },
                { sX: 12 * 128, sY: 0 },
                { sX: 13 * 128, sY: 0 },
                { sX: 14 * 128, sY: 0 },
                { sX: 15 * 128, sY: 0 },
                { sX: 16 * 128, sY: 0 },
                { sX: 17 * 128, sY: 0 },
                { sX: 18 * 128, sY: 0 },
                { sX: 19 * 128, sY: 0 },
                { sX: 20 * 128, sY: 0 },
                { sX: 21 * 128, sY: 0 }
            ],
            destinationX: 200,
            destinationY: 200,
            W: 128,
            H: 213,
            frame: 0,
            Ijump: false,
            counter: 0,

            draw: function () {
                var skate = this.animation[this.frame];
                context.drawImage(spriteSkateur, skate.sX, skate.sY, this.W, this.H, this.destinationX - this.W / 2, this.destinationY - this.H / 2, this.W / 2, this.H / 2);
            },

            update: function () {// fait l'animation
                if (this.Ijump == true) {
                    this.period = 4;// donne la vitesse de saut du skateur
                    if (state.current == state.game && frames % this.period == 0) {
                        this.frame += 1;
                    }
                    this.counter += 1;
                }
                this.frame = this.frame % this.animation.length;
                if (this.counter == (this.period * this.animation.length)) {//Pour calculer quand l'animation  est fini
                    this.counter = 0;
                    this.Ijump = false;
                    this.frame = 0;
                }
            },

            jump: function () {
                this.Ijump = true;
            }
        }

        //DRAW
        function draw() {
            context.fillStyle = "#70c5ce";
            context.fillRect(0, 0, canvas.width, canvas.height);
            start.draw();
            gameOver.draw();
            skateur.draw();
            plateau.draw();
            obstacle.draw();
            obstacle2.draw();
        }

        //UPDATE
        function update() {
            skateur.update();
            obstacle.update();
            obstacle2.update();
        }

        // LOOP
        function loop() {
            if (regexGamePage.test(window.location.href)) {
                update();
                draw();
                frames++;
                requestAnimationFrame(loop);
            } else {
                console.log('stop game!');
                return
            }
        }
        loop();
    }
}, 10);