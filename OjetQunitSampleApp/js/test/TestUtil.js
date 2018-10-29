/*
 * This is the utility script to mock the data for testing.
 */

define(['jquery', 'node_modules/jquery-mockjax/src/jquery.mockjax'], function ($, mockjx) {
    function TestUtil() {
        var self = this;
        var jsonObj = [{"Id": "1", "name": "CUST001", "url": "www.cust001.com"}];

        var areaSeries = [{name: "Series 1", items: [74, 42, 70, 46]},
            {name: "Series 2", items: [50, 58, 46, 54]},
            {name: "Series 3", items: [34, 22, 30, 32]},
            {name: "Series 4", items: [18, 6, 14, 22]}];
        var areaGroups = ["Group A", "Group B", "Group C", "Group D"];

        var barSeries = [{name: "Series 1", items: [42, 34]},
            {name: "Series 2", items: [55, 30]},
            {name: "Series 3", items: [36, 50]},
            {name: "Series 4", items: [22, 46]},
            {name: "Series 5", items: [22, 46]}];
        var barGroups = ["Group A", "Group B"];

        self.custObj = [{}];
        self.prepareCustomerData = function () {
            //console.log("Customer data preparation");
            $.mockjax({
                url: '/customers',
                contentType: 'application/json',
                responseText: {
					data : jsonObj,
					status : 'ok'
				}
            });

            $.mockjax({
                url: '/addcustomers',
                type: 'post',
                contentType: 'application/json',
                responseText: {
                    success: true,
                    id: 99
                }
            });

        };

        self.prepareDashboardData = function () {

            self.expAreaSeries = [{name: "Series 1", items: [74, 42, 70, 46]},
                {name: "Series 2", items: [50, 58, 46, 54]},
                {name: "Series 3", items: [34, 22, 30, 32]},
                {name: "Series 4", items: [18, 6, 14, 22]}];
            self.expAreaGroups = ["Group A", "Group B", "Group C", "Group D"];

            self.expBarSeries = [{name: "Series 1", items: [42, 34]},
                {name: "Series 2", items: [55, 30]},
                {name: "Series 3", items: [36, 50]},
                {name: "Series 4", items: [22, 46]},
                {name: "Series 5", items: [22, 46]}];
            self.expBarGroups = ["Group A", "Group B"];

            $.mockjax({
                url: '/dashboardbarchart',
                type: 'get',
                contentType: 'application/json',
                responseText: {
                    success: true,
                    barGroups: barGroups,
                    barSeries: barSeries
                }
            });

            $.mockjax({
                url: '/dashboardareachart',
                type: 'get',
                contentType: 'application/json',
                responseText: {
                    success: true,
                    areaGroups: areaGroups,
                    areaSeries: areaSeries
                }
            });
        };
        self.defaultIncidents = [{"id": 1, "item": "Information"},
            {"id": 2, "item": "Warning"},
            {"id": 3, "item": "Error"},
            {"id": 4, "item": "Severe"}];
        self.addIncident = "Test";


    }
    return new TestUtil();
});

