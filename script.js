
window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1000);

});


const text = "SOFHIA CHRISTIANTY SIPAYUNG";
const typingElement = document.getElementById("typing");

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            typingElement.innerHTML = "";
            index = 0;
            typeEffect();
        }, 200); // jeda 2 detik sebelum mengulang
    }
}

typeEffect();


const darkBtn =
document.getElementById(
"darkModeBtn"
);

if (darkBtn) {

    darkBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
        "dark"
        );

    });

}

function openCertificate(src){

    const modal =
    document.getElementById(
    "certificateModal"
    );

    const image =
    document.getElementById(
    "certificateImage"
    );

    modal.style.display = "flex";

    image.src = src;

}

function closeCertificate(){

    document.getElementById(
    "certificateModal"
    ).style.display = "none";

}


window.addEventListener(
"click",
function(e){

    const modal =
    document.getElementById(
    "certificateModal"
    );

    if(e.target === modal){

        modal.style.display = "none";

    }

});


function hubungi(){

    alert(
    "Terima kasih telah mengunjungi portofolio saya 😊"
    );

}


const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
            "show"
            );

        }

    });

},

{
    threshold:0.2
}

);

const hiddenElements =
document.querySelectorAll(
".card, .stat, .certificate-card"
);

hiddenElements.forEach((el)=>{

    el.classList.add(
    "hidden"
    );

    observer.observe(el);

});


const counters =
document.querySelectorAll(
".stat h2"
);

counters.forEach((counter)=>{

    const updateCounter = () => {

        const target =
        Number(
        counter.innerText.replace("+","")
        );

        let count = 0;

        const speed = target / 80;

        const run = () => {

            count += speed;

            if(count < target){

                counter.innerText =
                Math.floor(count);

                requestAnimationFrame(run);

            }else{

                counter.innerText =
                target +
                (
                target < 100
                ? "+"
                : ""
                );

            }

        };

        run();

    };

    updateCounter();

});


const sections =
document.querySelectorAll(
"section"
);

const navLinks =
document.querySelectorAll(
"nav a"
);

window.addEventListener(
"scroll",
()=>{

    let current = "";

    sections.forEach(
    (section)=>{

        const top =
        section.offsetTop;

        const height =
        section.clientHeight;

        if(
        pageYOffset >=
        top - 200
        ){

            current =
            section.getAttribute(
            "id"
            );

        }

    });

    navLinks.forEach(
    (link)=>{

        link.classList.remove(
        "active"
        );

        if(
        link.getAttribute(
        "href"
        ) ===
        "#" + current
        ){

            link.classList.add(
            "active"
            );

        }

    });

});


const topButton =
document.createElement(
"button"
);

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(
topButton
);

topButton.addEventListener(
"click",
()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

window.addEventListener(
"scroll",
()=>{

    if(
    window.scrollY > 400
    ){

        topButton.style.display =
        "block";

    }else{

        topButton.style.display =
        "none";

    }

});


/* =====================================
   CONSOLE MESSAGE
===================================== */

console.log(
"Portfolio berhasil dimuat 🚀"
);
