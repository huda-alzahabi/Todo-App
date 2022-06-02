function start() {
    //linking each button with its functionality
    const addBtn = $("#add_btn");
    addBtn.click(addItem);

    const updateBtn = $("#update_btn");
    updateBtn.click(updateItem);

    const removeBtn = $("#remove_btn");
    removeBtn.click(removeItem);
}

function addItem() {
    //take the input values from the user and generate an id
    let id = Math.floor(Math.random() * 1000) + 1;
    let title = $("#add_title").val();
    let description = $("#add_description").val();
    let points = $("#add_points").val();
    let d = new Date();
    let timestamp =
        d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate();

    //save them to the todo list table
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
        "<td>" +
        timestamp +
        "</td>"
    );
    //sort descending according to date
    $("tr")
        .sort(function(a, b) {
            return (
                new Date($(a).find("input").val()).getTime() <
                new Date($(b).find("input").val()).getTime()
            );
        })
        .appendTo("tbody");
}

function updateItem() {
    //take the input values from the user
    let id = $("#update_id").val();
    let title = $("#update_title").val();
    let description = $("#update_description").val();
    let points = $("#update_points").val();
    //if there is any input, ie the user wants to change a certain field, update it
    if (title) {
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
    //take from the user the id of the row he wants to delete and remove it from table
    let idInput = $("#remove_id").val();
    let rowintable = $("#" + idInput);
    rowintable.closest("tr").remove();
}

start();