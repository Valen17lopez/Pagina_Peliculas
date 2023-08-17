document.addEventListener('DOMContentLoaded', function() {
    const modalButtons = document.querySelectorAll('.modal-button');
    const closeModalBtns = document.querySelectorAll('.close-ModalBtn');
    const modalContainers = document.querySelectorAll('.modal-container');
  
    modalButtons.forEach(button => {
      button.addEventListener('click', function() {
        const modalId = button.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.style.display = 'flex';
      });
    });
  
    modalContainers.forEach(container => {
      container.addEventListener('click', function(e) {
        if (e.target === container) {
          container.style.display = 'none';
        }
      });
    });
  });


$(document).ready(function(){
    $("#input_buscar").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".sip .Pcaj").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});

const imagenesHover = document.querySelectorAll('.imagen-hover');
const ventanasFlotantes = document.querySelectorAll('.ventana-flotante');

imagenesHover.forEach((imagen, index) => {
    imagen.addEventListener('mouseenter', () => {
        ventanasFlotantes[index].style.display = 'block';
    });

    imagen.addEventListener('mouseleave', () => {
        ventanasFlotantes[index].style.display = 'none';
    });
});



$('.itemcategoria').click(function(){
  var categoria = $(this).attr('category');

  // ocultar todo
  $('.Pcaj').css('transform','scale(0)')
  function borrar() {
  $('.Pcaj').hide(); 
  }setTimeout(borrar,400);


  //filtrar categoria
  function mostrar() {

  $('.Pcaj[category="'+categoria+'"]').css('transform','scale(1)');
   $('.Pcaj[category="'+categoria+'"]').show();

   if ($('.Pcaj[category="'+categoria+'"]').show()==0) {

   }

  }setTimeout(mostrar,400);

})

$('.itemcategoria[category="all"]').click(function(){
  // mostrar todo
  function todo(){
      $('.Pcaj').show();
      $('.Pcaj').css('transform','scale(1)');
  }setTimeout(todo,400)

})