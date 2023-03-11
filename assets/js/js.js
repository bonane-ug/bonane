//initializing the aos 
function aos_init() {
  AOS.init({
    duration: 800,
    easing: 'slide',
    once: true,
    mirror: false
  });
}
aos_init();


// cotton js function for mouse movements
const ball = new Cotton('#ball', {
    speed: 1
  })
  const h1 = new Cotton('.h1', {
    airMode: true
  })
  const h2 = new Cotton('.h2', {
    airMode: {
      reverse: true
    }
});

//typer scripts function 
$('#rotating').typer({
    strings:[
        'Front End Developer',
        'Web Developer',
        'UI & UX Designer',
        'Graphics Designer',

        // 'rosette',
    ]
});

//toggle btn function here 
let toggle_btn = document.getElementById("toggle-btn")
let navbar = document.getElementById("navbar")
let toggle_number = 0;

toggle_btn.addEventListener("click", function() {
  if(toggle_number == 0){
    navbar.style.margin = "0px";
    toggle_btn.className = "fas fa-xmark"
    toggle_number++;
  }else{
    navbar.style.margin = "-500px";
    toggle_btn.className = "fas fa-bars"
    toggle_number--
  }
})

//toggling class for the navbar from active to none active
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact")

contact.addEventListener("click", function() {
    contact.classList.toggle("active");
    home.classList.remove("active");
    about.classList.remove("active");
})

home.addEventListener("click", function() {
    home.classList.toggle("active");
    contact.classList.remove("active");
    about.classList.remove("active");
})

about.addEventListener("click", function() {
  about.classList.toggle("active");
  contact.classList.remove("active");
  home.classList.remove("active");
})

// sharing section
navigator.share({
  title: 'Bonane kabene',
  text: 'Front End Web Developer',
  url: 'https://'
})


//count API for visitation 
const countEl = document.getElementById("count");
countvisits();

function countvisits() {
  fetch('https://api.countapi.xyz/update/bonane/mouse/?amount=1')
    .then((res) => res.json())
    .then((res) => {
      countEl.innerHTML = res.value;
    });
}