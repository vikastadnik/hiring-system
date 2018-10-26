import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { IPersonDTO, IState } from '../../interfaces';
import { Filter } from './filter';

export interface IFilterOwnProps {
  readonly title: string;
  readonly type: string;
}

export interface IFilterStoreProps {
  readonly title: string;
  readonly type: string;
  readonly value: string;
  readonly people: IPersonDTO[];
}

export function mapStateToProps(state: IState, ownProps: IFilterOwnProps): IFilterStoreProps {
  return {people: state.people, value: state.filters[ownProps.type], title: ownProps.title, type: ownProps.type};
}

export type IFilterConnectedProps = IFilterStoreProps & ReactRedux.DispatchProp<Redux.Action>;

export const FilterContainer: React.ComponentClass<IFilterOwnProps> =
  ReactRedux.connect(mapStateToProps)(Filter);
