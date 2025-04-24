import { formatCurrency } from '../../scripts/utils/money.js';

describe(`test suite: formatCurrency`, () => {
    it(`convert cents into Dollor`, () => {
        expect(formatCurrency(2095)).toEqual(`20.95`);
    });

    it(`Work with 0 `, () => {
        expect(formatCurrency(0)).toEqual(`0.00`);
    });

    it(`rounds up to the nearest cent `, () => {
        expect(formatCurrency(20000.5)).toEqual(`200.01`);
    });
})