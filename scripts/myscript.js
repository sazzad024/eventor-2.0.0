$(document).ready(function(){

    $("#c-switch-1").click(function(){
        transMe();
      $("html").attr("data-color","set-1");
    });
    $("#c-switch-2").click(function(){
        transMe();
      $("html").attr("data-color","set-2");
    });
    $("#c-switch-3").click(function(){
        transMe();
      $("html").attr("data-color","set-3");
    });
    $("#c-switch-4").click(function(){
        transMe();
      $("html").attr("data-color","set-4");
    });
    function transMe(){
        $("html").addClass("transition");
    }
  });


/*
let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}
*/