import * as Redux from 'redux';
import { IPersonDTO } from '../interfaces';

export const SET_PEOPLE_DATA: string = 'SET_PEOPLE_DATA';

export interface ISetPeopleData extends Redux.Action {
  readonly people: IPersonDTO[];
}

export function setPeopleData(people: IPersonDTO[]): ISetPeopleData {
  return { type: SET_PEOPLE_DATA, people };
}
