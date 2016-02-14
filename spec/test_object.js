import Dependency from './dependency'

export default class TestObject {
	constructor(args = {}) {
		this.dependency = args.dependency || new Dependency();
	}

	doStuff() {
		return this.dependency.doMoreStuff();
	}
}
