import { getAdults } from "./filter";

it('should check if the object is empty', () => {
  let result = getAdults({});

  expect(result).toEqual({});
});


it('should get a sorted array', () => {
  let result = getAdults({'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({'John Doe': 19, Bob: 18 });
});