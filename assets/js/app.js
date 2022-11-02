let last = "";
$(document).ready(function () {
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
      //   $("#tooltip #content div").remove();
      // $("#clicked div").remove();
      //   $("#tooltip #content").append(details(detail));
      //   $("#tooltip").css("top", mouse.pageY - 100);
      //   $("#tooltip").css("left", mouse.pageX);

      last = $(this).attr("data-title");
    })
    .mouseleave(function (mouse) {
      toggleOff();
      if (last != $(this).attr("data-title")) {
        //   $("#clicked div").remove();
        //   $("#tooltip #content div").remove();
      } else {
      }
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
