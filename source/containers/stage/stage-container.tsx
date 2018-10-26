import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { IPersonDTO, IState } from '../../interfaces';
import { Stage } from './stage';
import { FILTER_TYPES } from '../../enums';

export interface IStageOwnProps {
  readonly title: string;
}

export interface IPeopleListStoreProps {
  readonly people: IPersonDTO[];
  readonly stage: string;
}

export function mapStateToProps(state: IState, stage: IStageOwnProps): IPeopleListStoreProps {
  const people: IPersonDTO[] = state.people.filter((person: IPersonDTO) => {

    return  person.stage === stage.title
      && !(state.filters[FILTER_TYPES.CITY] && person[FILTER_TYPES.CITY] !== state.filters[FILTER_TYPES.CITY])
      && !(state.filters[FILTER_TYPES.NAME] && person[FILTER_TYPES.NAME] !== state.filters[FILTER_TYPES.NAME]);
  });
  return {people, stage: stage.title};
}

export type IPeopleListConnectedProps = IPeopleListStoreProps & ReactRedux.DispatchProp<Redux.Action>;

export const StageContainer: React.ComponentClass<IStageOwnProps> =
  ReactRedux.connect(mapStateToProps)(Stage);
