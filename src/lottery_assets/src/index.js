import { lottery } from "../../declarations/lottery";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with lottery actor, calling the greet method
  const greeting = await lottery.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
