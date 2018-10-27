import * as React from 'react';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import { RouteConfigComponentProps } from 'react-router-config';
import { IPersonDTO, IState } from '../../interfaces';
import { Filter } from './filter';

export interface IFilterProps {
  readonly title: string;
  readonly type: string;
  readonly history: Partial<RouteConfigComponentProps<{}>>;
}

export interface IFilterStoreProps extends IFilterProps {
  readonly value: string;
  readonly people: IPersonDTO[];
}

export function mapStateToProps(state: IState, props: IFilterProps): IFilterStoreProps {
  return {people: state.people, value: state.filters[props.type], ...props};
}

export type IFilterConnectedProps = IFilterStoreProps & ReactRedux.DispatchProp<Redux.Action>;

export const FilterContainer: React.ComponentClass<IFilterProps> =
  ReactRedux.connect(mapStateToProps)(Filter);
