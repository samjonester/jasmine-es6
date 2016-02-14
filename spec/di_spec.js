import TestObject from './test_object';

describe('DI', () => {
	it('should let me inject', () => {
		let dependency = {
			doMoreStuff: () => {}
		}
		spyOn(dependency, 'doMoreStuff');

		let subject = new TestObject({dependency: dependency});

		subject.doStuff();
		expect(dependency.doMoreStuff).toHaveBeenCalled();
	});

	it('should call real method', () => {
		let subject = new TestObject();

		let results = subject.doStuff()
		expect(results).toBe(true);
	});
});
