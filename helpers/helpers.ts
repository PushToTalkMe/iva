import { IArr, IStp } from "../interfaces/stp.interface.js";

export const stp = (arr: IArr, name: string): IStp => {
  const src = arr.VIDEO[arr.VIDEO.findIndex((el) => el.SRC.includes(name))].SRC;
  return { src };
};
