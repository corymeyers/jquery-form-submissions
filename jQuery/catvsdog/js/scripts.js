$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#catlist").prepend("<li>Hiss!</li>");
    $("ul#doglist").prepend("<li>Grrrr!</li>");

    $("ul#catlist").children("li").first().click(function() {
      alert("This is how you make a list element clickable, and removable.");
      $(this).remove();
    });

    $("ul#doglist").children("li").first().click(function() {
      alert("This is how you make a list element clickable.");
    });
  })

  $("button#dog").click(function() {
    $("ul#doglist").prepend("<li>Bark!</li>");
    $("ul#catlist").prepend("<li>Rrwrral!</li>");
  })
});
