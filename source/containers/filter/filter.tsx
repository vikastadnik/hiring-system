import * as React from 'react';
import * as Actions from '../../actions';
import { IFilterConnectedProps as IProps } from './filter-container';
import { IPersonDTO } from '../../interfaces';
import { updateQueryStringParameter } from '../../functions';

export class Filter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      availableValues: [],
      selectedValue: ''
    };
    this.onChangeFilterValue = this.onChangeFilterValue.bind(this);
  }

  public componentDidUpdate(previous: IProps): void {
    if (this.props.value !== previous.value && this.props.value) {
      this.setState({selectedValue: this.props.value});
    }
    if (this.props.people !== previous.people && this.props.people.length) {
      let availableValues: string[] = this.props.people.map((person: IPersonDTO) => person[this.props.type]);
      availableValues = [...new Set(availableValues)];
      availableValues.sort();
      this.setState({availableValues});
    }
  }

  public onChangeFilterValue(e: React.ChangeEvent<HTMLSelectElement>): void {
    const selectedValue: string = e.currentTarget.value;
    this.setState({selectedValue});
    this.props.dispatch(Actions.setFilter({title: this.props.type, value: selectedValue}));
    const currentSearchParams: string  = this.props.history.location.search;
    const search: string = updateQueryStringParameter(currentSearchParams, this.props.type, selectedValue);

    // @ts-ignore
    this.props.history.push({
      search,
      pathname: '/'
    });
  }

  public render(): JSX.Element {
    return (
      <div style={{marginTop: '20px'}}>
        <h4>{this.props.title}</h4>
        <select
          name={this.props.type}
          value={this.state.selectedValue}
          onChange={this.onChangeFilterValue}
        >
          <option value="">None</option>
          {this.state.availableValues.map((value: string) => <option key={value} value={value}>{value}</option>)}
        </select>
      </div>
    );
  }
}

export interface IState {
  readonly availableValues: string[];
  readonly selectedValue: string;
}
