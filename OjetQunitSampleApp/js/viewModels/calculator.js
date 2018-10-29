
define(
 function() {
  
    function CalModule() {
      var self = this;
        
      self.addn = function(a, b) {
        return a+b;
      };
	   self.muln = function(a, b) {
        return a*b;
      };
	   self.subn = function(a, b) {
        return a-b;
      };     

    }
    return new CalModule();
  }
);
