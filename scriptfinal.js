$(document).ready(() => {
  $("#menu .nav-toggle").on("click", () => {
    $("#menu ul").slideToggle("medium");
  });

  
  $("#contacto").on("submit", function (event) {
    event.preventDefault();
    alert("Formulario enviado correctamente.");
   
    if (
        !$("#nombre").val()
      ) {
        alert("Por favor, complete todos los campos del formulario.");
      }
    
    const frmdatos = {
      nombre: $("#nombre").val(),
      email: $("#email").val(),
      asunto: $("#asunto").val(),
      mensaje: $("#mensaje").val(),
    };
    console.log(frmdatos);

   
    /*
    $.ajax({
        type:"POST",
        url:"https://formspree.io/f/mjvovqod",
        data: frmdatos,
        success: function(response){
            
        }, 
        error:function(error){
            console.error("Error al enviar el formulario",  error);
        }
    });
    */
  });
});
