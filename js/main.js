// var instance = M.Tabs.init(el, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.tabs').tabs();
    $('.collapsible').collapsible();
    $('#textarea1').val('Description');
    M.textareaAutoResize($('#description'));
    $("#have-done-form").click(function() {
      console.log("Clicked the have done form");
      showHaveDoneForm();
    });
  });


  function showHaveDoneForm() {
    $("#have-done-form").removeClass('hide');
  }

  function showAddWorkingOnForm() {

  }

  function showAddBlockerForm() {

  }

  $(".show-have-done").click(function() {
    console.log("Clicked the have done form");
    showHaveDoneForm();
  });