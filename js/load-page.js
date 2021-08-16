$(document ).ready(function(){
  $('a').click(function(e){
    e.preventDefault()

    let page = $(this).attr('href')

    $('.modal-tittle').empty()
    $('.modal-body').empty()

    alert(page)
  })
})