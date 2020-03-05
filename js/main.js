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

    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      width: "25rem",
    })

  });
});
