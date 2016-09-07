import $ from 'jquery';

export class UIBaseComponent {
	constructor() {
		this.component = null;
	}

	addComponent() {
		throw 'Required: override addComponent()';
	}

	appendToComponent(comp) {
		this.createComponent();
		comp.append(this.component);
	}

	createComponent() {
		const comp = this.addComponent();
		this.component = $(comp);
	}
}

