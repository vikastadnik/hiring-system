import * as Actions from '../actions';
import { IPersonDTO } from '../interfaces';

export type ActionType = Actions.ISetPeopleData & Actions.IUpdatePersonStage;
const initial: IPersonDTO[] = [];

export function people(
  state: IPersonDTO[] = initial,
  action: ActionType
): IPersonDTO[] {
  switch (action.type) {
    case Actions.SET_PEOPLE_DATA:
      return action.people;
    case Actions.CHANGE_PERSON_STAGE:
      return updatePeopleList(action, state);
    default:
      return state;
  }
}

export function updatePeopleList(action: Actions.IUpdatePersonStage, state: IPersonDTO[]): IPersonDTO[] {
  const slicedPeopleList: IPersonDTO[] = state.filter((person: IPersonDTO) => person.uuid !== action.person.uuid);
  return [...slicedPeopleList, action.person];
}
