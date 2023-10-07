import { ValueObject } from "../domain/value-object";

class StringValueObject extends ValueObject {
  constructor(readonly value: string) {
    super();
  }
}

class ComplexValueObject extends ValueObject {
  constructor(readonly props1: string, readonly props2: number) {
    super();
  }
}

describe('ValueObject Unit Tests', () => {
  test('should be equals', () => {
    const valueObject1 = new StringValueObject('test');
    const valueObject2 = new StringValueObject('test');

    expect(valueObject1.equals(valueObject2)).toBe(true);

    const complexValueObject = new ComplexValueObject('text', 1);
    const complexValueObject2 = new ComplexValueObject('text', 1);

    expect(complexValueObject.equals(complexValueObject2)).toBe(true);
  })

  test('should not be equals', () => {
    const valueObject1 = new StringValueObject('test');
    const valueObject2 = new StringValueObject('test2');

    expect(valueObject1.equals(valueObject2)).toBe(false);
    expect(valueObject1.equals(null as any)).toBe(false);
    expect(valueObject1.equals(undefined as any)).toBe(false);

    const complexValueObject = new ComplexValueObject('text', 1);
    const complexValueObject2 = new ComplexValueObject('text', 2);

    expect(complexValueObject.equals(complexValueObject2)).toBe(false);
  })
});