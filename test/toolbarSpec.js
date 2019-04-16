describe('Given a Toolbar Component', () => {
	it('is defined', () => {
		expect(Components.Toolbar).to.not.be.undefined;
	});

	describe('Given a Toolbar instance', () => {
		let t = null;
		beforeEach(() => {
			t = new Components.Toolbar();
		});
		afterEach(() => {
			t = null;
		});

		it('can create an instance', () => {
			expect(t).to.not.be.undefined;
		});

		it('can create an instance, has items', () => {
			expect(t.menuItems).to.not.be.undefined;
			expect(t.menuItems).to.deep.equal([]);
		});

		it('can add items', () => {
			t.addSpacer();
			expect(t.menuItems).to.not.be.undefined;
			expect(t.menuItems).to.not.deep.equal([]);
		});
	});

	describe('Given an Iconbar instance', () => {
		let t = null;
		beforeEach(() => {
			t = new Components.Iconbar();
		});
		afterEach(() => {
			t = null;
		});

		it('can create an instance', () => {
			expect(t).to.not.be.undefined;
		});

		it('can create an instance, has items', () => {
			expect(t.menuItems).to.not.be.undefined;
			expect(t.menuItems).to.deep.equal([]);
		});

		it('can add icons', () => {
			t.addIcon("id", "click", "icon", "title", false);
			expect(t.menuItems).to.not.be.undefined;
		});

		it('can add a spacer', () => {
			t.addSpacer();
			expect(t.menuItems).to.not.be.undefined;
			expect(t.menuItems).to.not.deep.equal([]);
		});
	});
});
