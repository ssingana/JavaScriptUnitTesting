/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery'],
        function (oj, ko, $) {

            function CustomerViewModel() {
                var self = this;

                self.jsonobjarr = [{"id": 1, "first_name": "Jameson", "last_name": "Dunley", "email": "jdunley0@nih.gov"},
                    {"id": 2, "first_name": "Kent", "last_name": "Trayling", "email": "ktrayling1@macromedia.com"},
                    {"id": 3, "first_name": "Ase", "last_name": "Langstone", "email": "alangstone2@mtv.com"},
                    {"id": 4, "first_name": "Etty", "last_name": "Deners", "email": "edeners3@slashdot.org"}];

                self.handleActivated = function (info, callback) {
                    if (callback && typeof (callback) === "function")
                        callback(info);
                };
                self.handleAttached = function (info, callback) {
                    console.log("handleAttached method called ." + info);
                    if (callback && typeof (callback) === "function")
                        callback(self.jsonobjarr);
                };
                self.handleBindingsApplied = function (info) {
                    console.log("handleAttached method called .");
                };
                self.handleDetached = function (info) {
                    console.log("handleAttached method called .");
                };
                self.getcustomers = function (urlPath, callback) {
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

                self.addcustdata = function (urlPath, callback) {
                    $.ajax({
                        url: urlPath,
                        type: 'POST',
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

                self.testOjectlibs = function (callback) {

                };
            }
            ;
            return new CustomerViewModel();
        }
);
