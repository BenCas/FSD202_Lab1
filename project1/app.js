$(document).ready(function (){
})
$("#btnAdd").click(addTodo);

$('#done').click(function() {
    return !$('#todo li :checked').closest('li').appendTo('#complete');
});


function addTodo(){
    var txt = $("#addTodos");  
    var text = txt.val();  
    txt.val(''); 

    addItem(text);
}

function addItem(name){
    $("#todo").append('<li>' + name + '<input type ="checkbox">'+ '</li>')
}
$(function(){
    var checkedbox;
    $('input[type="checkbox"]').on('change', function(){
      if($(this).prop('checked', 'checked')){
        checkedbox = $(this).parent().clone();
      }
      $(this).parent().remove();
      $('#complete').prepend(checkedbox);
    })
  })
 

