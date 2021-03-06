import { isLongerThan } from 'expect-more';
import { createResult } from './lib/create-result';

declare global {
  namespace jest {
    interface Expect {
      /**
       * Asserts that a value is a `String` or `Array` whose length is greater than `other`.
       * @param other
       * @example
       * expect(appendedFile.contents).toEqual(expect.toBeLongerThan(file.contents));
       * @example
       * expect(appendedFile).toEqual(
       *   expect.objectContaining({
       *     contents: expect.toBeLongerThan(file.contents)
       *   })
       * );
       * @example
       * expect(onPress).toHaveBeenCalledWith(
       *   expect.objectContaining({
       *     contents: expect.toBeLongerThan(file.contents)
       *   })
       * );
       */
      toBeLongerThan<T>(other: string): Matchers<T>;
    }
    interface Matchers<R> {
      /**
       * Asserts that a value is a `String` or `Array` whose length is greater than `other`.
       * @param other
       * @example
       * expect(appendedFile.contents).toBeLongerThan(file.contents);
       */
      toBeLongerThan(other: string): R;
    }
  }
}

export const toBeLongerThanMatcher = (received: any, other: string) =>
  createResult({
    message: () => `expected ${received} to be a string which is longer than another string ${other}`,
    notMessage: () => `expected ${received} not to be a string which is longer than another string ${other}`,
    pass: isLongerThan(other, received)
  });

expect.extend({ toBeLongerThan: toBeLongerThanMatcher });
