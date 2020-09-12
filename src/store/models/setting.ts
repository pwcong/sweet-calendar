export interface ISetting {
  date?: number;
  workDay: number;
  freeDay: number;
}

const state: ISetting = {
  date: undefined,
  workDay: 3,
  freeDay: 2,
};

export default state;
