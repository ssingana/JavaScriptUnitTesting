define(['viewModels/incidents', 'test/TestUtil'], function (incident, helper) {
    describe("Incidents Module", function(){

    it("Default Incidents Test", function () {
        //console.log("Helper Incidents : " + JSON.stringify(helper.defaultIncidents));
        //console.log("Initial Incidents : " + JSON.stringify(incident.allItems()));
        expect(helper.defaultIncidents).toEqual(incident.allItems());
    });

    it("Adding new incident Test", function () {
        //var done = assert.async(1, true);
        incident.itemToAdd(helper.addIncident);
        incident.addItem();
        //done();
        console.log("Incidents after adding new one : " + JSON.stringify(incident.allItems()));
        expect(incident.allItems().length).toEqual(5);
    });
    it("Removing incident Test", function () {
        //console.log("Incidents before removing : " + JSON.stringify(incident.allItems()));
        //var done = assert.async(1, true);
        incident.selectedItems({"id": 4, "item": "Severe"});
        incident.removeSelected();
        //done();
        console.log("Incidents after removing new one : " + JSON.stringify(incident.allItems()));
        expect(incident.allItems().length).toEqual(4);
    });
    });
});

