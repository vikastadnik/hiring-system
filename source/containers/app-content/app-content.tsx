import * as React from 'react';
import { IAppContentConnectProps } from './app-content-container';
import { IPersonDTO } from '../../interfaces';
import { BaseApi } from '../../api';
import { AxiosError } from 'axios';
import * as Actions from '../../actions/index';
import * as qs from 'query-string';
import { StageContainer } from '../stage/stage-container';
import { FILTER_TYPES, HIRING_STAGES } from '../../enums';
import { FilterContainer } from "../filter/filter-container";

export class AppContent extends React.Component<IAppContentConnectProps, IState> {
  constructor(props: IAppContentConnectProps) {
    super(props);
    this.state = {
      people: [],
      error: null
    };
  }

  public componentDidMount(): void {
    BaseApi.getPeople()
      .then((people: IPersonDTO[]) => {
        this.props.dispatch(Actions.setPeopleData(people));
      })
      .catch((error: AxiosError) => {
        this.setState({error});
      });

    const {city, name} =  qs.parse(this.props.location.search);
    city && this.props.dispatch(Actions.setFilter({title: FILTER_TYPES.CITY, value: city}));
    name && this.props.dispatch(Actions.setFilter({title: FILTER_TYPES.NAME, value: name}));

  }

  onChangeFilter()

  public render(): JSX.Element {
    return (
      <React.Fragment>
        <div className="ui three column doubling stackable grid container">
          <FilterContainer title="City" type={FILTER_TYPES.CITY} history={this.props.history}/>
          <FilterContainer title="Name" type={FILTER_TYPES.NAME} history={this.props.history}/>
        </div>
        <div className="ui three column doubling stackable grid container">
          <div className="column">
            <StageContainer title={HIRING_STAGES.APPLIED}/>
          </div>
          <div className="column">
            <StageContainer title={HIRING_STAGES.INTERVIEWING}/>
          </div>
          <div className="column">
            <StageContainer title={HIRING_STAGES.HIRED}/>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export interface IState {
  readonly people: IPersonDTO[];
  readonly error: AxiosError;
}
