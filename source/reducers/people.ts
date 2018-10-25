import * as Actions from '../actions';
import { IPersonDTO } from '../interfaces';

export type ActionType = Actions.ISetPeopleData;
const initial: IPersonDTO[] = [];

export function people(
  state: IPersonDTO[] = initial,
  action: ActionType
): IPersonDTO[] {
  switch (action.type) {
    case Actions.SET_PEOPLE_DATA:
      return { ...action.people };
    default:
      return state;
  }
}
