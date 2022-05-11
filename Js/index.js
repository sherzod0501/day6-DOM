let makerTodo = document.querySelector(".todo-maker");
let addTodo = document.querySelector(".add-todo");
let listGroup = document.querySelector(".list-group");

addTodo.addEventListener("click", () => {
  if (makerTodo.value !== "") {
    let list = document.createElement("li");
    list.className = "list-group-item d-flex align-items-center";
    let Inp = document.createElement("input");
    Inp.setAttribute = "form-check-input me-2";
    Inp.type = "checkbox";
    list.append(Inp);
    let TextD = document.createElement("div");
    TextD.className = "text w-100";
    TextD.textContent = makerTodo.value;
    list.append(TextD);

    let BtnWrapper = document.createElement("div");
    BtnWrapper.className = "d-flex gap-1";

    let EditBtn = document.createElement("button");
    EditBtn.className = "btn btn-warning";
    EditBtn.textContent = "edit";
    BtnWrapper.append(EditBtn);

    let DeleteBtn = document.createElement("button");
    DeleteBtn.className = "btn btn-danger";
    DeleteBtn.textContent = "delete";
    BtnWrapper.append(DeleteBtn);
    DeleteBtn.setAttribute("onclick", "del()");

    list.append(BtnWrapper);
    let div1 = document.createElement("div");
    div1.append(list);
    listGroup.append(div1);
    makerTodo.value = "";

    this.del = function () {
      div1.hidden = true;
    };
  }
});
