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

  let counter = 0;

  const drawToDo = (arr, selector) => {
    const element = document.querySelector(selector);
    element.innerHTML = "";
    arr.forEach(function (item, index) {
      element.innerHTML += `
      <div class="card" id="${item.cardId}"> 
    <p class="description">${item.cardDesc}</p>
    <p class="taskName">${item.cardTaskName}</p>
    <button class="btnAnotherCardinProgress" data-card="${item.counter}">In progress</button>
    <button class="btnAnotherCardDone" data-card="${item.counter}">Done</button>
    <button class="btnAnotherCardDeleted" data-card="${item.counter}">Deleted</button>
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
    counter++;
    console.log(allCards.todo);
  });

  cards.addEventListener("click", (event) => {
    if (event.target.closest(".btnAnotherCardinProgress")) {
      const card = event.target.closest(".card");
      const title = card.querySelector(".description").textContent;
      const taskName = card.querySelector(".taskName").textContent;

      allCards.todo.forEach(function (item, index) {
        if (item.cardDesc === title && item.cardTaskName === taskName) {
          allCards.inProgress.splice(index, 1, {
            cardDesc: title,
            cardTaskName: taskName,
          });
        }
      });
      drawToDo(allCards.inProgress, ".cardsInProgress");
    }
    if (event.target.closest(".btnAnotherCardDone")) {
      allCards.done = allCards.inProgress;

      drawToDo(allCards.done, ".cardslDone");
    }
    if (event.target.closest(".btnAnotherCardDeleted")) {
      allCards.deleted = allCards.todo;
      drawToDo(allCards.deleted, ".cardsDeleted");
    }
  });
};

init();

//<button class="btnAnotherCardinProgress" data-card="${item.cardId}">In progress</button>
// <button class="btnAnotherCardDone" data-card="${item.cardId}">Done</button>
// <button class="btnAnotherCardDeleted" data-card="${item.cardId}">Deleted</button>

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
