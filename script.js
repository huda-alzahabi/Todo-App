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
    let title = $("#update_title").val();
    let description = $("#update_description").val();
    let points = $("#update_points").val();
    if (title) {
        $("#" + id)
            .parents("tr")
            .find("td:eq(0)")
            .html(title);
        $("#todo_table")
            .find("tr#" + id)
            .find("td:eq(1)")
            .html(title);
    }
    if (description) {
        $("#todo_table")
            .find("tr#" + id)
            .find("td:eq(2)")
            .html(description);
    }
    if (points) {
        $("#todo_table")
            .find("tr#" + id)
            .find("td:eq(3)")
            .html(points);
    }
}

function removeItem() {
    let idInput = $("#remove_id").val();
    let rowintable = $("#" + idInput);
    rowintable.closest("tr").remove();
}

start();