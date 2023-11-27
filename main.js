function filterBar(skills) {

  var input = document.getElementById('filter')
  var filter = input.value.toUpperCase()
  var ul = document.getElementById('elements')
  var li = ul.getElementsByTagName('li')

  for (var i = 0; i < li.length; i++) {
    var languageP = li[i].getElementsByTagName('p')[0]
    var languageValue = languageP.textContent || languageP.innerText;

    if (languageValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = 'block'
    } else {
      li[i].style.display = 'none'
    };
  };
};


// Lee los comentarios de este código para entender lo que hace 🔴
document.querySelector('.ancore').addEventListener('click', (ev) => {
  ev.preventDefault(); // Esto hace que el link no cargue la URL a la que apunta
  const linkHref = ev.target.href; // Almacenamos la URL en una constante
  console.log('El link apunta a:', linkHref ); // La mostramos en consola
  // Añade aquí tu lógica! 🔽
  })
  