function start() {
    const addBtn = $("#add_btn");
    addBtn.click(addItem);

    const updateBtn = $("#update_btn");
    updateBtn.click(updateItem);

    const removeBtn = $("#remove_btn");
    removeBtn.click(removeItem);
}
let id = 0;

function addItem() {
    let title = $("#add_title").val();
    let description = $("#add_description").val();
    let points = $("#add_points").val();
    id++;

    let table = $("#todo_table");
    let tr = document.createElement("tr");
    table.append(tr);
    tr.setAttribute("id", id);

    let id_cell = document.createElement("td");
    tr.append(id_cell);

    let title_cell = document.createElement("td");
    tr.append(title_cell);

    let description_cell = document.createElement("td");
    tr.append(description_cell);

    let point_cell = document.createElement("td");
    tr.append(point_cell);

    let isdone_cell = document.createElement("td");
    tr.append(isdone_cell);

    let created_at_cell = document.createElement("td");
    tr.append(created_at_cell);

    id_cell.innerHTML = id;
    title_cell.innerHTML = title;
    description_cell.innerHTML = description;
    point_cell.innerHTML = points;
    isdone_cell.innerHTML = false;
    created_at_cell.innerHTML = 11;
}

function updateItem() {}

function removeItem() {
    let idInput = $("#remove_id").val();
    let rowintable = $("#" + idInput);
    rowintable.closest("tr").remove();
}

start();