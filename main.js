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
    ${
      selector !== ".cardsInProgress" && selector !== ".cardsDone"
        ? '<button class="btnAnotherCardinProgress">In progress</button>'
        : ""
    }
    ${
      selector !== ".cardsDone"
        ? '<button class="btnAnotherCardDone">Done</button>'
        : ""
    }
    ${
      selector !== ".cardsDeleted"
        ? '<button class="btnAnotherCardDeleted">Deleted</button>'
        : ""
    }
    
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
      const titleInProgress = card.querySelector(".description").textContent;
      const taskNameInProgress = card.querySelector(".taskName").textContent;

      allCards.inProgress.push({
        cardDesc: titleInProgress,
        cardTaskName: taskNameInProgress,
        cardId: card.id,
      });
      // console.log(allCards.inProgress);
      // console.log(card.id);

      allCards.todo.forEach(function (item, index) {
        if (item.cardId === +card.id) {
          allCards.todo.splice(index, 1);
        }
      });
      drawToDo(allCards.inProgress, ".cardsInProgress");
      drawToDo(allCards.todo, ".cardsToDo");
    }
    if (event.target.closest(".btnAnotherCardDone")) {
      const card = event.target.closest(".card");
      const titleDone = card.querySelector(".description").textContent;
      const taskNameDone = card.querySelector(".taskName").textContent;

      allCards.done.push({
        cardDesc: titleDone,
        cardTaskName: taskNameDone,
        cardId: card.id,
      });

      allCards.inProgress.forEach(function (item, index) {
        if (item.cardId === card.id) {
          allCards.inProgress.splice(index, 1);
        }
      });
      drawToDo(allCards.done, ".cardsDone");
      drawToDo(allCards.inProgress, ".cardsInProgress");
    }
    if (event.target.closest(".btnAnotherCardDeleted")) {
      const card = event.target.closest(".card");
      const titleDelete = card.querySelector(".description").textContent;
      const taskNameDelete = card.querySelector(".taskName").textContent;

      allCards.deleted.push({
        cardDesc: titleDelete,
        cardTaskName: taskNameDelete,
        cardId: card.id,
      });

      allCards.done.forEach(function (item, index) {
        if (item.cardId === card.id) {
          allCards.done.splice(index, 1);
        }
      });

      drawToDo(allCards.deleted, ".cardsDeleted");
      drawToDo(allCards.done, ".cardsDone");
    }
  });
};

init();

// selector !== ".btnAnotherCardinProgress" && selector !== ".cardsDone";

// '<button class="backToTodoBtn">Back to TODO?</button>'

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
