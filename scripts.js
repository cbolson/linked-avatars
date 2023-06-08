const avatars = [...document.querySelectorAll(".avatar")];
const svgLine = document.querySelector("#svg-lines");
const numAvatars = avatars.length;

function drawLines(element1, element2) {
  const newLine = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "line"
  );
  newLine.classList.add("line", "deleteMe");
  let x1 = element1.offsetLeft + element1.offsetWidth / 2;
  let y1 = element1.offsetTop + element1.offsetHeight / 2;
  let x2 = element2.offsetLeft + element2.offsetWidth / 2;
  let y2 = element2.offsetTop + element2.offsetHeight / 2;
  newLine.setAttribute("x1", x1);
  newLine.setAttribute("x2", x2);
  newLine.setAttribute("y1", y1);
  newLine.setAttribute("y2", y2);
  // console.log(newLine);
  svgLine.appendChild(newLine);
}

function getAvatars(elements) {
  // remove previous lines (eg window resize)
  const prevLines = document.querySelectorAll(".deleteMe");
  prevLines.forEach((line) => {
    line.remove();
  });
  elements.forEach((el, idx) => {
    if (idx < numAvatars - 1) {
      drawLines(el, avatars[idx + 1]);
    }
  });
}
// load avatars
getAvatars(avatars);

// redraw on page resize
window.addEventListener(
  "resize",
  function (event) {
    getAvatars(avatars);
  },
  true
);
