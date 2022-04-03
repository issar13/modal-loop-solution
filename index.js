$('body').on('hidden.bs.modal', '.modal', function () {
  $(this).find('approvedstat').trigger('reset');
  $(this).data('.modal', null);
  $("select").val('0');
  $("input[name='comment']").prop('disabled', true);
});

//on modal approved opening ensure  the function ready to be used on the dropdown list
$('body').on('show.bs.modal', '.modal', function () {
  $(this).find('#approvedstat').trigger('reset');
  $(this).data('.modal', null);
  $("select").change(function(){
    var rejected = $('option:selected',this).text();
    console.log(rejected)
    if (rejected == 'Rejected') {
     //disable the input
     $("input[name='comments']").prop('disabled', false)
    } else {
      //enable the input
      $("input[name='comments']").prop('disabled', true)
    }
  });
},);
