window.onload = function() {
  const addButton = document.getElementById("add-button");
  const addInput = document.getElementById("add-input");
  const listHead = document.getElementById("list");
  let i = 0;

  const finishTask = e => {
    if (e.target.checked === true) {
      e.target.setAttribute("class", "strike");
    } else {
      e.target.removeAttribute("class");
    }
  };

  const addItem = e => {
    let inputVal = addInput.value;
    if (!inputVal) {
      return;
    }

    const template = document.querySelector("#template");
    const clone = document.importNode(template.content, true);
    clone.querySelector("span").textContent = inputVal;
    clone.querySelector("input").addEventListener("click", finishTask);
    i++;
    listHead.appendChild(clone);
  };

  addButton.addEventListener("click", addItem);
};
