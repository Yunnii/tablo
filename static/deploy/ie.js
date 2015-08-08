$(document).ready(function() {
    $(".grid__row:odd").addClass("grid__row_even");
    $(".grid__row:even").addClass("grid__row_odd");

    $(".grid__cell:odd").addClass("grid__cell_even");
    $(".grid__cell:even").addClass("grid__cell_odd");
});