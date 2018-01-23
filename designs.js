// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function () {
    //Define variables
    let gridHeight = $("#input_height");
    let gridWidth = $("#input_width");
    let submitButton = $('input[type="button"]');
    let table = $("#pixel_canvas");
    let colorPicker = $("#colorPicker");

    colorPicker.val("#0265cc");
    //Run makeGrid() function when pressed as wel as remove existent grid
    submitButton.on("click", function () {
        $("tr").remove();
        makeGrid();
    });

    //Draw grid
    function makeGrid() {
        let heightInput = gridHeight.val();
        let widthInput = gridWidth.val();
        for (let x = 0; x < heightInput; x++) {
            let tr = $("<tr></tr>");
            table.append(tr);
            for (let y = 0; y < widthInput; y++) {
                let td = $("<td></td>");
                tr.append(td);
            }
        }
    }

    //Click once tho change cell color
    table.on("click", "td", function () {
        $(this).css("background-color", colorPicker.val());
    });

    //Color cells with left mouse pressed down, or erase cells with middle-mouse button pressed down or Shift and mouseover
    table.on("mouseover", "td", function (event) {
        if (event.which == 1) {
            $(this).css("background-color", colorPicker.val());
        } else if (event.shiftKey || event.which == 2) {
            $(this).css("background-color", "");
        }
    });

    //WOW Animations
    new WOW().init();

    $('#reset').click(function () {
        new WOW().init();
    });

});