$(document).ready(function()
{
  $('.validate-form .form-control').each(function()
  {
      $(this).focus(function()
      {
         hideValidate(this);
      });
  });

  function validate (input) {
      if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
          if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
              return false;
          }
      }
      else {
          if($(input).val().trim() == ''){
              return false;
          }
      }
  }

  function showValidate(input) {
      var thisAlert = $(input).parent();

      $(thisAlert).addClass('alert-validate');
  }

  function hideValidate(input) {
      var thisAlert = $(input).parent();
      console.log(thisAlert)
      $(thisAlert).removeClass('alert-validate');
  }

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
