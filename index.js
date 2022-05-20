const taskContainer = document.querySelector(".task__container");

const addNewCard = () => {
  // get task data
  const taskData = {
    id: `${Date.now()}`,
    title: document.getElementById("taskTitle").value,
    image: document.getElementById("imageURL").value,
    type: document.getElementById("taskType").value,
    description: document.getElementById("taskDescription").value,
  };

  console.log(taskData);

  // generate the HTML code
  const newTask = `<div id=${taskData.id} class="col-md-6 col-lg-4 my-4">
  <div class="card">
    <div class="card-header gap-2 d-flex justify-content-end">
      <button class="btn btn-outline-info" type="submit">
        <i class="fa-solid fa-pencil"></i>
        <!--upar wla Code is for the icon(pencil)-->
      </button>
      <button class="btn btn-outline-danger" type="submit">
        <i class="fa-solid fa-trash"></i>
        <!--upar wla Code is for the icon(delete)-->
      </button>
    </div>
    <img
      src=${taskData.image}
      class="card-img-top"
      alt="TaskImage"
    />
    <div class="card-body" style="background-color: rgb(184, 236, 184)">
      <h5
        class="task_card_title"
        style="background-color: rgb(79, 237, 68)"
      >
        ${taskData.title}
      </h5>
      <p
        class="description trim-3-lines text-muted"
        style="background-color: rgb(235, 117, 117)"
      >
        ${taskData.description}
      </p>
    </div>
    <div class="tags text-white" style="background-color: red">
      <h4>
        <span class="badge bg-primary">${taskData.type}</span>
      </h4>
    </div>

    <div class="card-footer text-muted">
      <a href="#" class="btn btn-outline-primary">Open Task</a>
    </div>
  </div>
</div>`;

  // inject in the DOM
  taskContainer.insertAdjacentHTML("beforeend", newTask);

  // clear the FORM
  document.getElementById("taskTitle").value = "";
  document.getElementById("imageURL").value = "";
  document.getElementById("taskType").value = "";
  document.getElementById("taskDescription").value = "";

  return;
};
