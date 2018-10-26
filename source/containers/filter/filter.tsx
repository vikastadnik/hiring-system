import * as React from 'react';
import * as Actions from '../../actions';
import * as qs from 'query-string';
import { IFilterConnectedProps as IProps } from './filter-container';
import { IPersonDTO } from '../../interfaces';
import { FILTER_TYPES } from "../../enums";

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
      this.setState({availableValues});
    }
  }

  public onChangeFilterValue(e): void {
    const selectedValue: string = e.target.value;
    this.setState({selectedValue});
    this.props.dispatch(Actions.setFilter({title: this.props.type, value: selectedValue}));

    const {city, name} = qs.parse(this.props.history.location.search);
    let search: string = ``;
    if (this.props.type === FILTER_TYPES.CITY && name) {
      search = selectedValue
        ? `?${this.props.type}=${selectedValue}&name=${name}`
        : `?name=${name}`;
    } else if (this.props.type === FILTER_TYPES.NAME && city) {
      search = selectedValue
        ? `?${this.props.type}=${selectedValue}&city=${city}`
        : `?city=${city}`;
    } else if (selectedValue) {
      search = `?${this.props.type}=${selectedValue}`;
    }

    this.props.history.push({
      search,
      pathname: '/',
    })
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
