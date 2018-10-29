define(['viewModels/calculator'], function (calc) {
    describe("calculator module", function () {
        it("Adding two numbers.", function() {
            expect(calc.addn(5, 8)).toEqual(13);
        });
		it("Multiplication of 5 and 8.", function() {
            expect(calc.muln(5, 8)).toEqual(40);
        });
    });
});