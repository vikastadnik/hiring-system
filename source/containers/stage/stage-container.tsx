import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { IPersonDTO, IState } from '../../interfaces';
import { Stage } from './stage';

export interface IStageOwnProps {
  readonly title: string;
}

export interface IPeopleListStoreProps {
  readonly people: IPersonDTO[];
  readonly stage: string;
}

export function mapStateToProps(state: IState, stage: IStageOwnProps): IPeopleListStoreProps {
  const people: IPersonDTO[] = state.people;
  return { people, stage: stage.title };
}

export type IPeopleListConnectedProps = IPeopleListStoreProps & ReactRedux.DispatchProp<Redux.Action>;

export const StageContainer: React.ComponentClass<IStageOwnProps> =
  ReactRedux.connect(mapStateToProps)(Stage);