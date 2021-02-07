const init = (event) => {
  const form = document.querySelector("#form");

  const inputDesc = document.querySelector(".inputDesc");
  const inputTaskName = document.querySelector(".inputTaskName");

  const cardsInProgress = document.querySelector(".cardsInProgress");

  const cards = document.querySelector(".cards");

  const btnSubmit = document.querySelector("#btnSubmit");

  const allCards = {
    todo: [],
    inProgress: [],
    done: [],
    deleted: [],
  };

  let counter = 0;

  const drawToDo = (arr, selector) => {
    const element = document.querySelector(selector);
    element.innerHTML = "";
    arr.forEach(function (item, index) {
      element.innerHTML += `
      <div class="card" id="${item.cardId}">
    <p class="description">${item.cardDesc}</p>
    <p class="taskName">${item.cardTaskName}</p>
    <button class="btnAnotherCardinProgress">+ Add another card</button>
    </div>
    `;
    });
  };

  btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    allCards.todo.push({
      cardDesc: inputDesc.value,
      cardTaskName: inputTaskName.value,
      cardId: counter,
    });
    drawToDo(allCards.todo, ".cardsToDo");

    form.reset();
  });

  cards.addEventListener("click", (event) => {
    let btnTodo = event.target.closest(".btnAnotherCardinProgress");
    console.log(btnTodo);
    if (btnTodo) {
      btnTodo.classList.add("btnAnotherCardinDone");

      allCards.todo = allCards.inProgress;
      drawToDo(allCards.inProgress, ".cardsInProgress");
    }

    if (btnTodo) {
      btnTodo.classList.toggle("btnAnotherCardinDone");
      event.target.closest(".btnAnotherCardinDone");
      allCards.inProgress = allCards.done;
      drawToDo(allCards.done, ".cardslDone");
      console.log(btnTodo);
      console.log(allCards.done);
    }
  });
};

init();

// const drawCardsInProgressDoneDeleted = () => {
//   const btnAnotherCardinProgress = document.querySelector(
//     ".btnAnotherCardinProgress"
//   );
//   btnAnotherCardinProgress.addEventListener("click", () => {
//     if (btnAnotherCardinProgress) {
//       allCards.inProgress.push({
//         cardDesc: inputDesc.value,
//         cardTaskName: inputTaskName.value,
//         cardId: counter,
//       });
//     }
//   });
//   drawToDo(allCards.inProgress, ".cardsInProgress");
// };

// cardsInProgress.addEventListener("click", (event) => {
//   event.target.closest(".cards");
//   btnAnotherCardinProgress.addEventListener("click", () => {
//     arr.forEach(function (item, index) {
//       element.innerHTML += `
//       <div class="card" id="${item.cardId}">
//     <p class="description">${item.cardDesc}</p>
//     <p class="taskName">${item.cardTaskName}</p>
//     <button class="btnAnotherCardinProgress">+ Add another card</button>
//     </div>
//     `;
//     });
//   });
//   allCards.todo.push(allCards.inProgress);
//   counter++;
//   console.log(allCards);
//   drawToDo(allCards.inProgress, ".cardsInProgress");
// });

// cards.addEventListener("click", (event) => {
//   event.target.closest(".btnAnotherCardinProgress");
//   console.log("work");
// });
