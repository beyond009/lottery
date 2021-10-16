import { lottery } from "../../declarations/lottery";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with lottery actor, calling the greet method
  const greeting = await lottery.greet(name);

  document.getElementById("greeting").innerText = greeting;
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;

  const step = (timestamp) => {
    //  console.log("timestamp",timestamp)
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    //  console.log("progress",progress)
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("value");
animateValue(obj, 100, 0, 5000);
