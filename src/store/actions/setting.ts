export const SETTING_SET_DATE = 'SETTING_SET_DATE';
export function setDate(date: number) {
  return {
    type: SETTING_SET_DATE,
    payload: date,
  };
}
export const SETTING_SET_WORKDAY = 'SETTING_SET_WORKDAY';
export function setWorkDay(value: number) {
  return {
    type: SETTING_SET_WORKDAY,
    payload: value,
  };
}
export const SETTING_SET_FREEDAY = 'SETTING_SET_FREEDAY';
export function setFreeDay(value: number) {
  return {
    type: SETTING_SET_FREEDAY,
    payload: value,
  };
}
