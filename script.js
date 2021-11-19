const tagsEl = document.getElementById("tags");
const textArea = document.getElementById("textarea");

textArea.focus();

textArea.addEventListener("keyup", (e) => {
  createTags(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 500);
    randomSelect();
  }
});

function createTags(input) {
  let tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "")
    .map((tag) => tag.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const span = document.createElement("span");
    span.classList.add("tag");
    span.innerText = tag;
    tagsEl.appendChild(span);
  });
}

function randomSelect() {
  const times = 15;

  const interval = setInterval(() => {
    const randomTag = randomChoice();

    highlight(randomTag);

    setTimeout(() => {
      unHighlight(randomTag);
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(interval);
    setTimeout(() => {
      const randomTag = randomChoice();
      highlight(randomTag);
    }, 100);
  }, times * 100);
}

function randomChoice() {
  const tagSpans = document.querySelectorAll(".tag");

  let randNum = Math.floor(Math.random() * tagSpans.length);
  return tagSpans[randNum];
}

function highlight(tag) {
  tag.classList.add("highlight");
}

function unHighlight(tag) {
  tag.classList.remove("highlight");
}
