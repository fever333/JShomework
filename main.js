const init = (event) => {
  const form = document.querySelector("#form");

  btnSubmit = document.querySelector("#btnSubmit");

  const toDo = {
    ToDo: [],
    InProgress: [],
    lDone: [],
    Deleted: [],
  };

  let counter = 0;

  const drawToDo = (arr, selector) => {
    const element = document.querySelector(selector);
    element.style.display = "block";
    element.innerHTML = "";
    arr.forEach(function (item, index) {
      element.innerHTML += `
      <div class="card" id="${item.cardId}">
    <p class="description">${item.cardDesc}</p>
    <p class="taskName">${item.cardTaskName}</p>
    </div>
    `;
    });
  };

  btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    const inputDesc = document.querySelector(".inputDesc").value;
    const inputTaskName = document.querySelector(".inputTaskName").value;

    toDo.ToDo.push({
      cardDesc: inputDesc,
      cardTaskName: inputTaskName,
      cardId: counter,
    });
    counter++;
    console.log(toDo);
    drawToDo(toDo.ToDo, ".cardsToDo");
    form.reset();
  });
};
init();
