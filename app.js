const smallCups = document.querySelectorAll(".cup-small");

const liters = document.getElementById("liters");
const percent = document.getElementById("percent");
const remain = document.getElementById("remained");

smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => highlightCups(idx));
});

function highlightCups(idx) {
  toggleCup(idx);
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      return cup.classList.add("full");
    } else {
      return cup.classList.remove("full");
    }
  });
  updateBigCup();
}

function toggleCup(idx) {
  if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    return idx--;
  }
}

function updateBigCup() {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length;

  if (fullCups === 0) {
    percent.style.visibility = "hidden";
    percent.style.height = 0;
  } else {
    percent.style.visibility = "visible";
    percent.style.height = `${(fullCups / totalCups) * 330}px`;

    percent.textContent = `${(fullCups / totalCups) * 100}%`;
  }
  if (fullCups === totalCups) {
    remain.style.visibility = "hidden";
    remain.style.height = 0;
  } else {
    remain.style.visibility = "visible";
  }
}
