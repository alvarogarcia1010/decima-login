$(document).ready(function()
{
  $("#change-user").click(function(event)
  {
    event.preventDefault();
    $("#user-container").addClass("d-none");
    $("#email-conteiner").removeClass("d-none");
  });

  $("#btn-next").click(function(event)
  {
    event.preventDefault();
    if($("#email-conteiner").is(":visible"))
    {
      $("#email-conteiner").addClass("d-none");
      $("#user-container").removeClass("d-none");
    }
    else
    {
      alert("Enviando form.");
    }

  });
});
