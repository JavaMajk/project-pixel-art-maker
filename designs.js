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
    table.on("mousedown", "td", function () {
        $(this).css("background-color", colorPicker.val());
    });
    //Prevent default right click action so right click can be used to erase
    table.on('contextmenu', 'td', function (e) {
        e.preventDefault();
        $(this).css("background-color", "");
    });
    //Prevent default action of dragging so the painted image is not dragged
    table.on('dragstart', 'td', function (e) {
        e.preventDefault();
    });
    //Check if the browser is Safari
    if (navigator.userAgent.search("Safari") >= 0) {
        //If it is Safari then use e.which to listen to mouse. Color cells with left mouse pressed down, or erase cells with right-mouse button pressed down or Shift and mouseover
        table.on("mouseover", "td", function (e) {
            if (e.which === 1) {
                $(this).css("background-color", colorPicker.val());
            } else if (e.shiftKey || e.which === 3) {
                $(this).css("background-color", "");
            }
        });
    } else {
        //If it is not Safari then use e.buttons to listen to mouse. Color cells with left mouse pressed down, or erase cells with right-mouse button pressed down or Shift and mouseover
        table.on("mouseover", "td", function (e) {
            if (e.buttons === 1) {
                $(this).css("background-color", colorPicker.val());
            } else if (e.shiftKey || e.buttons === 2) {
                $(this).css("background-color", "");
            }
        });
    }

    //WOW Animations
    new WOW().init();

    $('#reset').click(function () {
        new WOW().init();
    });

});