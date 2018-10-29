define(['viewModels/calculator'], function (calc) {
    var sum = calc.addn(5, 8);
    //console.log("First statement Sum of 5 and 8 is : " + sum);
    QUnit.module("Calculator");
    QUnit.test("Addition of two numbers", function (assert) {
        var sum = calc.addn(5, 8);
        assert.equal(sum, "13", "Sum of 5 and 8 is 13.");
    });
    QUnit.test("Multification of two numbers", function (assert) {
        var mul = calc.muln(2.5,2.5);
        assert.strictEqual(mul, 6.25, "Strict equal comaprasion failed.");
    });
	QUnit.test("Addition of two numbers", function (assert) {
        var sum = calc.addn(5, 8);
        assert.equal(sum, "13", "Adding two numbers failed.");
    });
});