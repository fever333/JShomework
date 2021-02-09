const init = (event) => {
  const form = document.querySelector("#form");
  const inputDesc = document.querySelector(".inputDesc");
  const inputTaskName = document.querySelector(".inputTaskName");
  const cards = document.querySelector(".cards");
  const btnSubmit = document.querySelector("#btnSubmit");

  const allCards = {
    todo: [],
    inProgress: [],
    done: [],
    deleted: [],
  };

  const drawToDo = (arr, selector) => {
    const element = document.querySelector(selector);
    element.innerHTML = "";
    arr.forEach(function (item, index) {
      element.innerHTML += `
      <div class="card">
    <p class="description">${item.cardDesc}</p>
    <p class="taskName">${item.cardTaskName}</p>
    <button class="btnAnotherCardinProgress">In progress</button>
    <button class="btnAnotherCardDone">Done</button>
    <button class="btnAnotherCardDeleted">Deleted</button>
    </div>
    `;
    });
  };

  btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    allCards.todo.push({
      cardDesc: inputDesc.value,
      cardTaskName: inputTaskName.value,
    });
    drawToDo(allCards.todo, ".cardsToDo");
    form.reset();
  });

  cards.addEventListener("click", (event) => {
    if (event.target.closest(".btnAnotherCardinProgress")) {
      allCards.inProgress = allCards.todo;
      drawToDo(allCards.inProgress, ".cardsInProgress");
    }
    if (event.target.closest(".btnAnotherCardDone")) {
      allCards.done = allCards.inProgress;
      allCards.done = allCards.todo;
      drawToDo(allCards.done, ".cardslDone");
    }
    if (event.target.closest(".btnAnotherCardDeleted")) {
      allCards.deleted = allCards.todo;
      drawToDo(allCards.deleted, ".cardsDeleted");
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
