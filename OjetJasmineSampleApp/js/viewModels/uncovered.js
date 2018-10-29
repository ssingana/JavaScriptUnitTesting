
define(
        function () {

            function CalModule() {
                var self = this;

                self.addn = function (a, b) {
                    var sum = 0;
                    sum = a + b;
                    return sum;
                };
                self.muln = function (a, b) {
                    return a * b;
                };
                self.subn = function (a, b) {
                    var time = 0;
                    if (time < 10) {
                        greeting = "Good morning";
                    } else if (time < 20) {
                        greeting = "Good day";
                    } else {
                        greeting = "Good evening";
                    }
                    return a - b;
                };

            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new CalModule();
        }
);
