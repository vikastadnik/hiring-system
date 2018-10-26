import * as Actions from '../actions';
import { IFilters } from '../interfaces';

export type ActionType = Actions.ISetFilter;

const initial: IFilters = {city: '', name: ''};

export function filters(
  state: IFilters = initial,
  action: ActionType
): IFilters {
  switch (action.type) {
    case Actions.SET_FILTER:
      return {...state, [action.filterData.title]: action.filterData.value};
    default:
      return state;
  }
}
