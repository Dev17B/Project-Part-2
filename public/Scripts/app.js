(function(){
  function Start()
  {
    console.log("App Started");
    let deleteButtons = document.querySelectorAll('.btn-danger');
    for(button of deleteButtons)
    {
      button.addEventListener('cleck',(event)=>{
        if(!confirm("Are you Sure?"))
        {
          event.preventDefault();
          window.location.assign('/wikipedia');
        }
      });
    }
  }
  window.addEventListener("load",Start);

})();