function createGrid(x) {
  const container = document.querySelector(".container");
  container.style.cssText =
    "width:1000px; height:1000px; border:1px solid black; display:flex;flex-wrap:wrap;  ";

  for (let i = 1; i <= x * x; i++) {
    const div = document.createElement("div");
    div.style.cssText = `width:${1000 / x}px; height:${
      1000 / x
    }px;background-color:lightblue`;
    container.appendChild(div);
  }
}

createGrid(2);
