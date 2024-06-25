const data = [
  {
    img: "./images/mac.png",
  },
  {
    img: "./images/monitor.png",
  },
  {
    img: "./images/watch.png",
  },

  {
    img: "./images/speaker.png",
  },
];
let dataimage = document.getElementById("slider");
let start = 0;
function imageslider() {
  data.map((val, i) => {
    if (i == start) {
      dataimage.innerHTML = `<div>
                <img src=${val.img} style='height:400px;width:400px;' />

                
                </div>`;
    }
  });
}

imageslider(start);



function next() {

  
  if (start === data.length - 1) {
    start = 0;
  } else {
    start += 1;
  }
  imageslider(start);
}
function previous() {
  if (start === 0) {
    start = data.length - 1;
  } else {
    start -= 1;
  }
  imageslider(start);
}
// setInterval(()=>{
//     next()
// },2000);

let navitems = document.querySelectorAll(".items ul li");

function navbar(active) {
  console.log(navitems);
  navitems.forEach((li) => {
    console.log(li.getAttribute("id") == active);
    li.classList.remove("active");
    if (li.classList.contains(active)) {
      li.classList.add("active");
    }
  });
}
navbar("home");

let sections = document.querySelectorAll(".sections section");

window.addEventListener("scroll", function () {
  console.log(pageYOffset);

  sections.forEach((section) => {
    if (pageYOffset >= section.offsetTop - 60) {
      console.log(section.getAttribute("id"));
      navbar(section.getAttribute("id"));
    }
  });
});
