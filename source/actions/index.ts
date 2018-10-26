import * as Redux from 'redux';
import { IPersonDTO } from '../interfaces';

export const SET_PEOPLE_DATA: string = 'SET_PEOPLE_DATA';
export const CHANGE_PERSON_STAGE: string= 'CHANGE_PERSON_STAGE';

export const SET_FILTER: string = 'SET_FILTER';

export interface ISetPeopleData extends Redux.Action {
  readonly people: IPersonDTO[];
}

export interface IUpdatePersonStage extends Redux.Action {
  readonly person: IPersonDTO;
}

export interface ISetFilter extends Redux.Action {
  readonly filterData: {title: string, value: string};
}

export function setPeopleData(people: IPersonDTO[]): ISetPeopleData {
  return { type: SET_PEOPLE_DATA, people };
}

export function updatePersonStage(person: IPersonDTO): IUpdatePersonStage {
  return { type: CHANGE_PERSON_STAGE, person };
}

export function setFilter(filterData: {title: string, value: string}): ISetFilter {
  return {type: SET_FILTER, filterData};
}
