/*global $ */


// originally had >1 header
var header = ["H1"];

$(".accordion").click(function(e) {
  var target = e.target,
      name = target.nodeName.toUpperCase();
  
  //var selected;
  
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
    
   // $(target).css("background-color","#CEE5EE");
    
    //slideToggle target content and adjust bottom border if necessary
    subItem.slideToggle("fast",function() {
        //$(target).css("background-color","#CEE5EE");
    });
 //   $(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"});
  }
});