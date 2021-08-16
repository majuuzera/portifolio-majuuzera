$(document ).ready(function(){
  $('a').click(function(e){
    e.preventDefault()

    let page = $(this).attr('href')

    $('.modal-tittle').empty()
    $('.modal-body').empty()

  switch(page){
    case 'about':
      $('.modal-tittle').append('Sobre')
      $('.modal-body').append(´<p>lorem</p>´)
      $('#modal-info').modal('show')
      break

    case 'work':
      $('.modal-tittle').append('Projetos')
      $('.modal-body').append('meus trabalhos')
      $('#modal-info').modal('show')
      break

    case 'client':
      $('.modal-tittle').append('Parceiros')
      $('.modal-body').append('meus parceiros')
      $('#modal-info').modal('show')
      break

    case 'contact':
      $('.modal-tittle').append('Contato')
      $('.modal-body').append('entre em contato')
      $('#modal-info').modal('show')
      break  
      default: alert('link não encontrado')

      
      
  }
  })
})