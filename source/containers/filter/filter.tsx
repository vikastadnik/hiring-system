import * as React from 'react';
import * as Actions from '../../actions';
import {IFilterConnectedProps as IProps } from './filter-container';
import { IPersonDTO } from '../../interfaces';

export class Filter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      availableValues: []
    };

    this.onChangeFilterValue = this.onChangeFilterValue.bind(this);
  }

  public componentDidUpdate(previous: IProps): void {
    if (this.props.people !== previous.people && this.props.people.length) {
      let availableValues: string[] = this.props.people.map((person: IPersonDTO) => person[this.props.type]);
      availableValues = [...new Set(availableValues)];
      this.setState({availableValues});
    }
  }

  public onChangeFilterValue(e): void {
    const selectedValue: string = e.target.value;
    this.props.dispatch(Actions.setFilter({title: this.props.type, value: selectedValue}));
  }

  public render(): JSX.Element {
    return (
      <div style={{marginTop: '20px'}}>
        <h4>{this.props.title}</h4>
        <select onChange={this.onChangeFilterValue}>
          <option value="">None</option>
          {this.state.availableValues.map((value: string) => <option key={value} value={value}>{value}</option>)}
        </select>
      </div>
    );
  }
}

export interface IState {
  readonly availableValues: string[];
}
