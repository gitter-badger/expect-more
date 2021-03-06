import { nonEmptyStrings, notNonEmptyStrings } from '../../../test/fixtures';
import api = require('../src');

check.it('accepts if value is a string with at least one character', nonEmptyStrings, (value) => {
  expect(api.isNonEmptyString(value)).toEqual(true);
});

check.it('rejects otherwise', notNonEmptyStrings, (value) => {
  expect(api.isNonEmptyString(value)).toEqual(false);
});
