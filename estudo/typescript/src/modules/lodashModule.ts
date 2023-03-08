import _ from "lodash";

// Declarando a função
_.mul = function (arr: number[]): number {
  return arr.reduce((acc, val) => acc * val, 1);
};

export default _;
