define(['viewModels/incidents', 'test/TestUtil'], function (incident, helper) {
    QUnit.module("Incidents Module", {
        before: function () {
        }
    });
    QUnit.test("Default Incidents Test", function (assert) {
        //console.log("Helper Incidents : " + JSON.stringify(helper.defaultIncidents));
        //console.log("Initial Incidents : " + JSON.stringify(incident.allItems()));
        assert.deepEqual(helper.defaultIncidents, incident.allItems(), "Default incidents not matched.");
    });

    QUnit.test("Adding new incident Test", function (assert) {
        var done = assert.async(1, true);
        incident.itemToAdd(helper.addIncident);
        incident.addItem();
        done();
        //console.log("Incidents after adding new one : " + JSON.stringify(incident.allItems()));
        assert.equal(incident.allItems().length, "5", "Incident not added correcty.");
    });
    QUnit.test("Removing incident Test", function (assert) {
        //console.log("Incidents before removing : " + JSON.stringify(incident.allItems()));
        var done = assert.async(1, true);
        incident.selectedItems({"id": 4, "item": "Severe"});
        incident.removeSelected();
        done();
        //console.log("Incidents after removing new one : " + JSON.stringify(incident.allItems()));
        assert.equal(incident.allItems().length, "4", "Incident not removed.");
    });
});

