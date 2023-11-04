//accordion
$("#accordion").accordion({
    collapsible: true,
    active: false,
    heightStyle: "content"
  });
  $("#accordion .ui-accordion-header").click(function() {
    $(this)
      .children("i")
      .toggleClass("fa-plus-circle fa-minus-circle");
    $(".ui-accordion-header")
      .not($(this))
      .children("i")
      .removeClass("fa-minus-circle");
    $(".ui-accordion-header")
      .not($(this))
      .children("i")
      .addClass("fa-plus-circle");
  });
  