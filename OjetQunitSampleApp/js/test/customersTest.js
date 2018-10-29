define(['viewModels/customers','test/TestUtil'], function (cust,helper) {
    QUnit.module("Customer Module",{
		
	before: function() {		
		helper.prepareCustomerData();
	},
//	beforeEach: function() {
//		console.log("prepare something before each test");
//	},
//	afterEach: function() {
//		console.log("clean up after each test");
//	},
//	after: function() {
//		console.log("clean up once after all tests are done");
//	}
	});	
    QUnit.test("Customer function Test case.", function (assert) {
        cust.handleActivated("OJET_QUNIT", function (infore) {
            assert.equal(infore, "OJET_QUNIT", "Object Returned is equal.");
        });
    });
    QUnit.test("Comparing Array object .", function (assert) {
        //assert.expect(0);
		var expectedArray = [{"id": 1, "first_name": "Jameson", "last_name": "Dunley", "email": "jdunley0@nih.gov"},
                    {"id": 2, "first_name": "Kent", "last_name": "Trayling", "email": "ktrayling1@macromedia.com"},
                    {"id": 3, "first_name": "Ase", "last_name": "Langstone", "email": "alangstone2@mtv.com"},
                    {"id": 4, "first_name": "Etty", "last_name": "Deners", "email": "edeners3@slashdot.org"}];

        cust.handleAttached("OJET_QUNIT", function (data) {
            assert.deepEqual(data, expectedArray, "Deepequal of array failed.");
        });
    });

    QUnit.test("Reading customers.", function (assert) {
        var done = assert.async(1, true);
        cust.getcustomers("/customers", function (data) {
            done();
            assert.equal(data.status, "ok", "Customers returned properly.");
        });
    });
	
    QUnit.test("Testing the variables.", function (assert) {        
        assert.equal(cust.jsonobjarr.length, "4", "Test of json object array length checking.");
    });
	
	QUnit.skip("Functionality Yet To Implement.", function (assert) {
        //console.log("JSON to String value : " + JSON.stringify(cust.jsonobjarr));
        
        assert.equal(cust.jsonobjarr.length, "4", "Test of json object array length checking.");
    });
});

