import * as React from 'react';
import { IPeopleListConnectedProps } from './stage-container';
import { IPersonDTO } from '../../interfaces';
import { ProfileCard } from '../../components/profile-card';

export class Stage extends React.Component<IPeopleListConnectedProps> {
  constructor(props: IPeopleListConnectedProps) {
    super(props);
  }

  public render(): JSX.Element {
    if (this.props.people.length) { return <h2>{this.props.stage}</h2>; }
    return (
      <React.Fragment>
        <h2>{this.props.stage}</h2>
        {this.props.people.map((person: IPersonDTO) => <ProfileCard key={person.name} personData={person}/>)}
      </React.Fragment>
    )
      ;
  }
}
