import { addPush } from "./app/push.js";
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
