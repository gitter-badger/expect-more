import { assertMemberMatcher } from './lib/member-assertions';

assertMemberMatcher({
  failReceived: [null],
  name: 'toHaveArrayOfStrings',
  passReceived: ['jane', 'jack']
});
