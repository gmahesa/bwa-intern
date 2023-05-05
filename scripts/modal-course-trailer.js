function trailerSet(element) {
  var targetModalId = element.getAttribute("data-bs-target");
  //   var trailerCode = element.getAttribute("data-trailer");
  //   var courseName = element.getAttribute("data-course-name");
  var src = `https://www.youtube.com/embed/XWwzyWKZlGA`;

  //Append Course Name in modal header
  document.getElementById("staticBackdropLabel").innerHTML = `Trailer Kelas: <span class="text-semibold">namakelas</span>`;

  //Get <iframe> element
  var iframe = targetModalId + " #player iframe";

  $(iframe).attr("src", src);

  //Save video source url
  var url = $(iframe).attr("src");
  //console.log(url)

  /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
  $(targetModalId).on("shown.bs.modal", function () {
    $(iframe).attr("src", url);
    // Force disable window scroll
    checkScroll(true);
  });

  /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
  $(targetModalId).on("hide.bs.modal", function () {
    $(iframe).attr("src", "");
    // Enable window scroll
    checkScroll(false);
  });
}
