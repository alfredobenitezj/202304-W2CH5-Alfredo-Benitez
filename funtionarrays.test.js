import { addPush } from "./app/push.js";
import lenk from "./index.js";

describe("Given a funtion length", () => {
  describe("When it receives['coche','llanta','volante']", () => {
    test("Then it should return true", () => {
      const array = ["coche", "llanta", "volante"];

      const expectedResult = true;

      const result = lenk(array);

      expect(result).toBe(expectedResult);
    });
  });
});

describe("Give a funtion when push a value in array ", () => {
  describe("when it recieves['silvia',Raquel' 'Alfredo'"),
    () => {
      test("Then it should return array with new element ");
      const array = ["silvia", "Raquel", "Alfredo"];
      const expectedResult = true;
      const result = addPush(array);
      expect(result).toBe(expectedResult);
    };
});
describe("Give a funtion when push a value in array ", () => {
  describe("when it recieves['Edu','Coba''Alejandro"),
    () => {
      test("Then it should return array with new element ");
      const array = ["Edu", "Coba", "Alejandro"];
      const expectedResult = true;
      const result = addPush(array);
      expect(result).toBe(expectedResult);
    };
});
