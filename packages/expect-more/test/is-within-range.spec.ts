import { notNumbersWithinRange, numbersWithinRange } from '../../../scripts/fixtures';
import * as api from '../src';

check.it('accepts if value is a number falling within the given range', numbersWithinRange, (value) => {
  expect(api.isWithinRange(8, 15, value)).toEqual(true);
  expect(api.isWithinRange(8)(15)(value)).toEqual(true);
});

check.it('rejects otherwise', notNumbersWithinRange, (value) => {
  expect(api.isWithinRange(8, 15, value)).toEqual(false);
  expect(api.isWithinRange(8)(15)(value)).toEqual(false);
});
