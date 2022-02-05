const btn = document.querySelector(".btn");
const input = document.querySelector(".input");
const taskText = document.querySelector(".task-text");
const iconDelete = document.querySelector(".delete");
const iconEdit = document.querySelector(".edit");
const taskContainer = document.querySelector(".task-container");
const container = document.querySelector(".container");
const save = document.querySelector(".save");
const saveindex = document.querySelector("#saveidex");
let toDoArray = [];

btn.addEventListener("click", function (e) {
  toDoArray.unshift(input.value);
  display();
});

const deleteTodo = function (index) {
  toDoArray.splice(index, 1);
  display();
};

const edit = function (index) {
  input.value = toDoArray[index];
  save.style.display = "block";
  btn.style.display = "none";
  saveindex.value = index;
};
save.addEventListener("click", function () {
  let id = saveindex.value;
  toDoArray[id] = input.value;
  display();
});
const tick = function (index) {};
const display = function () {
  let markup = "";
  toDoArray.forEach(function (element, i) {
    markup += ` 
        <div class="task-container">
        <p class="task-text">${element}</p>
        <div class="icons">
    
      <svg onclick = edit(${i}) xmlns="http://www.w3.org/2000/svg" class="iconTask edit edit-${i}" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
          <svg
          onclick = deleteTodo(${i})
            xmlns="http://www.w3.org/2000/svg"
            class="iconTask delete delete-${i}"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
          `;
  });
  container.innerHTML = "";
  container.insertAdjacentHTML("afterbegin", markup);
};
