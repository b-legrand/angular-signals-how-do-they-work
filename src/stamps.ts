import "./stamps.scss";

interface Stamp {
  label: string;
  rotation: number;
  position: { x: number; y: number };
  color: string;
}

const stampMarginX = 200;

const stampMarginY = 100;

const mochaColors = [
  "89b4fa", // blue
  "b4befe", // lavender
  "74c7ec", // sapphire
  "89dceb", // sky
  "94e2d5", // teal
  "a6e3a1", // green
  "f9e2af", // yellow
  "fab387", // peach
  "eba0ac", // maroon
  "f38ba8", // red
  "cba6f7", // mauve
  "f5c2e7", // pink
  "f2cdcd", // flamingo
  "f5e0dc", // rosewater
];

let container: HTMLDivElement;
let width: number;
let height: number;

export function initializeStampsContainer() {
  container = document.createElement("div");
  container.className = "stamps-container";
  document.body.appendChild(container);
  resizeStampsContainer();
}

export function resizeStampsContainer() {
  console.log("resize", arguments);
  width = window.innerWidth;
  height = window.innerHeight;
}

export function clearStampsContainer() {
  container.innerHTML = "";
}

function createStamp(label: string): Stamp {
  const x = stampMarginX + Math.random() * (width - 2 * stampMarginX);
  const y = stampMarginY + Math.random() * (height - 2 * stampMarginY);
  return {
    label,
    position: { x, y },
    rotation: Math.random() * 20 - 10, // angles from -10 to 10
    color: mochaColors[Math.floor(Math.random() * mochaColors.length)],
  };
}

export function slideChanged(args) {
  clearStampsContainer();
  const stampsEl = (args.currentSlide as HTMLElement).querySelector(".stamps");
  if (!stampsEl) {
    return;
  }
  const liElements = stampsEl.querySelectorAll("li");
  liElements.forEach((item, index: number) => {
    const stamp: Stamp = createStamp(item.textContent);
    const stampEl = document.createElement("div");
    stampEl.className = "stamp";
    stampEl.innerText = `${stamp.label}()`;
    const styles = [
      `left: ${stamp.position.x}px`,
      `top: ${stamp.position.y}px`,
      `background-color: #${stamp.color}`,
    ];
    const initialStyles = [
      `transform: rotate(${stamp.rotation}deg) scale(50)`,
      `opacity: 0`,
    ];
    stampEl.setAttribute("style", [...styles, ...initialStyles].join(";"));
    container.appendChild(stampEl);
    setTimeout(() => {
      stampEl.setAttribute(
        "style",
        [
          ...styles,
          `transform: rotate(${stamp.rotation}deg) scale(2)`,
          `opacity: 1`,
        ].join(";")
      );
    }, index * 100);
  });
}
