//this is the jquery function that is used to control modals when it's called there's a similar one that can do the opposite when it's closed
$('body').on('show.bs.modal', '.modal', function () {
  //on modal open reset the values inside the form to inital values form name is #approvedstat
  $(this).find('#approvedstat').trigger('reset');
  //same as above in ensuring the modal has null values
  $(this).data('.modal', null);
//this is the solution that solved my problem by calling the function inside the modal it ensured the looped modals with same values are isolated and
//you can basically manipulate the elements individually.
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
