let array = ["Raquel", "Silvia", "sofia"];

const addPush = (array, ...ElementAdding) => {
  const objectToPUsh = [...ElementAdding];

  for (let index = 0; index < objectToPUsh.length; index++) {
    array[array.length] = objectToPUsh[index];
  }

  return array.length;
};
export { addPush };
