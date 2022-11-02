let last = "";
$(document).ready(function () {
  $("#landmarks-level1 polygon").each(function (index, element) {
    $(element).click(function (e) {
      removeClasses();
      details(detail);
      if (detail["title"]) toggleOn();
      last = $(this).attr("data-title");
    });
  });
  $("#landmarks-level1 polygon")
    .mouseenter(function (mouse) {
      detail = {
        title: $(this).attr("data-title"),
        size: $(this).attr("data-size"),
        img: $(this).attr("data-img"),
        details: $(this).attr("data-details"),
      };
      removeClasses();
      details(detail);
      if (detail["title"]) toggleOn();
      last = $(this).attr("data-title");
    })
    .mouseleave(function (mouse) {
      toggleOff();
    });
});

function showHighlights(categories, color) {
  removeClasses();
  $("#tooltip #content div").remove();
  $("#clicked div").remove();
  if (categories[0] != "NAN") {
    $(`#landmarks-level1 polygon:not(.${categories[0]})`).toggleClass(
      "path-color-black"
    );
    $(`.${categories[0]}`).toggleClass(`path-color-${color}`);
  } else {
    $(
      `#landmarks-level1 polygon:not(.Restaurants,.Clothes,.Stores)`
    ).toggleClass("path-color-black");
  }
}

function removeClasses() {
  $(`#landmarks-level1 polygon`).removeClass(function (index, className) {
    return (className.match(/(^|\s)path-color-\S+/g) || []).join(" ");
  });
}

function details(detail) {
  if (detail["img"]) {
    $("#d-img").attr("src", `./assets/images/logos/${detail["img"]}`);
    $("#d-title").text(detail["title"]);
    $("#d-size").text(detail["size"]);
    $("#d-details").text(detail["details"]);
  }
}

function toggleOn() {
  $("#clicked").removeClass("d-none");
  $("#clicked").addClass("d-flex");
}

function toggleOff() {
  $("#clicked").removeClass("d-flex");
  $("#clicked").addClass("d-none");
}
