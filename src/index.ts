const item = document.querySelector<HTMLInputElement>("#item");
const toDoBox = document.querySelector<HTMLDivElement>("#to-do-box");

if (item) {
item.addEventListener(
  'keyup', 
  function (event) 
  {
      if (event.key == "Enter") {
          addToDo(this.value)
          this.value = ""
      }
  }
  )
}

const addToDo = (item: string) => {
  if (!item || !toDoBox) return; // Ensure item and toDoBox are not null
  
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${item}
    <i class="fas fa-times"></i>
    `;

    listItem.addEventListener(
        "click", 
        function () {
            this.classList.toggle("done");
        }
    )

    const deleteIcon = listItem.querySelector("i");
    if (deleteIcon) {
      deleteIcon.addEventListener(
          "click", 
          function () {
              listItem.remove();
          }
        )
      }
      toDoBox.appendChild(listItem);
}
