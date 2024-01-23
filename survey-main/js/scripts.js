$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    const firstName = $("input#first-name").val();
    const lastName = $("input#last-name").val();
    const dob = $("#born").val();
    const favoriteColor = $("#color").val();
    const podcast = $("#podcast").val();
    const drive = $("input:radio[name=answer]:checked").val();
    event.preventDefault();
    // Hides form once submitted. Displays a thank-you to user. 
    $(".before").hide();
    $(".thank-you").show();
  });
});
