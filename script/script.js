$(document).ready(function () {
    $("#description").hover(function () {
      $("#description").removeClass("text").addClass("description");
      $("#description").text(
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, magni!"
      );
    });
  });

  $(document).ready(function () {
    $("#description").hover(function () {
      $("#description").mouseout(function () {
        $("#description").text("description").removeClass("description").addClass("text");
      });
    });
  });