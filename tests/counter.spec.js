var Model = require("../models/counter");
var	dbMockup = {name:"xxx",countNumber:2};
describe("Models", function() {
	it("should create a new model", function(next) {
		var model = new Model(dbMockup);
		expect(model.name).toBeDefined();
		expect(model.countNumber).toBeDefined();
		next();
	})
});