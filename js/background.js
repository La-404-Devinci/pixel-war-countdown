const background = document.querySelector("#background");
let cases = {};
let heightCount = 0;
let widthCount = 0;

// Click on case
const effect = (originX, originY, depth = 0) => {
  if (depth < 3) {
    setTimeout(() => effect(originX, originY, depth + 1), 100);
  }

  for (let y = -depth; y <= depth; y++) {
    const gridY = originY + y;
    if (gridY < 0 || gridY >= heightCount) continue;

    for (let x = -depth; x <= depth; x++) {
      if (y !== -depth && y !== depth && x !== -depth && x !== depth) continue;

      const gridX = originX + x;
      if (gridX < 0 || gridX >= widthCount) continue;

      const selectedCase = cases[gridX + "-" + gridY];
      const opacityDiff = (0.5 / depth) * (0.9 + Math.random() * 0.2);
      selectedCase.style.opacity += opacityDiff;

      setTimeout(
        (opacityDiff) => {
          selectedCase.style.opacity -= opacityDiff;

          if (selectedCase.style.opacity < 0.001) {
            selectedCase.style.opacity = 0;
          }
        },
        200,
        opacityDiff
      );
    }
  }
};

// Generate background
const generate = () => {
  heightCount = Math.ceil(background.clientHeight / 48);
  widthCount = Math.ceil(background.clientWidth / 48);

  // Clear
  background.innerHTML = "";
  cases = {};

  for (let y = 0; y < heightCount; y++) {
    const line = document.createElement("div");
    for (let x = 0; x < widthCount; x++) {
      const element = document.createElement("div");
      const r = Math.random() * 255;
      const g = Math.random() * 255;
      const b = Math.random() * 255;
      element.style.opacity = 0;
      line.appendChild(element);

      cases[x + "-" + y] = element;
    }
    background.appendChild(line);
  }
};

window.addEventListener("mousemove", (e) => {
  const x = Math.floor(e.clientX / 48);
  const y = Math.floor(e.clientY / 48);
  effect(x, y);
});

window.addEventListener("resize", generate);
generate();
