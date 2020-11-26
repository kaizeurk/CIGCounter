describe("MongoDB", function() {
	it("is there a server running", function(next) 
	{
		var MongoClient = require('mongoose');
		MongoClient.connect('mongodb+srv://admin:admin@clustercounter.xejfi.mongodb.net/countersdb?retryWrites=true&w=majority', function(err, db) {
			expect(err).toBe(null);
			expect(db).toBeDefined();
			next();
		});
	});
});