/* ================================= */
/* SCREEN NAVIGATION */
/* ================================= */

function nextScreen(number) {

    const screens =
        document.querySelectorAll(".screen");

    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    const next =
        document.getElementById("screen" + number);

    if (next) {

        next.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* ================================= */
/* START SURPRISE */
/* ================================= */

function startSurprise() {

    const music =
        document.getElementById("birthdayMusic");


    music.volume = 0.5;


    music.play().catch(error => {

        console.log(
            "Music could not autoplay:",
            error
        );

    });


    createFloatingHearts();


    nextScreen(2);

}


/* ================================= */
/* FLOATING HEARTS */
/* ================================= */

function createFloatingHearts() {

    setInterval(() => {

        const heart =
            document.createElement("div");


        heart.classList.add("heart");


        const hearts = [
            "❤️",
            "💕",
            "💖",
            "💗",
            "💓",
            "💘"
        ];


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.left =
            Math.random() * 100 + "vw";


        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";


        document
            .getElementById("hearts-container")
            .appendChild(heart);


        setTimeout(() => {

            heart.remove();

        }, 8000);


    }, 700);

}


/* ================================= */
/* BLOW CANDLE */
/* ================================= */

function blowCandle() {

    const flame =
        document.getElementById("flame");


    const button =
        document.getElementById("blowButton");


    const message =
        document.getElementById("birthdayMessage");


    const cakeMessage =
        document.getElementById("cakeMessage");


    flame.style.display = "none";


    button.style.display = "none";


    cakeMessage.innerHTML =
        "Your wish is on its way... ✨";


    message.classList.remove("hidden");


    createConfetti();

}


/* ================================= */
/* CONFETTI */
/* ================================= */

function createConfetti() {

    const symbols = [
        "🎉",
        "✨",
        "💖",
        "🎊",
        "💕"
    ];


    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");


        confetti.classList.add(
            "confetti"
        );


        confetti.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.fontSize =
            (10 + Math.random() * 20) + "px";


        confetti.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        document.body.appendChild(confetti);


        setTimeout(() => {

            confetti.remove();

        }, 5000);

    }

}


/* ================================= */
/* LOVE LETTER */
/* ================================= */

function openLetter() {

    const letter =
        document.getElementById("letter");


    letter.classList.remove("hidden");


    const message = `

Happy Birthday, Pooji ❤️

I don't know if a website can really express everything I feel for you, but I wanted to try.

Every conversation, every laugh, every silly moment and every memory we've created has a special place in my heart.

You have become someone very special to me.

I hope this new year of your life brings you happiness, peace, success and everything you've been wishing for.

I hope you always keep that beautiful smile.

And whenever you look back at this little surprise, I hope it reminds you that someone named Madhu put his heart into making it for you.

No matter how simple this website looks, every little part of it was made thinking about you.

Happy Birthday, Pooji. 🎂❤️

Stay happy.
Keep smiling.
— Madhu ❤️
Bava Eppudu Antavo Emo(Smiling)
 Love You 
`;


    const text =
        document.getElementById("letterText");


    text.innerHTML = "";


    typeWriter(
        message,
        text,
        35
    );

}


/* ================================= */
/* TYPEWRITER EFFECT */
/* ================================= */

function typeWriter(
    message,
    element,
    speed
) {

    let index = 0;


    function type() {

        if (index < message.length) {

            element.innerHTML +=
                message.charAt(index);


            index++;


            setTimeout(
                type,
                speed
            );

        }

    }


    type();

}


/* ================================= */
/* RESTART */
/* ================================= */

function restart() {

    location.reload();

}