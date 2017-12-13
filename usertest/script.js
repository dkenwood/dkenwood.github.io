var header = ["H1"];

$(".accordion").click(function(e) {
  var target = e.target,
      name = target.nodeName.toUpperCase();
  
  $( "h1" ).removeClass( "selected" )
  $(target).addClass("selected");
  
  if($.inArray(name,header) > -1) {
    var subItem = $(target).next();
    
    //slideUp all elements (except target) at current depth or greater
    var depth = $(subItem).parents().length;
    var allAtDepth = $(".accordion p, .accordion div").filter(function() {
      if(depth === 0) {
        return false;
      }
      if($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true; 
      }
    });
    $(allAtDepth).slideUp("fast");
    
    //slideToggle target content
    subItem.slideToggle("fast",function() {
    });
  }
});