define(['viewModels/dashboard', 'test/TestUtil'], function (dashboard, helper) {
    QUnit.module("Dashboard Module", {
        before: function () {
            helper.prepareDashboardData();
        }
    });
    QUnit.test("Handle Activated Test Case.", function (assert) {
        dashboard.handleActivated("OJET_QUNIT", function (infore) {
            assert.equal(infore, "Test", "Object Returned is equal.");
        });
    });
    QUnit.test("Handle Attached Test Case.", function (assert) {
        assert.expect(0);
        dashboard.handleAttached("OJET_QUNIT");
    });

    QUnit.test("Bar Chart Testing.", function (assert) {
         //assert.expect(2);
        var done = assert.async(1, true);
        dashboard.getDashboardBarchartData("/dashboardbarchart", function (data) {
            //  console.log("BAR CHART DATA : " + JSON.stringify(data));
            done();
            assert.deepEqual(data.barGroups, helper.expBarGroups, "Comparing the Bar chart Groups data failed.");
            assert.deepEqual(data.barSeries, helper.expBarSeries, "Comparing the Bar chart Series data failed.");
        });

    });
    QUnit.test("Area Chart Testing.", function (assert) {
        var done = assert.async(1, true);
        dashboard.getDashboardBarchartData("/dashboardareachart", function (data) {
            //console.log("AREA CHART DATA : " + JSON.stringify(data));
            done();
            assert.deepEqual(data.areaGroups, helper.expAreaGroups, "Comparing the Area chart Groups data failed.");
            assert.deepEqual(data.areaSeries, helper.expAreaSeries, "Comparing the Area chart Series data failed.");
        });

    });


});

