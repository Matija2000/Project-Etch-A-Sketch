function clearGrid(container) {
  while (container.firstChild) {
    container.firstChild.remove();
  }
}

function createGrid(x) {
  const container = document.querySelector(".container");
  container.style.cssText =
    "width:1000px; height:1000px; border:1px solid black; display:flex;flex-wrap:wrap;";
  clearGrid(container);
  for (let i = 1; i <= x * x; i++) {
    const div = document.createElement("div");
    div.style.cssText = `width:${1000 / x}px; height:${
      1000 / x
    }px;background-color:yellow;box-sizing: border-box; border:1px solid black;`;
    container.appendChild(div);
  }

  const divs = document.querySelectorAll("div");
  divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = "black";
    });
  });
}

createGrid(16);

const button = document.querySelector("button");

button.addEventListener("click", () => {
  let x = prompt(
    "Enter a number between 1-100 to change the amount of squares in a grid"
  );
  createGrid(x);
});
