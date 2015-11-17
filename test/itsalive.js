var chai = require('chai'),
	expect = chai.expect,
	spies = require('chai-spies');

chai.use(spies);

describe("simple test", function() {
	it("adds 2 + 2 to equal 4", function() {
		expect(2+2).to.equal(4);
	});

	it("handles asynchronous calls & confirms setTimeout's timer accuracy", function(done){
		var start = new Date();
		setTimeout(function(){
			var duration = new Date() - start;
			expect(duration).to.be.closeTo(1000, 50);
			done();
		}, 1000)
	});

	it("spies on functions and knows how many times they are called", function() {
		var array = [1,2,3,4,5];
		function returnNum(num) {return num};
		var spiedReturnNum = chai.spy(returnNum);
		array.forEach(spiedReturnNum);
		expect(spiedReturnNum).to.have.been.called.exactly(5);
	})
});