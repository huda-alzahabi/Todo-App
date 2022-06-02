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

    $("#todo_table tbody").append(
        "<tr>" +
        "<td>" +
        id +
        "</td>" +
        "<td>" +
        title +
        "</td>" +
        "<td>" +
        description +
        "</td>" +
        "<td>" +
        points +
        "</td>" +
        "<td>" +
        false +
        "</td>" +
        "<td>33</td>"
    );
}

function updateItem() {
    let id = $("#update_id").val();
    let title = $("#update_id").val();
    let description = $("#update_id").val();
    let points = $("#update_id").val();
    if (title)
        $("#" + id)
        .closest("tr")
        .prev("tr")
        .children("td:eq(1)")
        .text("title");
    //     if (description) rowintable.cells[2].innerHTML = description;
    //     if (points) rowintable.cells[3].innerHTML = points;
}

function removeItem() {
    let idInput = $("#remove_id").val();
    let rowintable = $("#" + idInput);
    rowintable.closest("tr").remove();
}

start();