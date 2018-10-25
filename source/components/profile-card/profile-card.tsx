import * as React from 'react';
import { IPersonDTO } from '../../interfaces';
import { HIRING_STAGES } from '../../enums';

export class ProfileCard extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  public render(): JSX.Element {
    const { name, picture, stage } = this.props.personData;
    return (
      <div className="person">
        <img className="photo" src={picture}/>
        <div className="name">{name}</div>
        {(stage !== HIRING_STAGES.HIRED) ? <div className="to-prev-status"> prev </div> : null}
        {(stage !== HIRING_STAGES.APPLIED) ? <div className="to-next-status"> next </div> : null}
      </div>
    );
  }
}

export interface IProps {
  readonly personData: IPersonDTO;
}
