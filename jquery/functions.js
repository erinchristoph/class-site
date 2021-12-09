$( function() {
  $( ".draggable" ).draggable();
  $( ".droppable" ).droppable({
    drop: function( event, ui ) {
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .html( "Dropped!" );
    }
  });
} );




document.onkeydown = detectKey;
var boundaries = {
  left: 0;
}
function detectKey(e) {
    var posLeft = document.getElementById('circle').offsetLeft;
    var posTop = document.getElementById('circle').offsetTop;
    e = e || window.event;
    if (e.keyCode == '38') {
        // up arrow
        document.getElementById('circle').style.marginTop  = (posTop-25)+"px";
    }
    else if (e.keyCode == '40') {
        // down arrow
        document.getElementById('circle').style.marginTop  = (posTop+10)+"px";
    }
    else if (e.keyCode == '37') {
       // left arrow
        document.getElementById('circle').style.marginLeft  = (posLeft-25)+"px";
    }
    else if (e.keyCode == '39') {
       // right arrow
        document.getElementById('circle').style.marginLeft  = (posLeft+10)+"px";
    }
}
