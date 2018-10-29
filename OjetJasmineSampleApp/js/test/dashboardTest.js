define(['viewModels/dashboard', 'test/TestUtil'], function (dashboard, helper) {
    describe("Dashboard Module", function() {
        beforeAll(function () {
            helper.prepareDashboardData();
        });
    
    it("Handle Activated Test Case.", function () {
        dashboard.handleActivated("OJET_QUNIT", function (infore) {
            expect(infore).toEqual("Test");
        });
    });
    it("Handle Attached Test Case.", function () {
        dashboard.handleAttached("OJET_QUNIT");
    });
	describe("", function() {
		var aData = {};
		beforeEach(function(done){
			dashboard.getDashboardBarchartData("/dashboardbarchart", function (data) {
				console.log("BAR CHART DATA RETURNED : " + JSON.stringify(data));
				aData = data;
				done();
				});				
		});
		it("Bar Chart Testing.", function (done) {       
            console.log("BAR CHART DATA : " + aData);
            expect(aData.barGroups).toHaveSameItems(helper.expBarGroups);
            expect(aData.barSeries).toHaveSameItems(helper.expBarSeries);
			done();
       });
	});
   
   describe("", function() {
	   var aData = {};
		beforeEach(function(done){
			dashboard.getDashboardBarchartData("/dashboardareachart", function (data) {
				aData = data;
				done();
				});				
		});
   it("Area Chart Testing.", function (done) { 
            expect(aData.areaGroups).toHaveSameItems(helper.expAreaGroups);
            expect(aData.areaSeries).toHaveSameItems(helper.expAreaSeries);
				done();
    });
	});
	
	
});

});

