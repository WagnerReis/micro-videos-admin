import { Uuid } from "../uuid.vo";
import { validate as uuidValidate } from 'uuid';

describe('Uuid Unit Tests', () => {
  const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');

  test('should throw error when uuid is invalid', () => {
    expect(() => {
      new Uuid('invalid-uuid')
    }).toThrowError('ID must be a valide UUID');
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test('should create a valid uuid', () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(uuidValidate(uuid.id)).toBe(true);
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });

  test('should accept a valid uuid', () => {
    const uuid = new Uuid('087cbc96-6537-11ee-8c99-0242ac120002');
    expect(uuid.id).toBe('087cbc96-6537-11ee-8c99-0242ac120002');
    expect(validateSpy).toHaveBeenCalledTimes(1);
  });
});