import * as Redux from 'redux';
import { IState } from '../interfaces';
import { people } from './people';
/** Main reducer object */
export const Main: Redux.Reducer<IState> = Redux.combineReducers({
  people
});
