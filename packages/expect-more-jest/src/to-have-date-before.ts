import { isBefore } from 'expect-more';
import { createResult } from './lib/create-result';
import { getIn } from './lib/get-in';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that value has an own or nested named property which is a date before the given date.
       * @example
       * expect(received).toHaveBeenCalledWith(
       *   expect.toHaveDateBefore('foo.bar')
       * );
       */
      toHaveDateBefore<T>(propPath: string, otherDate: Date): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that value has an own or nested named property which is a date before the given date.
       * @example
       * expect({ foo: { bar: X } }).toHaveDateBefore('foo.bar');
       */
      toHaveDateBefore(propPath: string, otherDate: Date): R;
    }
  }
}

export const toHaveDateBeforeMatcher = (received: any, propPath: string, otherDate: Date) =>
  createResult({
    message: () => `expected ${propPath} of ${received} to be date before ${otherDate}`,
    notMessage: () => `expected ${propPath} of ${received} not to be date before ${otherDate}`,
    pass: isBefore(otherDate, getIn(propPath.split('.'), received))
  });

expect.extend({ toHaveDateBefore: toHaveDateBeforeMatcher });
