/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'promise', 'ojs/ojinputtext', 'ojs/ojinputnumber', 'ojs/ojtable', 'ojs/ojarraytabledatasource'],
        function (oj, ko, $) {

            function IncidentsViewModel() {
                //var self = this;

                this.itemToAdd = ko.observable("");
                this.allItems = ko.observableArray([{"id": 1, "item": "Information"},
                    {"id": 2, "item": "Warning"},
                    {"id": 3, "item": "Error"},
                    {"id": 4, "item": "Severe"}
                ]);
                this.selectedItems = ko.observableArray([]);

                var lastItemId = this.allItems().length;

                this.dataSource = new oj.ArrayTableDataSource(this.allItems, {idAttribute: "id"});

                this.addItem = function ()
                {
                    if ((this.itemToAdd() != "") && (this.allItems.indexOf(this.itemToAdd()) < 0))
                    {
                        lastItemId++;
                        this.allItems.push({"id": lastItemId, "item": this.itemToAdd()});
                    }
                    this.itemToAdd(""); // Clear the text box
                };

                var self = this;
                this.removeSelected = function ()
                {
                    $.each(this.selectedItems(), function (index, value)
                    {
                        self.allItems.remove(function (item)
                        {
                            return (item.id == value);
                        });
                    });
                };

                this.updateSelected = function ()
                {
                    $.each(this.selectedItems(), function (index, value)
                    {
                        self.dataSource.change({"id": value, "item": self.itemToAdd()});
                    });
                };

                this.updateSelected2 = function ()
                {
                    $.each(this.selectedItems(), function (index, value)
                    {
                        self.dataSource.change({"id": value, "item": self.itemToAdd()});
                    });
                };

            }
            return new IncidentsViewModel();
        }
);
