define(['viewModels/customers','test/TestUtil'], function (cust,helper) {
    describe("Customer Module", function(){
		
	beforeAll(function() {		
		helper.prepareCustomerData();
	});
	
    it("Customer function Test case.", function () {
        cust.handleActivated("OJET_QUNIT", function (infore) {
            expect(infore).toEqual("OJET_QUNIT");
        });
    });
    it("Comparing Array object .", function () {
        //assert.expect(0);
		var expectedArray = [{"id": 1, "first_name": "Jameson", "last_name": "Dunley", "email": "jdunley0@nih.gov"},
                    {"id": 2, "first_name": "Kent", "last_name": "Trayling", "email": "ktrayling1@macromedia.com"},
                    {"id": 3, "first_name": "Ase", "last_name": "Langstone", "email": "alangstone2@mtv.com"},
                    {"id": 4, "first_name": "Etty", "last_name": "Deners", "email": "edeners3@slashdot.org"}];

        cust.handleAttached("OJET_QUNIT", function (data) {
            expect(data).toHaveSameItems(expectedArray);
        });
    });

    describe("", function() {
		var aData = {};
		beforeEach(function(done){
			cust.getcustomers("/customers", function (data) {
				aData = data;
				done();
				});				
		});
	it("Reading customers.", function (done) {            
            expect(aData.status).toEqual("ok");
			done();
    });
	});
	
    it("Testing the variables.", function () {        
        expect(cust.jsonobjarr.length).toEqual(4);
    });
	
	xit("Functionality Yet To Implement.", function () {        
        expect(cust.jsonobjarr.length).toEqual("4");
    });
});
});

