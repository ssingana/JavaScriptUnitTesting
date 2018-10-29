/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojtable', 'ojs/ojarraytabledatasource', 'ojs/ojbutton', 'ojs/ojchart', 'ojs/ojtoolbar'],
        function (oj, ko, $) {

            function DashboardViewModel() {
                var self = this;

                self.handleActivated = function (info, callback) {
                    console.log("oj language method  called ");
                    if (callback && typeof (callback) === "function")
                        callback("Test");
                };
                self.handleAttached = function (info) {
                    var i = 0;
                };
                self.handleBindingsApplied = function (info) {
                    var method = 'handleBindingsApplied';
                };
                self.handleDetached = function (info) {
                    // Implement if needed
                };

                var deptArray = [{DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 556, DepartmentName: 'BB', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 60, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 70, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300},
                    {DepartmentId: 80, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300}];
                self.datasource = new oj.ArrayTableDataSource(deptArray, {idAttribute: 'DepartmentId'});

                // Basic Bar Chart code starts here.
                self.stackValue = ko.observable('off');
                self.orientationValue = ko.observable('vertical');

                /* chart data */
                var barSeries = [{name: "Series 1", items: [42, 34]},
                    {name: "Series 2", items: [55, 30]},
                    {name: "Series 3", items: [36, 50]},
                    {name: "Series 4", items: [22, 46]},
                    {name: "Series 5", items: [22, 46]}];

                var barGroups = ["Group A", "Group B"];

                self.barSeriesValue = ko.observableArray(barSeries);
                self.barGroupsValue = ko.observableArray(barGroups);

                /* toggle buttons*/
                self.stackOptions = [
                    {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-bar-unstack'},
                    {id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-bar-stack'}
                ];
                self.orientationOptions = [
                    {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-bar-vert'},
                    {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-bar-horiz'}
                ];

                //Area Chart sample code
                /* chart data */
                var areaSeries = [{name: "Series 1", items: [74, 42, 70, 46]},
                    {name: "Series 2", items: [50, 58, 46, 54]},
                    {name: "Series 3", items: [34, 22, 30, 32]},
                    {name: "Series 4", items: [18, 6, 14, 22]}];

                var areaGroups = ["Group A", "Group B", "Group C", "Group D"];


                this.areaSeriesValue = ko.observableArray(areaSeries);
                this.areaGroupsValue = ko.observableArray(areaGroups);

                /* toggle buttons*/
                self.stackOptions = [
                    {id: 'unstacked', label: 'unstacked', value: 'off', icon: 'oj-icon demo-area-vert'},
                    {id: 'stacked', label: 'stacked', value: 'on', icon: 'oj-icon demo-area-stack'}
                ];
                self.orientationOptions = [
                    {id: 'vertical', label: 'vertical', value: 'vertical', icon: 'oj-icon demo-area-vert'},
                    {id: 'horizontal', label: 'horizontal', value: 'horizontal', icon: 'oj-icon demo-area-horiz'}
                ];
                
                  self.getDashboardBarchartData = function (urlPath, callback) {
                    $.ajax({
                        url: urlPath,
                        type: 'GET',
                        data: 'json',
                        success: function (data) {
                            if (callback && typeof (callback) === "function")
                                callback(data);
                        },
                        error: function (error) {
                            callback(error);
                        }
                    });
                };
                
                  self.getDashboardAreachartData = function (urlPath, callback) {
                    $.ajax({
                        url: urlPath,
                        type: 'GET',
                        data: 'json',
                        success: function (data) {
                            if (callback && typeof (callback) === "function")
                                callback(data);
                        },
                        error: function (error) {
                            callback(error);
                        }
                    });
                };

            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constrcuted
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new DashboardViewModel();
        }
);
