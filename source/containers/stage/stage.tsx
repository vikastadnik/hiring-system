import * as React from 'react';
import * as Actions from '../../actions';
import { IPeopleListConnectedProps } from './stage-container';
import { IPersonDTO } from '../../interfaces';
import { ProfileCard } from '../../components/profile-card';

export class Stage extends React.Component<IPeopleListConnectedProps> {
  constructor(props: IPeopleListConnectedProps) {
    super(props);

    this.onChangeHiringStage = this.onChangeHiringStage.bind(this);
  }

  public onChangeHiringStage(uuid: string, stage: string): void {
    const person: IPersonDTO = this.props.people.find((person: IPersonDTO) => person.uuid === uuid);
    this.props.dispatch(Actions.updatePersonStage({...person, stage}));
  }

  public getUserList(): JSX.Element[] {
    return (
      this.props.people.map((person: IPersonDTO) => {
        return (
          <ProfileCard
            key={person.name}
            personData={person}
            onChangeHiringStage={this.onChangeHiringStage}
          />
        );
      }));
  }

  public render(): JSX.Element {
    if (!this.props.people.length) {
      return <h2>{this.props.stage}</h2>;
    }
    return (
      <React.Fragment>
        <h2>{this.props.stage}</h2>
        {this.getUserList()}
      </React.Fragment>
    );
  }
}
