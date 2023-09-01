function clearGrid(container) {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}
function createMouseOverEffect(divs) {
  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
  });
}

function getRandomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}

function createGrid(x) {
  const container = document.querySelector(".container");
  container.style.cssText =
    "width:1000px; height:1000px; border:10px solid black; display:flex;flex-wrap:wrap;";
  clearGrid(container);
  for (let i = 1; i <= x * x; i++) {
    const div = document.createElement("div");
    div.style.cssText = `width:${1000 / x}px; height:${
      1000 / x
    }px;background-color:white;box-sizing: border-box; border:1px solid black;`;
    container.appendChild(div);
  }

  const divs = document.querySelectorAll("div");
  createMouseOverEffect(divs);

  const rainbowButton = document.querySelector(".rainbow");
  rainbowButton.addEventListener("click", () => {
    divs.forEach((div) => {
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = getRandomColor();
      });
    });
  });

  const eraser = document.querySelector(".eraser");
  eraser.addEventListener("click", () => {
    divs.forEach((div) => {
      div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "white";
      });
    });
  });

  const clear = document.querySelector(".clear");
  clear.addEventListener("click", () => {
    divs.forEach((div) => {
      div.style.backgroundColor = "white";
    });

    createMouseOverEffect(divs);
  });
}

createGrid(16);

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let x = prompt(
    "Enter a number between 1-100 to change the amount of squares in a grid"
  );
  while (x > 100 || x < 1) {
    x = prompt(
      "Enter a number between 1-100 to change the amount of squares in a grid"
    );
  }
  createGrid(x);
});
