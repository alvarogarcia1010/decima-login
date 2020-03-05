$(document).ready(function()
{
  $("#change-user").click(function(event)
  {
    event.preventDefault();
    $("#user-container").addClass("d-none");
    $("#email-conteiner").removeClass("d-none");
  });

  $('#change-user').tooltip();

  $("#btn-next").click(function(event)
  {
    event.preventDefault();

    Swal.fire({
      icon: 'error',
      title: 'Su correo y/o contraseña es incorrecto',
      text: 'Vuelva a intentarlo o haga clic en "¿Olvidó su contraseña?" para restablecerla.',
      width: "25rem",
      customClass:
      {
        title: 'font-size-small',
        content: 'font-size-small-content',
        cancelButton: 'bg-danger custom-btn-padding',
      },
      showConfirmButton: false,
      showCancelButton: true,
      cancelButtonText: "Cancelar",

    })

  });

    $("#btn-send-password-reminder").click(function(event)
    {
      event.preventDefault();

      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Se ha enviado un correo para restablecer su cuenta.',
        width: "25rem",
        customClass:
        {
          title: 'font-size-small',
          content: 'font-size-small-content',
          cancelButton: 'bg-primary custom-btn-padding',
        },
        showConfirmButton: false,
        showCancelButton: true,
        cancelButtonText: "Aceptar",

      })

    });
});
